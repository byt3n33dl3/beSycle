import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '"navbarComp.js"';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders NavBar with all links', () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );
  
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Products/i)).toBeInTheDocument();
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
});
