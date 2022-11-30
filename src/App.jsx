import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import SearchedArt from "./components/SearchedArt";

function App() {
  const [query, setQuery] = useState("");
  const [art, setArt] = useState(null);

  // function for searching art
  const fetchArt = async (query) => {
    const url = `https://api.artic.edu/api/v1/artworks/search?q=${query}`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`error loading search results (${res.status})`);
    }
    return res.json();
  };

  useEffect(() => {
    //  if input is empty do nothing
    if (!(query || query.length)) {
      setArt(null);
      return;
    }

    // only search if input is longer than 3 characters
    if (query.length < 3) {
      return;
    }
    fetchArt(query)
      .then((results) => {
        if (results && results.data) {
          setArt(results.data);
        }
      })
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div className='font-poppins min-h-screen w-full bg-slate-400'>
      <Navbar />
      <Search
        query={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchedArt art={art} />

      {/* TODO: enable pagination for search results  */}
      {/* <Routes>
        <Route path='/' element={<Search query={query} />} />
      </Routes> */}
    </div>
  );
}

export default App;
