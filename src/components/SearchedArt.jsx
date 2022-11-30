import React from "react";

function SearchedArt({ art }) {
  // console.log(art);

  if (!art) {
    return null;
  }

  if (art.length === 0) {
    return <p>No art found.</p>;
  }
}

export default SearchedArt;
