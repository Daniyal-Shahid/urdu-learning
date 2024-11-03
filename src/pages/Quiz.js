// src/pages/Quiz.js
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { vocabulary } from '../data/vocabulary';
import { differentCountriesVocab } from '../data/differentCountriesVocab';

// Mapping lesson IDs to vocabularies
const lessonVocabularies = {
  'greetings': vocabulary,
  'nationality': differentCountriesVocab,
  // Add future lessons here
};

function Quiz() {
    const { lessonId } = useParams();
    const vocab = lessonVocabularies[lessonId] || [];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
  
    if (vocab.length === 0) {
      return (
        <div className="py-10 text-center">
          <h2 className="text-3xl font-semibold text-red-600 mb-6">No Quiz Available</h2>
          <p className="text-gray-600 mb-4">Sorry, no quiz is available for this lesson.</p>
          <Link to="/lessons" className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            Back to Lessons
          </Link>
        </div>
      );
    }
  
    const getOptions = () => {
      const correctAnswer = vocab[currentQuestion];
      let options = [correctAnswer];
  
      // Randomly select two incorrect options
      while (options.length < 3) {
        const randomOption = vocab[Math.floor(Math.random() * vocab.length)];
        if (!options.includes(randomOption)) {
          options.push(randomOption);
        }
      }
  
      // Shuffle the options array to randomize the order
      return options.sort(() => Math.random() - 0.5);
    };
  
    const handleAnswer = (answer) => {
      if (answer === vocab[currentQuestion].urduEnglish) {
        setScore(score + 1);
      }
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < vocab.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
  
    return (
      <div className="py-10 text-center">
        <h2 className="text-3xl font-semibold text-green-600 mb-6">
          Quiz: {lessonId.replace('-', ' ').toUpperCase()}
        </h2>
        {showScore ? (
          <div>
            <p className="text-2xl text-green-700">You scored {score} out of {vocab.length}</p>
            <Link to={`/lessons/${lessonId}`} className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
              Back to Lesson
            </Link>
          </div>
        ) : (
          <div className="p-6 bg-white shadow-lg rounded-md">
            <p className="text-xl font-semibold text-green-700 mb-4">
              What is the Urdu for "{vocab[currentQuestion].english}"?
            </p>
            <div className="space-y-4">
              {getOptions().map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.urduEnglish)}
                  className="w-full px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200"
                >
                  {option.urduEnglish}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Quiz;