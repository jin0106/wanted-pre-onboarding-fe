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
    const emailInput = screen.getByPlaceholderText('Type your email');
    expect(emailInput).toBeInTheDocument();
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

describe('Interactions', () => {
  it('enables the button when both email and password inputs are filled', () => {
    const emailInput = screen.getByPlaceholderText('Type your email');
    const passwordInput = screen.getByPlaceholderText('Type your password');
    userEvent.type(emailInput, 'wjinh');
    userEvent.type(passwordInput, 'test123!');
    const button = screen.getByText('Login');
    expect(button).toBeEnabled();
  });
});
