import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('should render the Navbar, Search', () => {
    render(<App />);

    // Navbar component
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Search component
    expect(
      screen.getByRole('searchbox', { name: /search/i })
    ).toBeInTheDocument();
  });
});
