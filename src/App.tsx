import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Ecosystem from './components/Ecosystem';
import Leadership from './components/Leadership';
import Cohorts from './components/Cohorts';
import Contact from './components/Contact';
import ProjectPage from './pages/ecosystem/ProjectPage';
import StartupsPage from './pages/ecosystem/StartupsPage';
import EventsPage from './pages/portfolio/EventsPage';
import ProjectsPage from './pages/portfolio/ProjectsPage';
import PodcastsPage from './pages/portfolio/PodcastsPage';
import CurrentTeamPage from './pages/leadership/CurrentTeamPage';
import FacultyPage from './pages/leadership/FacultyPage';
import MentorsPage from './pages/leadership/MentorsPage';
import CohortsPage from './pages/CohortsPage';
import ContactPage from './pages/ContactPage';

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <Portfolio />
    <Ecosystem />
    <Leadership />
    {/* <Cohorts /> */}
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/ecosystem/project" element={<ProjectPage />} />
            <Route path="/ecosystem/startups" element={<StartupsPage />} />
            <Route path="/portfolio/events" element={<EventsPage />} />
            {/* <Route path="/portfolio/projects" element={<ProjectsPage />} /> */}
            {/* <Route path="/portfolio/podcasts" element={<PodcastsPage />} /> */}
            <Route path="/leadership/current-team" element={<CurrentTeamPage />} />
            {/* <Route path="/leadership/faculty" element={<FacultyPage />} /> */}
            {/* <Route path="/leadership/mentors" element={<MentorsPage />} /> */}
            {/* <Route path="/cohorts" element={<CohortsPage />} /> */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;