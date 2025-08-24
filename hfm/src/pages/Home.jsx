import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/Home.css";
import logo1 from "../assets/co-making-intel.gif";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Header />
      <div className="home-wrapper">
        {/* Animated Background */}
        <ul className="background-animated">
          {Array.from({ length: 25 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>

        {/* Hero Section */}
        <motion.section
          className="home-hero"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="hero-text">
            <h1>
              Discover the Future with <span>IH</span>
            </h1>
            <p>Innovation Hub is your gateway to mentorship, real-world learning, and professional growth.</p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/Leadership/Vision" className="home-btn">
                Learn More
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="hero-img"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src={logo1} alt="Innovation Hub" />
          </motion.div>
        </motion.section>

        {/* Mission Section */}
        <section className="home-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="section-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            At IH, we foster a vibrant, forward-thinking ecosystem where creativity and innovation are not just encouraged they are celebrated.
We empower dreamers, doers, and disruptors through immersive, hands-on experiences that build real-world capabilities.
Our programs are designed to challenge limits, nurture talent, and transform passion into purposeful action.
Expert mentors from diverse backgrounds provide guidance, support, and industry insight every step of the way.
Through dynamic community-building, we connect like-minded individuals to collaborate, grow, and lead together.
IH isn’t just a place to learn it's a launchpad for ideas, impact, and the leaders of tomorrow.
          </motion.p>
        </section>

        {/* Offerings Section */}
        <section className="home-section">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Offerings
          </motion.h2>
          <div className="cards">
            {[
              "Mentorship", "Projects", "Internships",
              "Research", "Workshops", "Networking",
              "Incubation", "Career Guidance"
            ].map((title, i) => (
              <motion.div
                key={i}
                className="card"
                whileHover={{ y: -10, scale: 1.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{title}</h3>
                <p>
                  Unlock your potential through engaging {title.toLowerCase()} opportunities tailored for real impact.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <section className="home-vision">
          <motion.h1
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            style={{marginTop:"40px"}}
          >
            At IH, we envision a world where every spark of imagination has a clear path to purposeful execution.
We exist to empower the next generation of changemakers curious minds driven by passion and bold dreams.
Through structured support, cutting-edge tools, and real-world guidance, we turn raw ideas into refined innovations.
Our mission goes beyond innovation we build scalable, sustainable solutions that uplift communities and reshape industries.
By bridging creativity with action, we equip youth to become architects of meaningful, lasting impact.
This is more than a hub it’s a launchpad for visionaries who dare to think, build, and lead a better tomorrow.
          </motion.p>
        </section>

        {/* Testimonials */}
        <section className="home-testimonials" style={{color:"1f1f1f"}}>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Hear from Our Founders
          </motion.h2>
          <div className="testimonial-slider">
            {[
              "IH shaped my entrepreneurial journey.",
              "The mentors here are so helpful and encouraging!",
              "One stop for learning, building, and connecting.",
              "I gained confidence and found my career path."
            ].map((msg, i) => (
              <motion.div
                key={i}
                className="testimonial"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p>“{msg}”</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
