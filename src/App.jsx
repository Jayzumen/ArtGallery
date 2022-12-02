import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Artwork from './pages/Artwork';
import Search from './pages/Search';

function App() {
  return (
    <div className="mx-auto min-h-screen w-full font-poppins dark:bg-slate-900 dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:id" element={<Artwork />} />
      </Routes>
    </div>
  );
}

export default App;
