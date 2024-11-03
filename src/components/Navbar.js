// /src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl">Learn Urdu</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-blue-200">Home</Link>
          <Link to="/lessons" className="text-white hover:text-blue-200">Lessons</Link>
          <Link to="/practice" className="text-white hover:text-blue-200">Practice</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;