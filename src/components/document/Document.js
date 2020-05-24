import React , { Component } from 'react';
import Axios from 'axios';

import Header from './header/Header';
import Basic from './basicInfo/Basic';
import CovidProb from './probCovid/CovidProb';
import CancerSymptoms from './cancerSymptoms/CancerSymptoms';

import { withRouter } from 'react-router-dom';

import { SectionContainer , NavContainer , Back } from './styles';
import { Brown } from '../colors';

class Document extends Component {
  state = {
    user: null,
  };

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