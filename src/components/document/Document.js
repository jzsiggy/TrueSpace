import React , { Component } from 'react';
import Header from './header/Header';
import Basic from './basicInfo/Basic';
import CovidProb from './probCovid/CovidProb';
import CancerSymptoms from './cancerSymptoms/CancerSymptoms';

import { user } from '../../seedDB';
import { SectionContainer } from './styles';

class Document extends Component {
  state = {
    user,
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
        </SectionContainer>
      </div>
    )
  }
}

export default Document;