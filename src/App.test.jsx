import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Renders main app', () => {
    // Arrange
    render(<App />);
    // Act
    // Expect
    expect(
      screen.getByRole('div', {
        level: 1,
      }),
    ).toHaveProperty('Navbar');
  });
});
