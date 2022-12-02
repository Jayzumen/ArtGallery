import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Artwork from './pages/Artwork';
import Search from './pages/Search';

function App() {
  return (
    <div className="font-poppins min-h-screen w-full mx-auto dark:bg-slate-900 dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/:id" element={<Artwork />} />
      </Routes>
    </div>
  );
}

export default App;
