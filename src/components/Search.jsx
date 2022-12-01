import React, { useEffect, useState } from 'react';
import SearchedArt from './SearchedArt';
import { fetchData } from '../fetchData';

function Search() {
  const [query, setQuery] = useState('');
  const [art, setArt] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleClickNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const handleClickPrev = () => {
    if (pageNumber <= 1) {
      return;
    }
    setPageNumber(pageNumber - 1);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if input is empty do nothing
    if (!query) {
      setArt(null);
      return;
    }

    // only search if input has 3 or more characters
    if (query.length < 3) {
      return;
    }
    fetchData(query, pageNumber).then((results) => {
      if (results && results.data) {
        // console.log(results);
        setArt(results.data);
        setPageNumber(1);
      }
    });
    e.target.reset();
  };

  useEffect(() => {
    fetchData(query, pageNumber).then((results) => {
      if (results && results.data) {
        setArt(results.data);
      }
    });
  }, [pageNumber]);

  return (
    <div className="h-full w-full py-5">
      <div className="md:max-w-[700px] mx-auto px-20">
        <p className="text-2xl font-semibold text-center underline leading-7">
          Find Art you love
        </p>
        {/* Search Form */}
        <form className="py-4" onSubmit={handleSubmit}>
          <div className="relative">
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            {/* Input Field */}
            <input
              type="search"
              name="default-search"
              id="default-search"
              className="block w-full p-4 pl-10 text-md border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for art..."
              onChange={handleChange}
              required
            />
            {/* Search Button */}
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="text-white absolute right-2.5 bottom-2.5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <SearchedArt
        art={art}
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default Search;
