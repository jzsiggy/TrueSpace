import React , { Component } from 'react';
import { Container, Name, CPF } from './styles';
import { Blue, Brown } from '../../colors';

class Basic extends Component {
  getFirstName = () => {
    return this.props.name.split(' ')[0];
  }

  getLastName = () => {
    let nameArray = this.props.name.split(' ');
    return nameArray[nameArray.length-1];
  }
  render() {
    return(
      <Container>
        <Name>
          <Brown>{this.getFirstName()}</Brown>&nbsp;
          <Blue>{this.getLastName()}</Blue>
        </Name>
        <CPF><Brown>{this.props.cpf}</Brown></CPF>
      </Container>
    )
  }
}

export default Basic;