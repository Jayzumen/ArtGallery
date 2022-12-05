import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchedArt from '../components/SearchedArt';
import { fetchData } from '../fetchData';

function Search() {
  const [query, setQuery] = useState('');
  const [art, setArt] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  // HandleClick function for Pagination
  const handleClickNext = () => {
    if (isNextButtonDisabled) {
      setIsPrevButtonDisabled(false);
    }
    setPageNumber(pageNumber + 1);
  };

  const handleClickPrev = () => {
    setPageNumber(pageNumber - 1);
  };

  // To use pagination and load default gallery
  useEffect(() => {
    fetchData(query, pageNumber).then((results) => {
      if (results) {
        // If last page is reached disable next button
        if (
          results.pagination.current_page === results.pagination.total_pages
        ) {
          setPageNumber(results.pagination.current_pages);
          setIsNextButtonDisabled(true);
        } else {
          setIsNextButtonDisabled(false);
        }
        // set pageNumber to page of fetched data
        setPageNumber(results.pagination.current_page);
        setArt(results.data);

        // if pageNumber = 1 disable prev Button, to prevent fetching non existing data
        if (pageNumber === 1) {
          setIsPrevButtonDisabled(true);
        } else {
          setIsPrevButtonDisabled(false);
        }
      }
    });
  }, [pageNumber]);

  return (
    <div className="h-full w-full py-5">
      <div className="mx-auto px-10 md:max-w-[700px]">
        <p className="text-center text-2xl font-semibold leading-7 underline">
          Find Art you love
        </p>
        {/* Search Form */}
        <SearchBar
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          setIsNextButtonDisabled={setIsNextButtonDisabled}
          setIsPrevButtonDisabled={setIsPrevButtonDisabled}
          setArt={setArt}
          setQuery={setQuery}
          query={query}
        />
      </div>
      <SearchedArt
        art={art}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        isPrevButtonDisabled={isPrevButtonDisabled}
        isNextButtonDisabled={isNextButtonDisabled}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default Search;
