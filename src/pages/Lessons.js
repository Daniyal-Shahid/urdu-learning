// /src/pages/Lessons.js
import React from 'react';
import { Link } from 'react-router-dom';

function Lessons() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Lessons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/lessons/greetings" className="card bg-secondary text-secondary-content shadow-lg p-6 rounded-lg text-center transition transform hover:scale-105">
          <h3 className="text-xl font-semibold">Greetings</h3>
        </Link>
        <Link to="/lessons/nationality" className="card bg-secondary text-secondary-content shadow-lg p-6 rounded-lg text-center transition transform hover:scale-105">
          <h3 className="text-xl font-semibold">Nationality</h3>
        </Link>
        <Link to="/lessons/numbers" className="card bg-secondary text-secondary-content shadow-lg p-6 rounded-lg text-center transition transform hover:scale-105">
          <h3 className="text-xl font-semibold">Numbers 1-20</h3>
        </Link>
        <Link to="/lessons/family" className="card bg-secondary text-secondary-content shadow-lg p-6 rounded-lg text-center transition transform hover:scale-105">
          <h3 className="text-xl font-semibold">Family Members</h3>
        </Link>
        <Link to="/lessons/colors" className="card bg-secondary text-secondary-content shadow-lg p-6 rounded-lg text-center transition transform hover:scale-105">
          <h3 className="text-xl font-semibold">Colors</h3>
        </Link>
        <Link to="/lessons/food" className="card bg-secondary text-secondary-content shadow-lg p-6 rounded-lg text-center transition transform hover:scale-105">
          <h3 className="text-xl font-semibold">Basic Food Items</h3>
        </Link>
        <Link to="/lessons/time" className="card bg-secondary text-secondary-content shadow-lg p-6 rounded-lg text-center transition transform hover:scale-105">
          <h3 className="text-xl font-semibold">Time Expressions</h3>
        </Link>
        <Link to="/lessons/weather" className="card bg-secondary text-secondary-content shadow-lg p-6 rounded-lg text-center transition transform hover:scale-105">
          <h3 className="text-xl font-semibold">Weather</h3>
        </Link>
      </div>
    </div>
  );
}

export default Lessons;