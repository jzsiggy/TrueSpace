import styled , { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const SectionContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 500px) {
    width: 500px;
  }
`

const NavContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  width: 95%;
  position: absolute;
  bottom: 12px;
`

const Back = styled.span`
  transition: 0.3s ease all;
  font-size: 2.3rem;
  cursor: pointer;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4af31;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  animation: ${fadeIn} 0.3s linear;
`

export {
  SectionContainer,
  NavContainer,
  Back,
};