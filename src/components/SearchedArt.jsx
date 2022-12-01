import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

function SearchedArt({ art, handleClickNext, handleClickPrev, pageNumber }) {
  // if art is not defined do nothing
  if (!art) {
    return null;
  }

  return (
    <div className="w-full h-full">
      <Pagination
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        pageNumber={pageNumber}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {art.map((result) => (
          <Link
            to={`/${result.id}`}
            className="m-2 bg-slate-300 dark:bg-slate-800 dark:border-slate-200 border-black border-2"
            key={result.id}
          >
            <div className="text-center h-full w-full">
              {result.title.length > 70 ? (
                <p className="min-h-[140px] font-medium text-xl">
                  {result.title}
                </p>
              ) : (
                <p className="min-h-[140px] pt-5 text-center font-semibold text-xl">
                  {result.title}
                </p>
              )}

              <LazyLoadImage
                className="mx-auto object-contain h-[450px] w-[450px] overflow-hidden"
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
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default SearchedArt;
