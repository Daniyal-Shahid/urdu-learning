import React from 'react';
import { Link } from 'react-router-dom';
import { colorsVocab } from '../data/colorsVocab';

function Colors() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Colors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colorsVocab.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-lg rounded-lg p-4 text-center">
            <p className="text-xl font-bold text-secondary">{item.english}</p>
            <p className="text-2xl mt-2 text-primary">{item.urdu}</p>
            <p className="text-secondary-content mt-1">({item.urduEnglish})</p>
            <p className="text-gray-600 mt-4 italic">Example: {item.example}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center space-x-4">
        <Link to="/lessons/colors/quiz" className="btn btn-primary">
          Start Quiz
        </Link>
        <Link to="/lessons" className="btn btn-secondary">
          Back to Lessons
        </Link>
      </div>
    </div>
  );
}

export default Colors; 