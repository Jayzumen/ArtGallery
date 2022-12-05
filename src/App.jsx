import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Artwork from './pages/Artwork';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div className="mx-auto min-h-screen min-w-full font-poppins dark:bg-slate-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/artwork/:id" element={<Artwork />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
