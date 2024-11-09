import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-50 p-6">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-4xl font-bold text-pink-700">Welcome to Urdu Language Learning!</h1>
        <p className="text-lg text-pink-600">Learn Urdu through fun and interactive lessons tailored just for you.</p>
        <Link
          to="/lessons"
          className="btn btn-lg bg-pink-500 text-white rounded-full hover:bg-pink-400 shadow-md"
        >
          Start Learning
        </Link>
        <Link
          to="/practice"
          className="btn btn-lg bg-pink-500 text-white rounded-full hover:bg-pink-400 shadow-md"
        >
          Flashcards
        </Link>
      </div>

      {/* Introduction Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-pink-600">How it Works</h2>
        <p className="mt-4 text-xl text-pink-700">
          Explore engaging lessons, practice with flashcards, and test your skills through quizzes.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-pink-100 shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-2xl font-semibold text-pink-600">Interactive Lessons</h3>
          <p className="text-pink-500">Learn at your own pace with fun lessons on greetings, nationalities, and more!</p>
        </div>
        <div className="card bg-pink-100 shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-2xl font-semibold text-pink-600">Flashcards</h3>
          <p className="text-pink-500">Review vocabulary with interactive flashcards that flip and test your memory!</p>
        </div>
        <div className="card bg-pink-100 shadow-lg rounded-xl p-6 text-center">
          <h3 className="text-2xl font-semibold text-pink-600">Quizzes</h3>
          <p className="text-pink-500">Take quizzes after each lesson to track your progress and test your knowledge!</p>
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="mt-12 text-center p-6 bg-pink-200 rounded-xl shadow-lg">
        <p className="text-xl text-pink-700 italic">
          I hope you enjoy this website and have fun learning urdu : D
        </p>
      </div>

      {/* Valentine Hearts Section */}
      <div className="mt-12 text-center">
        <p className="text-xl text-pink-600 font-semibold">Better start learning...</p>
        <div className="flex justify-center space-x-4 mt-4">
          <span className="text-3xl text-pink-700">💖</span>
          <span className="text-3xl text-pink-700">💌</span>
          <span className="text-3xl text-pink-700">❤️</span>
        </div>
      </div>
    </div>
  );
}

export default Home;