import React from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

function SearchedArt({
  art,
  handleClickNext,
  handleClickPrev,
  pageNumber,
}) {
  // if art is not defined do nothing
  if (!art) {
    return null;
  }

  return (
    <div className='w-full h-full'>
      <Pagination
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        pageNumber={pageNumber}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {art.map((result) => (
          <Link
            to={`/${result.id}`}
            className='m-2 bg-slate-400 border-black border-2'
            key={result.id}>
            <div className='text-center h-full w-full'>
              {result.title.length > 70 ? (
                <p className='min-h-[140px] font-medium text-xl'>
                  {result.title}
                </p>
              ) : (
                <p className='min-h-[140px] pt-5 text-center font-semibold text-xl'>
                  {result.title}
                </p>
              )}

              <img
                className='mx-auto object-contain'
                src={`https://www.artic.edu/iiif/2/${result?.image_id}/full/843,/0/default.jpg`}
                alt={result.thumbnail?.alt_text}
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default SearchedArt;
