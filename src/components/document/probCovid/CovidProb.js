import React , { Component } from 'react';

import { ProbContainer , NumContainer , Text, Num, Percentage } from './styles'
import { Brown, Blue , Yellow } from '../../colors';

class CovidProb extends Component {
  state = {
    num : 0,
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { num } = this.state

      if (num < this.props.prob) {
        this.setState(({ num }) => ({
          num: num + 1
        }))
      }
      if (num == this.props.prob) {
        clearInterval(this.myInterval)
      } 
    }, 50)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }
  
  render() {
    return(
      <ProbContainer>
        <NumContainer>
          <Num>{this.state.num}</Num>
          <Percentage>%</Percentage>
        </NumContainer>
        <Text>
          <Brown>é a <Yellow>Probabilidade</Yellow></Brown>&emsp;
          <Brown>desse paciente ter</Brown>&nbsp;
          <Blue>COVID-19</Blue>
        </Text>
      </ProbContainer>
    )
  }
}
 export default CovidProb;