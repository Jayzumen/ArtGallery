import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-slate-800 p-6 text-white dark:bg-slate-700">
      <Link to="/">
        <h1 className="w-fit text-4xl font-bold">Art Gallery of Chicago</h1>
      </Link>
    </header>
  );
}

export default Navbar;
