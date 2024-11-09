import React, { useState } from 'react';
import { vocabulary } from '../data/vocabulary';
import { differentCountriesVocab } from '../data/differentCountriesVocab';

const lessonVocabularies = {
  'Lesson One: Greetings': vocabulary,
  'Lesson Two: Nationality': differentCountriesVocab,
};

function Practice() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessonComplete, setLessonComplete] = useState(false);

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setCurrentIndex(0);
    setLessonComplete(false);
  };

  const vocab = lessonVocabularies[selectedLesson] || [];

  const nextCard = () => {
    setIsFlipped(false);
    if (currentIndex + 1 < vocab.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setLessonComplete(true);
    }
  };

  const prevCard = () => {
    setIsFlipped(false);
    setCurrentIndex(currentIndex === 0 ? vocab.length - 1 : currentIndex - 1);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-pink-100 to-pink-50 min-h-screen">
      <h2 className="text-4xl font-semibold text-pink-600 mb-10">
        Flashcard Practice
      </h2>

      {!selectedLesson ? (
        <div className="flex flex-col items-center space-y-6">
          <p className="text-xl text-pink-700">Select a lesson to practice:</p>
          {Object.keys(lessonVocabularies).map((lesson, index) => (
            <button
              key={index}
              onClick={() => handleLessonSelect(lesson)}
              className="px-8 py-4 bg-pink-500 text-white text-lg rounded-md hover:bg-pink-400 shadow-lg"
            >
              {lesson}
            </button>
          ))}
        </div>
      ) : lessonComplete ? (
        <div className="flex flex-col items-center text-center space-y-4 mt-6 p-4 border-2 border-pink-400 bg-pink-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-pink-600">Lesson Complete!</h3>
          <p className="text-lg text-pink-700">
            You reviewed all {vocab.length} cards for "{selectedLesson}".
          </p>
          <button
            onClick={() => setSelectedLesson(null)}
            className="mt-4 px-6 py-2 bg-pink-500 text-white text-lg rounded-md hover:bg-pink-400"
          >
            Go Back to Lessons
          </button>
        </div>
      ) : (
        <>
          <div
            className={`relative w-80 h-52 bg-white border-2 border-pink-600 shadow-lg rounded-lg cursor-pointer transform transition-transform duration-500 ${
              isFlipped ? 'rotate-y-180' : ''
            }`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-pink-700 ${
                isFlipped ? 'hidden' : 'block'
              }`}
            >
              <p className="text-3xl font-bold">{vocab[currentIndex].urdu}</p>
              <p className="text-lg">({vocab[currentIndex].urduEnglish})</p>
            </div>

            <div
              className={`absolute inset-0 flex items-center justify-center p-6 bg-pink-100 text-pink-700 rounded-lg ${
                isFlipped ? 'block' : 'hidden'
              }`}
            >
              <p className="text-2xl font-semibold">{vocab[currentIndex].english}</p>
            </div>
          </div>

          <div className="w-3/4 h-2 bg-pink-200 mt-4 rounded-full">
            <div
              style={{ width: `${((currentIndex + 1) / vocab.length) * 100}%` }}
              className="h-2 bg-pink-600 rounded-full"
            ></div>
          </div>

          <div className="flex space-x-6 mt-8">
            <button
              onClick={prevCard}
              className="px-6 py-3 bg-pink-500 text-white text-lg rounded-md hover:bg-pink-400 shadow-md"
            >
              Previous
            </button>
            <button
              onClick={nextCard}
              className="px-6 py-3 bg-pink-500 text-white text-lg rounded-md hover:bg-pink-400 shadow-md"
            >
              Next
            </button>
          </div>

          <button
            onClick={() => setSelectedLesson(null)}
            className="mt-8 px-8 py-3 bg-pink-500 text-white text-lg rounded-md hover:bg-pink-400 shadow-lg"
          >
            Change Lesson
          </button>
        </>
      )}
    </div>
  );
}

export default Practice;