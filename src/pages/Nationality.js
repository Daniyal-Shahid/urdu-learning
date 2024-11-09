import React from 'react';
import { Link } from 'react-router-dom';

function Nationality() {
  return (
    <div className="py-10 text-center">
      <h2 className="text-3xl font-semibold text-pink-600 mb-6">Nationality</h2>
      <p className="text-red-500 mb-4">Learn how to talk about nationalities in Urdu.</p>
      <Link to="/lessons/nationality/differentCountriesNationality" className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-400">
        Lesson One - Saying different Countries in Urdu
      </Link>
      <Link to="/lessons/nationality/quiz" className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-400 ml-4">
        Start Quiz
      </Link>
    </div>
  );
}

export default Nationality;