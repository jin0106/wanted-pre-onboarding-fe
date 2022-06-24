import React from 'react';
import styled from 'styled-components';

function LoginPage() {
  return (
    <Form>
      <Input placeholder="Type your id" />
      <Input type="password" placeholder="Type your password" />
      <Button disabled>Login</Button>
    </Form>
  );
}

export default LoginPage;

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;
