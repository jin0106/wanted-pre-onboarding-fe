import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import toBeInTheDocument from '@testing-library/jest-dom';
beforeEach(() => {
  render(<LoginPage />);
});

describe('Login Page Test', () => {
  it('has id input', () => {
    const idInput = screen.getByPlaceholderText('Type your id');
    expect(idInput).toBeInTheDocument();
  });

  it('has password input', () => {
    const passwordInput = screen.getByPlaceholderText('Type your password');
    expect(passwordInput).toBeInTheDocument();
  });

  it('has password type for password input', () => {
    const passwordInput = screen.getByPlaceholderText('Type your password');
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
