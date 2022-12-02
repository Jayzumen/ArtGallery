import React from 'react';

function Pagination({
  handleClickPrev,
  handleClickNext,
  isPrevButtonDisabled,
  isNextButtonDisabled,
  pageNumber,
}) {
  return (
    <div className="p-5 flex justify-center items-center">
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

      <p className="font-bold text-xl">Page: {pageNumber}</p>

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
