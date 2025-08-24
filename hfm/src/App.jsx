// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import InternshipsPage from './pages/InternshipsPage';
import PatentsPage from './pages/PatentsPage';
import CohortPage from './pages/CohortPage';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import BootcampsPage from './pages/BootcampsPage';
import Alumni from './pages/Alumni';
import Vision from './pages/Vision';
import Mentors from './pages/Mentors';
import EventsPage from "./pages/portfolio/EventsPage";
import ProjectPage from "./pages/ecosystem/ProjectPage";
import StartupsPage from './pages/ecosystem/StartupsPage';
import CurrentTeamPage from "./pages/leadership/CurrentTeamPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio/Projects" element={<ProjectsPage />} />
        <Route path="/Portfolio/Patents" element={<PatentsPage />} />
        <Route path='/Portfolio/Events' element={<EventsPage />} />
        <Route path="/Ecosystem/Internships" element={<InternshipsPage />} />
        <Route path="/Ecosystem/Bootcamps" element={<BootcampsPage />} />
        <Route path='/Ecosystem/Projects' element={<ProjectPage />} />
        <Route path='/Ecosystem/Startups' element={<StartupsPage />} />
        <Route path="/Leadership/Mentors" element={<Mentors/>}/>
        <Route path="/Leadership/Alumni" element={<Alumni/>}/>
        <Route path="/Leadership/Vision" element={<Vision/>}/>
        <Route path='/Leadership/CurrentTeam' element={<CurrentTeamPage />} />
        <Route path="/Cohorts" element={<CohortPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;
