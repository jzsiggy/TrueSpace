import React , { Component } from 'react';

import { Container , Num , Text } from './styles';
import { Brown , Yellow , Blue } from '../../../colors';

class CancerType extends Component {
  
  getMascFem = () => {
    if (this.props.name.substr(-1) == 'a') {
      return 'a'
    } else {
      return 'o'
    };
  };

  render() {
    return(
      <Container>
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
    )
  }
}

export default CancerType;