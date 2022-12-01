import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { fetchOneArt } from '../fetchData';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Artwork() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState('');
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    const getArtwork = async () => {
      await fetchOneArt(id).then((res) => {
        setArtwork(res.data);
        if (!res) {
          setErrors(true);
        }
      });
    };
    getArtwork();
  }, [id]);

  return (
    <div>
      {artwork ? (
        <div className="p-10 max-w-[1200px] mx-auto">
          {/* Image Title */}
          <p className="text-center font-bold text-2xl py-4">{artwork.title}</p>
          {/* Image */}
          <div className="mx-auto w-fit h-fit">
            <LazyLoadImage
              className="max-h-[700px]"
              effect="blur"
              src={`https://www.artic.edu/iiif/2/${
                artwork.image_id || artwork.alt_image_ids[0]
              }/full/843,/0/default.jpg`}
              alt={artwork.thumbnail?.alt_text}
            />
          </div>
          {/* Image Artist */}
          <p className="text-end lg:pr-20 py-2 text-lg font-bold">
            Artist: <span className="art-info">{artwork.artist_title}</span>
          </p>
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
              Style: <span className="art-info">{artwork.medium_display}</span>
            </p>
          </div>
          {/* Button to homepage */}
          <div className="text-center mt-5">
            <Link to="/">
              <button type="button" className="btn">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      ) : (
        // Display error if one occurs else display "loading"
        <div className="text-center pt-10 text-4xl font-extrabold">
          {errors ? (
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
