import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

test('On initial render, the search button is disabled', () => {
  render(<Search />);
  expect(screen.getByRole('button', { name: /search/i })).toBeDisabled();
});
