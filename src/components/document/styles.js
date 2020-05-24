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
  justify-content: space-between;
  align-items: flex-end;
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


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
`

const SymptomContainer = styled.div`
  position: fixed;
  top: 40px;
  bottom: 40px;
  right: 40px;
  left: 40px;
  background-color: white;
  z-index: 10;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  overflow-y: scroll;
`

const Close = styled.span`
  position: fixed;
  top: 30px;
  left: 50px;
  font-weight: bold;
  font-size: 4rem;
`

export {
  SectionContainer,
  NavContainer,
  Back,
  SymptomContainer,
  Overlay,
  Close
};