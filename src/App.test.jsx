import { render } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Artwork from './pages/Artwork';

test('Renders Elements properly', () => {
  // Arrange
  render(<App />);
  // Act
  // Expect
  expect(App).toContain(Navbar, Search, Artwork);
});
