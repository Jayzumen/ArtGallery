import React from "react";

function SearchedArt({ art }) {
  // if art is not defined do nothing
  if (!art) {
    return null;
  }

  return (
    <div className='w-full h-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {art.map((result) => (
          <a
            href={`https://www.artic.edu/artworks/${result.id}`}
            target='_blank'
            className='m-2 bg-slate-400 border-black border-2'
            key={result.id}>
            <div className='text-center'>
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
                className='h-96 w-full mx-auto'
                src={`https://www.artic.edu/iiif/2/${result?.image_id}/full/843,/0/default.jpg`}
                alt={result.thumbnail?.alt_text}
              />
            </div>
          </a>
        ))}
      </div>
      <div className='p-5 text-center'>
        <button className='rounded-md p-2 mx-4 text-white bg-slate-700 hover:bg-slate-800'>
          Prev Page
        </button>
        <button className='rounded-md p-2 mx-4 text-white bg-slate-700 hover:bg-slate-800'>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default SearchedArt;
