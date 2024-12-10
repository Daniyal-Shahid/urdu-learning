import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { weatherVocab } from '../data/weatherVocab';

function Weather() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', ...new Set(weatherVocab.map(item => item.category))];

  const filteredVocab = selectedCategory === 'all' 
    ? weatherVocab 
    : weatherVocab.filter(item => item.category === selectedCategory);

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-primary mb-2 text-center">Weather</h2>
      <p className="text-center text-gray-600 mb-8">Learn how to describe weather in Urdu</p>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVocab.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="bg-primary/10 p-3">
              <span className="text-sm font-medium text-primary/70">
                {item.category}
              </span>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.english}
                  </h3>
                  <p className="text-primary text-lg">
                    {item.urdu}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Pronunciation</p>
                  <p className="font-medium text-primary">
                    {item.urduEnglish}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-600 font-medium">Example:</p>
                <p className="text-gray-800">{item.example}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center space-x-4">
        <Link 
          to="/lessons/weather/quiz"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Practice Quiz
        </Link>
        <Link 
          to="/lessons"
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Back to Lessons
        </Link>
      </div>
    </div>
  );
}

export default Weather; 