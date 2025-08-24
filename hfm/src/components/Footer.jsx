import "../styles/Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from "../assets/Innovation Hub - Logo (1)_Light.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <div className="footer-logo-section">
        <Link to={"/"}><img  src={logo} alt="Logo" className="logo" /></Link>
      </div>
          <p>Innovating the future together.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Portfolio</h4>
            <a href="#about">Our Projects</a>
            <a href="#careers">Our Patents</a>
            <a href="#press">Our Startups</a>
            <a href="#blog">Our Events</a>
          </div>
          <div className="footer-column">
            <h4>Ecosystem</h4>
            <a href="#docs">Internships</a>
            <a href="#support">Projects</a>
            <a href="#community">Startups</a>
            <a href="#community">Bootcamps</a>
          </div>
          <div className="footer-column">
            <h4>Leadership</h4>
            <a href="#startups">Current Team</a>
            <a href="#events">Mentors</a>
            <a href="#research">Vision</a>
            <a href="#research">Alumni</a>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} IH Network. All rights reserved.</p>
        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
