import "../styles/Header.css";
import logo from "../assets/Innovation Hub - Logo (1)_Light.png";
import { useNavigate, Link } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="main-header">
      <div className="logo-section">
        <Link to={"/"}><img  src={logo} alt="Logo" className="logo" /></Link>
      </div>

      <nav className="nav-links">
        <div className="nav-item">
          <a href="#portfolio">Portfolio</a>
          <div className="dropdown">
            <a href="/Portfolio/Projects">Our Projects</a>
            <a href="/Portfolio/Patents">Our Patents</a>
            <a href="#our-startups">Our Startups</a>
            <a href="/Portfolio/Events">Our Events</a>
          </div>
        </div>

        <div className="nav-item">
          <a href="#ecosystem">Ecosystem</a>
          <div className="dropdown">
            <a href="/Ecosystem/Internships">Internships</a>
            <a href="/Ecosystem/Projects">Projects</a>
            <a href="/Ecosystem/Startups">Startups</a>
            <a href="/Ecosystem/Bootcamps">Bootcamps</a>
          </div>
        </div>

        <div className="nav-item">
          <a href="#leadership">Leadership</a>
          <div className="dropdown">
            <a href="/Leadership/CurrentTeam">Current Team</a>
            <a href="/Leadership/Mentors">Mentors</a>
            <a href="/Leadership/Vision">Vision</a>
            <a href="/Leadership/Alumni">Alumni</a>
          </div>
        </div>

        <div className="nav-item">
          <a href="/Cohorts">Cohorts</a>
        </div>

        <div className="nav-item">
          <a href="/ContactUs">Contact Us</a>
        </div>
      </nav>

      <div className="header-buttons">
      <button className="btn join-btn" onClick={() => navigate('/ContactUs')}>Join Our Team</button>
      <button className="btn career-btn" onClick={() => navigate('/Careers')}>Career</button>
    </div>
    </header>
  );
};

export default Header;
