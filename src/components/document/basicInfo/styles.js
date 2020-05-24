import styled from 'styled-components';

const Container = styled.div`
  height: 15%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 325px) {
    width: 95%;
  }
`

const Name = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`

const CPF = styled.span`
  font-size: 1.2rem;
  letter-spacing: 2px;
`

export {
  Container,
  Name,
  CPF,
};