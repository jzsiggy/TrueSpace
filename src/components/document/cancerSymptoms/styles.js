import styled from 'styled-components';

const Container = styled.div`
  margin-top: 5%;
  display: flex;
  width: 80%;
  flex-direction: column;

  @media (max-width: 325px) {
    width: 95%;
  }
`

const LeadingText = styled.div`
  width: 60%;
  font-weight: bold;
  margin-bottom: 3%;
  font-size: 1.2rem;
`

export {
  Container,
  LeadingText,
};