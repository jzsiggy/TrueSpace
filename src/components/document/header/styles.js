import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 12%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.span`
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 0px;
  margin: 0 40px;
`

const Blob = styled.div`
  height: 50px;
  width: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(/blob.svg);
  margin: 0 40px;
`

export {
  Container,
  Logo,
  Blob,
};