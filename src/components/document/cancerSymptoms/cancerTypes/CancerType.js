import React , { Component } from 'react';

import { Container , Num , Text , SymptomContainer , Overlay, Close, Title , Symps } from './styles';
import { Brown , Yellow , Blue } from '../../../colors';

import { translate } from '../../../translator';

class CancerType extends Component {
  
  state = {
    symptoms: false,
  };

  toggleSymptoms = () => {
    this.setState({
      symptoms: !this.state.symptoms,
    });
  }

  getMascFem = () => {
    if (this.props.name == 'Leucemia') {
      return 'a'
    } else {
      return 'o'
    };
  };

  render() {
    return(
      <>
      {
      this.state.symptoms &&
      <>
        <Overlay />
        <SymptomContainer>
          <Close onClick={this.toggleSymptoms}>&#215;</Close>
          <Title>
            <span>
            <Blue>Sintomas</Blue>&nbsp;
            <Brown>d{this.getMascFem()}</Brown>&nbsp;
            <Yellow>{this.props.name}</Yellow>
            <Brown>:</Brown>
            </span>
          </Title>
          <Symps>
          {
            this.props.symptoms.map((symp, index) => {
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
      <Container onClick={this.toggleSymptoms}>
        <Num><Blue>{this.props.symptoms.length}</Blue></Num>
        <Text>
          {
            this.props.symptoms.length == 1 ?
            <Brown>é sintoma comum d{this.getMascFem()} <br /></Brown>
            :
            <Brown>são sintomas comuns d{this.getMascFem()} <br /></Brown>
          }
          <Yellow>{this.props.name}</Yellow>
        </Text>
      </Container>
      </>
    )
  }
}

export default CancerType;