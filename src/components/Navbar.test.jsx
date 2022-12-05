import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('renders the correct text for the navbar heading', () => {
  const { getByText } = render(<Navbar />);
  const heading = getByText(/Art Gallery of Chicago/i);
  expect(heading).toBeInTheDocument();
});
