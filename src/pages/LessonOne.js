// /src/pages/LessonOne.js
import React from 'react';
import { Link } from 'react-router-dom';
import { vocabulary } from '../data/vocabulary';

// const greetings = [
//   { english: "Hello", urdu: "السلام عليكم", urduEnglish: "Assalamualaikum", example: "Peace be upon you" },
//   { english: "Good Morning", urdu: "صبح بخیر", urduEnglish: "Subah Bakhair", example: "Good morning! Have a nice day." },
//   { english: "Good Night", urdu: "شب بخیر", urduEnglish: "Shab Bakhair", example: "Good night! Sleep well." },
//   { english: "Goodbye", urdu: "خدا حافظ", urduEnglish: "Khuda Hafiz"},
//   { english: "How are you?", urdu: "آپ کیسے ہیں؟", urduEnglish: "Aap kaise hain?"},
//   {}
//   // Add more greetings here
// ];

function LessonOne() {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold text-green-600 mb-6">Lesson One: Greetings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vocabulary.map((vocabulary, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-md text-center">
            <p className="text-xl font-bold text-green-600">{vocabulary.english}</p>
            <p className="text-2xl mt-2">{vocabulary.urdu}</p>
            <p className="text-gray-500">({vocabulary.urduEnglish})</p>
            <p className="text-gray-600 mt-4 italic">Example: {vocabulary.example}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center space-x-4">
        <Link to="/lessons/greetings/quiz" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-500">
          Start Quiz
        </Link>
        <Link to="/lessons" className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
          Back to Lessons
        </Link>
      </div>
    </div>
  );
}

export default LessonOne;