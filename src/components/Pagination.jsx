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
      {isPrevButtonDisabled ? (
        <button
          disabled
          type="button"
          onClick={handleClickPrev}
          className="btn bg-slate-500 hover:bg-slate-500"
        >
          Prev Page
        </button>
      ) : (
        <button type="button" onClick={handleClickPrev} className="btn">
          Prev Page
        </button>
      )}

      <p className="text-xl font-bold">Page: {pageNumber}</p>

      {isNextButtonDisabled ? (
        <button
          disabled
          type="button"
          onClick={handleClickNext}
          className="btn bg-slate-500 hover:bg-slate-500"
        >
          Next Page
        </button>
      ) : (
        <button type="button" onClick={handleClickNext} className="btn">
          Next Page
        </button>
      )}
    </div>
  );
}

export default Pagination;
