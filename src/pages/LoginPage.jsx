import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {
  checkEmailValidation,
  checkPasswordValidation,
} from '../utils/checkValidation';

function LoginPage() {
  const emailInput = useRef();
  const passwordInput = useRef();

  const [validation, setValidation] = useState({
    email: null,
    password: null,
  });

  const checkInput = (e) => {
    const { id } = e.target;
    const isValid =
      id === 'email'
        ? checkEmailValidation(emailInput.current.value)
        : checkPasswordValidation(passwordInput.current.value);
    setValidation({
      ...validation,
      [id]: isValid,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    if (email === 'wanted@naver.com' && password === 'Wanted123!!') {
      localStorage.setItem(
        'userInfo',
        JSON.stringify({ email, password, name: 'test' })
      );
      return location.reload();
    }
    alert('유효하지 않은 정보입니다');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          id="email"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          validation={validation.email}
          ref={emailInput}
          onChange={checkInput}
        />
        <Input
          type="password"
          id="password"
          placeholder="비밀번호"
          validation={validation.password}
          ref={passwordInput}
          onChange={checkInput}
        />
        <Button disabled={!validation.email || !validation.password}>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;
const Form = styled.form`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 30rem;
  margin: 0 auto;
`;

const Input = styled.input`
  border: 1px solid;
  border-color: ${(props) =>
    props.validation === null || props.validation
      ? props.theme.borderColor
      : 'red'};
  border-radius: 0.2rem;
  margin-bottom: 0.5rem;
  height: 2rem;
  width: 20rem;
`;

const Button = styled.button`
  width: 20rem;
  height: 2rem;
  background-color: ${({ disabled }) =>
    !disabled ? 'rgb(58,149,239)' : 'rgb(187, 224, 252)'};
  color: #fff;
  cursor: pointer;
`;
