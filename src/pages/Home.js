import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Urdu Language Learning</h1>
      <p>Learn Urdu through fun and interactive lessons!</p>
      <Link to="/lessons">Start Learning</Link>
    </div>
  );
}

export default Home;