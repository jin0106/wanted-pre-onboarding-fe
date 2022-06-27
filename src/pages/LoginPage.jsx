import React, { useState } from 'react';
import styled from 'styled-components';
import {
  checkEmailValidation,
  checkPasswordValidation,
} from '../utils/checkValidation';
function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [validation, setValidation] = useState({ email: true, password: true });

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setLoginInfo({ ...loginInfo, [id]: value });
  };

  const checkValidation = (e) => {
    const { id, value } = e.target;
    if (id === 'email')
      return setValidation({
        ...validation,
        [id]: checkEmailValidation(value),
      });
    if (id === 'password')
      return setValidation({
        ...validation,
        [id]: checkPasswordValidation(value),
      });
  };

  return (
    <Form>
      <Input
        id="email"
        placeholder="Type your email"
        onChange={changeHandler}
        onBlur={checkValidation}
        validation={validation.email}
      />
      <Input
        type="password"
        id="password"
        placeholder="Type your password"
        onChange={changeHandler}
        onBlur={checkValidation}
        validation={validation.password}
      />
      <Button disabled>Login</Button>
    </Form>
  );
}

export default LoginPage;

const Form = styled.form``;

const Input = styled.input`
  border: 1px solid;
  border-color: ${({ validation }) => (validation ? 'black' : 'red')};
`;

const Button = styled.button``;
