import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Main from './pages/Main';

function App() {
  const isLogin = localStorage.getItem('userInfo');

  return isLogin ? (
    <Container>
      <Navbar />
      <Main />
    </Container>
  ) : (
    <LoginPage />
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
