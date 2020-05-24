import React , { Component } from 'react'
import Axios from 'axios';

import Header from './header/Header';
import PatientList from './patientList/PatientList';
import { SectionContainer } from './styles';

class Home extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    Axios.get('https://polar-inlet-24420.herokuapp.com/relatorios/')
    .then(response => {
      console.log(response.data)
      this.setState({
        users: response.data
      });
    })
  };
  
  render() {
    console.log(this.state.users)
    return(
      <SectionContainer>
        <Header />
        <PatientList 
        users={this.state.users}
        />
      </SectionContainer>
    )
  }
}

export default Home;