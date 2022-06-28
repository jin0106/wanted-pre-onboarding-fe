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
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={changeHandler}
        validation={validation.email}
        onBlur={checkInputValidation}
      />
      <Input
        type="password"
        id="password"
        placeholder="비밀번호"
        onChange={changeHandler}
        validation={validation.password}
        onBlur={checkInputValidation}
      />
      <Button disabled={isDisabled} validation={isDisabled}>
        Login
      </Button>
    </Form>
  );
}

export default LoginPage;

const Form = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 30rem;
  margin: 0 auto;
`;

const Input = styled.input`
  border: 1px solid;
  border-color: ${({ validation }) => (validation ? 'gray' : 'red')};
  margin-bottom: 0.5rem;
  height: 2rem;
  width: 20rem;
`;

const Button = styled.button`
  width: 20rem;
  height: 2rem;
  background-color: ${({ validation }) =>
    !validation ? 'rgb(58,149,239)' : 'rgb(187, 224, 252)'};
  color: #fff;
`;
