// /src/pages/LessonOne.js
import React from 'react';
import { Link } from 'react-router-dom';
import { differentCountriesVocab } from '../data/differentCountriesVocab';

function differentCountriesNationality() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold text-green-600 mb-6">Nationality</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {differentCountriesVocab.map((differentCountriesVocab, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-md text-center">
            <p className="text-xl font-bold text-green-600">{differentCountriesVocab.english}</p>
            <p className="text-2xl mt-2">{differentCountriesVocab.urdu}</p>
            <p className="text-gray-500">({differentCountriesVocab.urduEnglish})</p>
            <p className="text-gray-600 mt-4 italic">Example: {differentCountriesVocab.example}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center space-x-4">
        <Link to="/lessons/nationality/quiz" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
          Start Quiz
        </Link>
        <Link to="/lessons" className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
          Back to Lessons
        </Link>
      </div>
    </div>
  );
}

export default differentCountriesNationality;