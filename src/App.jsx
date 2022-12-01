import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Artwork from './components/Artwork';

function App() {
  return (
    <div className="font-poppins min-h-screen w-full pb-2">
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:id" element={<Artwork />} />
      </Routes>
    </div>
  );
}

export default App;
