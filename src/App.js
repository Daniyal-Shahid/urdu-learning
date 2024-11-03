import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Greetings from './pages/Greetings';
import LessonOne from './pages/LessonOne';
import Quiz from './pages/Quiz';
import Practice from './pages/Practice';
import Nationality from './pages/Nationality';
import DifferentCountriesNationality from './pages/DifferentCountriesNationality';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/greetings" element={<Greetings />} />
          <Route path="/lessons/greetings/lesson-one" element={<LessonOne />} />
          <Route path="/lessons/:lessonId/quiz" element={<Quiz />} /> {/* Dynamic Quiz Path */}
          <Route path="/lessons/nationality" element={<Nationality />} />
          <Route path="/lessons/nationality/DifferentCountriesNationality" element={<DifferentCountriesNationality />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;