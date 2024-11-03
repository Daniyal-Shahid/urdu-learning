import React, { useState } from 'react';
import { vocabulary } from '../data/vocabulary';

function Practice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setCurrentIndex(0); // Start from the first card when a lesson is selected
  };

  const nextCard = () => {
    setIsFlipped(false);
    setCurrentIndex((currentIndex + 1) % vocabulary.length);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex(
      currentIndex === 0 ? vocabulary.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h2 className="text-3xl font-semibold text-green-600 mb-6">
        Flashcard Practice
      </h2>

      {!selectedLesson ? (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg text-green-700">Select a lesson to practice:</p>
          <button
            onClick={() => handleLessonSelect("Lesson One")}
            className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-400"
          >
            Lesson One: Greetings
          </button>
        </div>
      ) : (
        <>
          {/* Flashcard Container */}
          <div
            className={`relative w-64 h-40 bg-white border border-green-600 shadow-lg rounded-md cursor-pointer transform transition-transform duration-500 ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front Side */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center p-4 text-green-700 ${
                isFlipped ? 'hidden' : 'block'
              }`}
            >
              <p className="text-2xl font-bold">{vocabulary[currentIndex].urdu}</p>
              <p className="text-md">({vocabulary[currentIndex].urduEnglish})</p>
            </div>

            {/* Back Side */}
            <div
              className={`absolute inset-0 flex items-center justify-center p-4 bg-green-100 text-green-700 rounded-md ${
                isFlipped ? 'block' : 'hidden'
              }`}
            >
              <p className="text-xl font-semibold">{vocabulary[currentIndex].english}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={prevCard}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400"
            >
              Previous
            </button>
            <button
              onClick={nextCard}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400"
            >
              Next
            </button>
          </div>

          {/* Back to Lesson Selection */}
          <button
            onClick={() => setSelectedLesson(null)}
            className="mt-6 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-400"
          >
            Change Lesson
          </button>
        </>
      )}
    </div>
  );
}

export default Practice;