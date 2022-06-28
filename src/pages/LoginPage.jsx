import React, { useState } from 'react';
import styled from 'styled-components';
import {
  checkEmailValidation,
  checkPasswordValidation,
} from '../utils/checkValidation';
function LoginPage() {
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [validation, setValidation] = useState({
    email: true,
    password: true,
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setLoginInfo({ ...loginInfo, [id]: value });
  };

  const checkInputValidation = (e) => {
    const { id, value } = e.target;
    const isValid =
      id === 'email'
        ? checkEmailValidation(value)
        : checkPasswordValidation(value);

    setValidation({ ...validation, [id]: isValid });
    setIsDisabled(checkButton());
  };

  const checkButton = () => {
    if (
      !validation.email ||
      !validation.password ||
      loginInfo.email.length < 1 ||
      loginInfo.password.length < 1
    )
      return true;
    return false;
  };
  return (
    <Form>
      <Input
        id="email"
        placeholder="Type your email"
        onChange={changeHandler}
        validation={validation.email}
        onBlur={checkInputValidation}
      />
      <Input
        type="password"
        id="password"
        placeholder="Type your password"
        onChange={changeHandler}
        validation={validation.password}
        onBlur={checkInputValidation}
      />
      <Button disabled={isDisabled}>Login</Button>
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
