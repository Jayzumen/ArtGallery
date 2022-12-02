import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

function SearchedArt({
  art,
  handleClickNext,
  handleClickPrev,
  isNextButtonDisabled,
  isPrevButtonDisabled,
  pageNumber,
}) {
  // if art is not defined do nothing
  if (!art) {
    return null;
  }

  // console.log(art, 'art')
  return (
    <div className="h-full w-full">
      {/* Pagination */}
      <Pagination
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        isPrevButtonDisabled={isPrevButtonDisabled}
        isNextButtonDisabled={isNextButtonDisabled}
        pageNumber={pageNumber}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {art.map((result) => (
          <Link
            to={`/${result.id}`}
            className="m-2 border-2 border-black bg-slate-300 dark:border-slate-200 dark:bg-slate-800"
            key={result.id}
          >
            <div className="h-full w-full text-center">
              {result.title.length > 70 ? (
                <p className="min-h-[140px] text-xl font-medium">
                  {result.title}
                </p>
              ) : (
                <p className="min-h-[140px] pt-5 text-center text-xl font-semibold">
                  {result.title}
                </p>
              )}

              <LazyLoadImage
                className="mx-auto h-[450px] w-[450px] object-contain"
                src={`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`}
                alt={result.thumbnail?.alt_text}
                effect="blur"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        isNextButtonDisabled={isNextButtonDisabled}
        isPrevButtonDisabled={isPrevButtonDisabled}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default SearchedArt;
