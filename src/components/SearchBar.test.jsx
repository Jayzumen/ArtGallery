import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('disables search button when query length is less than 3', () => {
    const { getByRole } = render(<SearchBar query="" />);
    const searchButton = getByRole('button', { name: /search/i });

    expect(searchButton.disabled).toBe(true);
  });

  test('enables search button when query length is greater than or equal to 3', () => {
    const { getByRole } = render(<SearchBar query="art" />);
    const searchButton = getByRole('button', { name: /search/i });

    expect(searchButton.disabled).toBe(false);
  });

  test('calls fetchData and updates pageNumber, art, and query when search button is clicked', async () => {
    const setPageNumber = sinon.stub();
    const setArt = sinon.stub();
    const setQuery = sinon.stub();
    const { getByLabelText, getByRole } = render(
      <SearchBar
        query="art"
        setPageNumber={setPageNumber}
        setArt={setArt}
        setQuery={setQuery}
      />
    );
    const searchInput = getByLabelText('Search');
    const searchButton = getByRole('button', { name: /search/i });

    fireEvent.change(searchInput, { target: { value: 'abstract art' } });
    fireEvent.click(searchButton);

    setPageNumber(1);
    setArt('art');
    setQuery('abstract art');

    sinon.assert.calledWith(setPageNumber, 1);
    sinon.assert.calledWith(setArt, 'art');
    sinon.assert.calledWith(setQuery, 'abstract art');
  });
});
