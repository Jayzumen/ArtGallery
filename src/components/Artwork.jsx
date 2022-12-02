import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { fetchOneArt } from '../fetchData';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Artwork() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArtwork = async () => {
      await fetchOneArt(id).then((res) => {
        setArtwork(res.data);
        if (!res.ok) {
          setError(error);
        }
      });
    };
    getArtwork();
  }, [id]);

  return (
    <div>
      {artwork ? (
        <div className="p-10 mx-auto xl:max-w-[1400px] xl:flex xl:justify-start xl:p-0">
          <div className="mx-auto w-fit h-fit">
            {/* Image Title */}
            <p className="text-center font-bold text-2xl py-4">
              {artwork.title}
            </p>
            {/* Image */}
            <LazyLoadImage
              className="max-h-[700px]"
              effect="blur"
              src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
              alt={artwork.thumbnail?.alt_text}
            />
          </div>
          {/* Image Artist */}
          <div className="h-fit flex-col my-auto ml-4">
            {artwork.artist_title ? (
              <p className="text-end xl:text-start py-2 text-lg font-bold">
                Artist:{' '}
                <span className="art-info"> {artwork.artist_title}</span>
              </p>
            ) : (
              <p className="text-end xl:text-start py-2 text-lg font-bold">
                Arist: <span className="art-info"> No data found</span>
              </p>
            )}
            <div className="font-semibold text-lg mt-4 leading-10">
              {/* Artist Bio  */}
              <p>
                Artist Bio:{' '}
                <span className="art-info">{artwork.artist_display}</span>
              </p>
              {/* Date Completed */}
              <p>
                Published in:{' '}
                <span className="art-info">{artwork.date_display}</span>
              </p>
              {/* Country of Origin */}
              <p>
                Country of Origin:{' '}
                <span className="art-info">{artwork.place_of_origin}</span>
              </p>
              {/* Art Info */}
              <p>
                Type:{' '}
                <span className="art-info">{artwork.artwork_type_title}</span>
              </p>
              <p>
                Style:{' '}
                <span className="art-info">{artwork.medium_display}</span>
              </p>
            </div>
            {/* Button to homepage */}
            <div className="mt-5 xl:mt-10 w-fit h-fit mx-auto">
              <Link to="/" className="text-center h-fit">
                <div className="">
                  <button type="button" className="btn mx-0">
                    Go Back
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // Display error if one occurs else display "loading"
        <div className="text-center pt-10 text-4xl font-extrabold">
          {error ? (
            <div>
              <p className=" text-red-800">Something went wrong</p>
              <Link to="/">
                <button
                  type="button"
                  className="m-8 p-6 rounded-lg bg-slate-700 text-white hover:bg-slate-800"
                >
                  Go back to Homepage
                </button>
              </Link>
            </div>
          ) : (
            <div>data is loading...</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Artwork;
