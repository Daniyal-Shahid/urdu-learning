// /src/pages/Greetings.js
import React from 'react';
import { Link } from 'react-router-dom';

function Greetings() {
  return (
    <div className="py-10 text-center">
      <h2 className="text-3xl font-semibold text-primary mb-6">Greetings</h2>
      <p className="text-secondary mb-4">Learn basic greetings in Urdu.</p>
      <div className="space-x-4">
        <Link to="/lessons/greetings/lesson-one" className="btn btn-primary btn-md shadow-md">
          Lesson One
        </Link>
        <Link to="/lessons/greetings/quiz" className="btn btn-primary btn-md shadow-md">
          Start Quiz
        </Link>
      </div>
    </div>
  );
}

export default Greetings;