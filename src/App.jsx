import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Vision from './pages/Vision';
import Mentors from './pages/Mentors';
import Alumni from './pages/Alumni';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Vision />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/alumni" element={<Alumni />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;