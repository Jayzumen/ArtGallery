import React from "react";

function Pagination({
  handleClickPrev,
  handleClickNext,
  pageNumber,
}) {
  return (
    <div className='p-5 flex justify-center items-center'>
      <button onClick={handleClickPrev} className='btn'>
        Prev Page
      </button>
      <p className='font-bold text-xl'>{pageNumber}</p>
      <button onClick={handleClickNext} className='btn'>
        Next Page
      </button>
    </div>
  );
}

export default Pagination;
