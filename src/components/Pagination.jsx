import React from 'react';

function Pagination({
  handleClickPrev,
  handleClickNext,
  isPrevButtonDisabled,
  isNextButtonDisabled,
  pageNumber
}) {
  return (
    <div className="flex items-center justify-center p-5">
      <button
        disabled={isPrevButtonDisabled}
        name="prev-btn"
        type="button"
        onClick={handleClickPrev}
        className="btn disabled:bg-slate-500 disabled:hover:bg-slate-500"
      >
        Prev Page
      </button>

      <p className="text-xl font-bold">Page: {pageNumber}</p>

      <button
        disabled={isNextButtonDisabled}
        name="next-btn"
        type="button"
        onClick={handleClickNext}
        className="btn disabled:bg-slate-500 disabled:hover:bg-slate-500"
      >
        Next Page
      </button>
    </div>
  );
}

export default Pagination;
