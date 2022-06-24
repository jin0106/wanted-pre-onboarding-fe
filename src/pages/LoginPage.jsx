import React, { useState } from 'react';
import styled from 'styled-components';

function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setLoginInfo({ ...loginInfo, [id]: value });
  };

  return (
    <Form>
      <Input
        id="email"
        placeholder="Type your email"
        onChange={changeHandler}
      />
      <Input
        type="password"
        id="password"
        placeholder="Type your password"
        onChange={changeHandler}
      />
      <Button disabled>Login</Button>
    </Form>
  );
}

export default LoginPage;

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;
