import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginPage from '../LoginPage';

test('allows the user to login successfully', () => {
  render(<LoginPage />);
  
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user@example.com' } });
  fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
  
  fireEvent.click(screen.getByText(/submit/i));
  
});
