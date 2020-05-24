import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { Container , Name , CPF } from './styles'
class PatientList extends Component {
  
  goTo = (path) => {
    this.props.history.push(`/docs/${path}`);
  }
  
  render() {
    return(
      this.props.users.map((user, index) => {
        return(
          <Container
          key={index}
          onClick={() => this.goTo(user._id)}
          >
            <Name>{user.nome}</Name>
            <CPF>{user.cpf}</CPF>
          </Container>
        )
      })
    )
  }
}

export default withRouter(PatientList);