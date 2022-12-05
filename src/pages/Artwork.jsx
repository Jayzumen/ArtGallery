import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneArt } from '../fetchData';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ArtworkLayout from '../components/ArtworkLayout';

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
  return <ArtworkLayout artwork={artwork} error={error} />;
}

export default Artwork;
