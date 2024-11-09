import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { vocabulary } from '../data/vocabulary';
import { differentCountriesVocab } from '../data/differentCountriesVocab';

const lessonVocabularies = {
  'greetings': vocabulary,
  'nationality': differentCountriesVocab,
};

const generateOptions = (vocab, correctAnswer) => {
  let options = [correctAnswer];
  while (options.length < 3) {
    const randomOption = vocab[Math.floor(Math.random() * vocab.length)];
    if (!options.includes(randomOption)) {
      options.push(randomOption);
    }
  }
  return options.sort(() => Math.random() - 0.5);
};

function Quiz() {
  const { lessonId } = useParams();
  const vocab = useMemo(() => lessonVocabularies[lessonId] || [], [lessonId]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [results, setResults] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (vocab.length > 0) {
      setOptions(generateOptions(vocab, vocab[currentQuestion]));
    }
  }, [currentQuestion, vocab]);

  if (vocab.length === 0) {
    return (
      <div className="py-10 text-center">
        <h2 className="text-3xl font-semibold text-pink-600 mb-6">No Quiz Available</h2>
        <p className="text-red-500 mb-4">Sorry, no quiz is available for this lesson.</p>
        <Link to="/lessons" className="btn btn-pink-500 btn-md shadow-md">
          Back to Lessons
        </Link>
      </div>
    );
  }

  const handleAnswer = (answer) => {
    const isCorrect = answer === vocab[currentQuestion].urduEnglish;
    setSelectedAnswer(answer);

    setResults([
      ...results,
      {
        question: vocab[currentQuestion].english,
        userAnswer: answer,
        correctAnswer: vocab[currentQuestion].urduEnglish,
        isCorrect,
      },
    ]);

    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      setSelectedAnswer(null);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < vocab.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 2000);
  };

  return (
    <div className="py-10 text-center">
      <h2 className="text-3xl font-semibold text-pink-600 mb-6">
        Quiz: {lessonId.replace('-', ' ').toUpperCase()}
      </h2>
      {showScore ? (
        <div className="bg-white p-8 rounded-lg shadow-lg animate__animated animate__fadeInUp">
          <p className="text-2xl font-bold text-red-500">You scored {score} out of {vocab.length}</p>
          <p className="text-2xl font-bold text-red-500">{score / vocab.length * 100}%</p>

          <div className="mt-6 text-left">
            <h3 className="text-xl font-semibold mb-4">Quiz Summary</h3>
            {results.map((result, index) => (
              <div key={index} className={`mb-4 p-4 rounded-md ${result.isCorrect ? 'bg-pink-100' : 'bg-red-100'}`}>
                <p><strong>Question:</strong> What is the Urdu for "{result.question}"?</p>
                <p><strong>Your Answer:</strong> {result.userAnswer}</p>
                {!result.isCorrect && (
                  <p><strong>Correct Answer:</strong> {result.correctAnswer}</p>
                )}
              </div>
            ))}
          </div>

          <Link to={`/lessons/${lessonId}`} className="mt-4 inline-block px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-500 transition duration-300">
            Back to Lesson
          </Link>
        </div>
      ) : (
        <div className="p-6 bg-white shadow-lg rounded-md animate__animated animate__fadeInUp">
          <p className="text-xl font-semibold text-pink-700 mb-4">
            What is the Urdu for "{vocab[currentQuestion].english}"?
          </p>
          <div className="space-y-4">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.urduEnglish)}
                className={`w-full px-4 py-2 rounded-md transition duration-300 
                  ${selectedAnswer
                    ? option.urduEnglish === vocab[currentQuestion].urduEnglish
                      ? 'bg-pink-200 text-pink-800'
                      : option.urduEnglish === selectedAnswer
                      ? 'bg-red-200 text-red-800'
                      : 'bg-gray-100 text-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                disabled={!!selectedAnswer}
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