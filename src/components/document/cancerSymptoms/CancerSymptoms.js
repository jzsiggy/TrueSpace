import React , { Component } from 'react';
import { Container , LeadingText , CancerTypeContainer } from './styles';
import { Brown, Yellow, Blue } from '../../colors';

import CancerType from './cancerTypes/CancerType';

class CancerSymptoms extends Component {
  render() {
    return(
      <Container>
        <LeadingText>
          <Brown>Dos &nbsp;</Brown>
          <Yellow>{this.props.symptoms.length} &nbsp;</Yellow>
          <Blue>sintomas <br /></Blue>
          <Brown>relatados:</Brown>
        </LeadingText>
        <CancerTypeContainer>
        {
          Object.keys(this.props.cancerSymp).map((key, index) => {
            if (this.props.cancerSymp[key].length) {
              return(
                <CancerType
                key={index}
                name={key}
                symptoms={this.props.cancerSymp[key]}
                />
              )
            }
          })
        }
        </CancerTypeContainer>
      </Container>
    )
  };
};

export default CancerSymptoms;