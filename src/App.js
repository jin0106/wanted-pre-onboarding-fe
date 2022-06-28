import React, { useEffect, useState } from 'react';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';

function App() {
  const isLogin = localStorage.getItem('userInfo');

  return isLogin ? (
    <>
      <Navbar />
      <Feed />
    </>
  ) : (
    <LoginPage />
  );
}

export default App;
