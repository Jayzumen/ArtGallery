import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="p-8 bg-slate-800 dark:bg-slate-700 text-white">
      <Link to="/">
        <h1 className="font-bold text-4xl">Art Gallery of Chicago</h1>
      </Link>
    </header>
  );
}

export default Navbar;
