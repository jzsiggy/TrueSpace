import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 10px 0;
  cursor: pointer;
`
const Name = styled.span`
  font-weight: bold;
  color: #46382a;
`

const CPF = styled.span`
color: #6fbfc1;
`

export {
  Container,
  Name,
  CPF,
}