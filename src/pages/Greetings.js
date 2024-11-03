import React from 'react';
import { Link } from 'react-router-dom';

function Greetings() {
  return (
    <div className="py-10 text-center">
      <h2 className="text-3xl font-semibold text-green-600 mb-6">Greetings</h2>
      <p className="text-gray-600 mb-4">Learn basic greetings in Urdu.</p>
      <Link to="/lessons/greetings/lesson-one" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
        Lesson One
      </Link>
      <Link to="/lessons/greetings/quiz" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
        Start Quiz
      </Link>
    </div>
  );
}

export default Greetings;