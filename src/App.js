import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';

function App() {
  const isLogin = localStorage.getItem('userInfo');

  return isLogin ? <Navbar /> : <LoginPage />;
}

export default App;
