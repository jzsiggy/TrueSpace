import React , { Component } from 'react';
import { Container , LeadingText } from './styles';
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
        {
          Object.keys(this.props.cancerSymp).map((key, index) => {
            return(
              <CancerType
              key={index}
              name={key}
              symptoms={this.props.cancerSymp[key]}
              />
            )
          })
        }
      </Container>
    )
  };
};

export default CancerSymptoms;