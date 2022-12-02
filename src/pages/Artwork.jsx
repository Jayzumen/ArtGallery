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
        <div className="mx-auto p-10 xl:flex xl:max-w-[1400px] xl:justify-start xl:p-0">
          <div className="mx-auto h-fit w-fit text-center">
            {/* Image Title */}
            <p className="py-4 text-center text-2xl font-bold">
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
          <div className="my-auto ml-4 h-fit flex-col">
            {artwork.artist_title ? (
              <p className="py-2 text-end text-lg font-bold xl:text-start">
                Artist:{' '}
                <span className="art-info"> {artwork.artist_title}</span>
              </p>
            ) : (
              <p className="py-2 text-end text-lg font-bold xl:text-start">
                Arist: <span className="art-info"> No data found</span>
              </p>
            )}
            <div className="mt-4 text-lg font-semibold leading-10">
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
            <div className="mx-auto mt-5 h-fit w-fit xl:mt-10">
              <Link to="/" className="h-fit text-center">
                <div className="">
                  <button type="button" className="btn mx-0">
                    HomePage
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // Display error if one occurs else display "loading"
        <div className="pt-10 text-center text-4xl font-extrabold">
          {error ? (
            <div>
              <p className="text-red-800 ">Something went wrong</p>
              <Link to="/">
                <button
                  type="button"
                  className="m-8 rounded-lg bg-slate-700 p-6 text-white hover:bg-slate-800"
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
