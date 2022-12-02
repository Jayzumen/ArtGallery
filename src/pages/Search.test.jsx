import { render, screen } from '@testing-library/react';
import Search from './Search';

test('On initial render, the search button is disabled', () => {
  render(<Search />);
  screen.debug();
});
