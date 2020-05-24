import React , { Component } from 'react';
import Axios from 'axios';

import Header from './header/Header';
import Basic from './basicInfo/Basic';
import CovidProb from './probCovid/CovidProb';
import CancerSymptoms from './cancerSymptoms/CancerSymptoms';
import { translate } from '../translator';

import { withRouter } from 'react-router-dom';

import { SectionContainer , NavContainer , Back , SymptomContainer , Overlay , Close , Title, Symps } from './styles';
import { Brown, Blue } from '../colors';

class Document extends Component {

  state = {
    symptoms: false,
    user: null,
  };

  toggleSymptoms = () => {
    this.setState({
      symptoms: !this.state.symptoms,
    });
  }

  goHome = () => {
    this.props.history.push('/');
  };

  componentWillMount() {
    Axios.get(`https://polar-inlet-24420.herokuapp.com/relatorios/${this.props.match.params.id}`)
    .then(response => {
      console.log(response)
      this.setState({
        user: response.data
      })
    })
  };

  render() {
    console.log(this.state.user);
    return(
      <div
      style={{
        'width' : '100%',
        'height' : '100%',
        'display' : 'flex',
        'justifyContent' : 'center'
      }}
      >
        {
        this.state.symptoms &&
        <>
          <Overlay />
          <SymptomContainer>
            <Close onClick={this.toggleSymptoms}>&#215;</Close>
            <Title>
              <Blue>Sintomas: </Blue>
            </Title>
            <Symps>
            {
              this.state.user.sintomas.map((symp, index) => {
                return (
                  <span 
                  key={index}
                  style={{
                    'margin':'10px 0',
                  }}
                  >
                    {translate(symp)}
                  </span>
                )
              })
            }
            </Symps>
          </SymptomContainer>
        </>
        }
        {
          this.state.user ?
            <SectionContainer>
              <Header />
              <Basic
              name={this.state.user.nome}
              cpf={this.state.user.cpf}
              />
              <CovidProb 
              prob={this.state.user.probCovid}
              />
              <CancerSymptoms 
              symptoms={this.state.user.sintomas}
              cancerSymp={this.state.user.sintCancer}
              />
              <NavContainer>
                <Back onClick={this.goHome}>&#8592;</Back>
                <span onClick={this.toggleSymptoms}>Ver todos os sintomas</span>
              </NavContainer>
            </SectionContainer>
          :
            <div
            style={{
              'height': '100%',
              'display':'flex',
              'align-items':'center',
            }}
            >
              <h1><Brown>Loading</Brown></h1>
            </div>
        }
      </div>
    )
  }
}

export default withRouter(Document);