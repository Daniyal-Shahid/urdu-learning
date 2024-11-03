// /src/pages/Lessons.js
import React from 'react';
import { Link } from 'react-router-dom';

function Lessons() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold text-green-600 mb-6">Lessons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/lessons/greetings" className="p-6 bg-green-100 shadow-lg rounded-lg text-center hover:bg-green-200">
          <h3 className="text-xl font-semibold text-green-600">Greetings</h3>
        </Link>
        <Link to="/lessons/nationality" className="p-6 bg-green-100 shadow-lg rounded-lg text-center hover:bg-green-200">
          <h3 className="text-xl font-semibold text-green-600">Nationality</h3>
        </Link>
        {/* Add more topic cards here as you expand */}
      </div>
    </div>
  );
}

export default Lessons;