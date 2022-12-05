import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import Pagination from './Pagination';

describe('Pagination component', () => {
  test('renders with correct page number', () => {
    const { getByText } = render(<Pagination pageNumber={1} />);
    expect(getByText('Page: 1')).toBeInTheDocument();
  });

  test('disables prev button when isPrevButtonDisabled is true', () => {
    const { getByText } = render(<Pagination isPrevButtonDisabled={true} />);
    expect(getByText('Prev Page')).toBeDisabled();
  });

  test('disables next button when isNextButtonDisabled is true', () => {
    const { getByText } = render(<Pagination isNextButtonDisabled={true} />);
    expect(getByText('Next Page')).toBeDisabled();
  });

  test('calls handleClickPrev when prev button is clicked', () => {
    const handleClickPrev = sinon.stub();
    const { getByText } = render(
      <Pagination handleClickPrev={handleClickPrev} />
    );
    const prevButton = getByText('Prev Page');
    fireEvent.click(prevButton);
    expect(handleClickPrev.calledOnce).toBe(true);
  });

  test('calls handleClickNext when next button is clicked', () => {
    const handleClickNext = sinon.stub();
    const { getByText } = render(
      <Pagination handleClickNext={handleClickNext} />
    );
    const nextButton = getByText('Next Page');
    fireEvent.click(nextButton);
    expect(handleClickNext.calledOnce).toBe(true);
  });
});
