import React from 'react';

function Pagination({ handleClickPrev, handleClickNext, pageNumber }) {
  return (
    <div className="p-5 flex justify-center items-center">
      <button type="button" onClick={handleClickPrev} className="btn">
        Prev Page
      </button>
      <p className="font-bold text-xl">Page: {pageNumber}</p>
      <button type="button" onClick={handleClickNext} className="btn">
        Next Page
      </button>
    </div>
  );
}

export default Pagination;
