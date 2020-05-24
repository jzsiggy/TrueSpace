import styled from 'styled-components';

const Container = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
`

const Num = styled.div`
  width: 15%;
  font-size: 2.5rem;
  font-weight: bold;
`

const Text = styled.div`
  width: 85%;
  font-weight: bold;
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
  justify-content: center
`

const Close = styled.span`
  position: fixed;
  top: 30px;
  left: 50px;
  font-weight: bold;
  font-size: 4rem;
`

const Title = styled.div`
  width: 70%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
`

const Symps = styled.div`
  width: 100%;
  height: 75%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export {
  Container,
  Num,
  Text,
  SymptomContainer,
  Overlay,
  Close,
  Title, 
  Symps
}