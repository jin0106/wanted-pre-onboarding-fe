import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import toBeInTheDocument from '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
beforeEach(() => {
  render(<LoginPage />);
});

describe('Login Page Test', () => {
  it('has email input', () => {
    const emailInput = screen.getByPlaceholderText(
      '전화번호, 사용자 이름 또는 이메일'
    );
    expect(emailInput).toBeInTheDocument();
  });

  it('has password input', () => {
    const passwordInput = screen.getByPlaceholderText('비밀번호');
    expect(passwordInput).toBeInTheDocument();
  });

  it('has password type for password input', () => {
    const passwordInput = screen.getByPlaceholderText('비밀번호');
    expect(passwordInput.type).toBe('password');
  });

  it('has login button', () => {
    const button = screen.getByText('Login');
    expect(button).toBeInTheDocument();
  });

  it('check if button is disable initially', () => {
    const button = screen.getByText('Login');
    expect(button).toBeDisabled();
  });
});

describe('Interactions', () => {
  it('enables the button when both email and password inputs are filled', () => {
    const emailInput = screen.getByPlaceholderText(
      '전화번호, 사용자 이름 또는 이메일'
    );
    const passwordInput = screen.getByPlaceholderText('비밀번호');
    userEvent.type(emailInput, 'wanted@naver.com');
    userEvent.type(passwordInput, 'Wanted1234!!');
    const button = screen.getByText('Login');
    expect(button).toBeEnabled();
  });
});
