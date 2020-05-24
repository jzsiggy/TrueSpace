import styled from 'styled-components';

const ProbContainer = styled.div`
  height: 20%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 325px) {
    width: 95%;
  }
`

const NumContainer = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Num = styled.span`
  color: #6fbfc1;
  font-weight: bold;
  font-size: 6rem;
`

const Percentage = styled.span`
  margin-left: -15px;
  font-size: 2rem;
  color: #46382a;
`

const Text = styled.div`
  height: 100%;
  width: 65%;
  font-weight: bold;
  line-height: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

export {
  ProbContainer,
  NumContainer,
  Text,
  Num,
  Percentage,
};
