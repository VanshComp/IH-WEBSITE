import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PatentsPage from './pages/PatentsPage';
import InternshipsPage from './pages/InternshipsPage'; // Import InternshipsPage
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/patents" element={<PatentsPage />} />
            <Route path="/internships" element={<InternshipsPage />} /> {/* Add Internships Route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;