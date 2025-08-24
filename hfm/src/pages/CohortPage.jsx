import React from 'react';
import ScrollAnimator from '../components/ScrollAnimator';
import '../styles/CohortPage.css';
import HeroCohort from '../components/HeroCohort';
import Footer from '../components/Footer';
import Header from '../components/Header';

const CohortPage = () => {
  const cohorts = [
    {
      title: "What are we?",
      description:
        "A vibrant and diverse community of innovators, creators, and tech enthusiasts united by a shared mission to solve real-world problems through technology. We bring together curious students, driven professionals, and seasoned industry experts to spark collaboration and fuel growth.",
      gifSrc:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG05Nzc5enlzaDA0MG9lZGVwNjc5bW5hdTNnYnpsYW5hYm5rdTZieSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3qXi5eIvcgCmTDObOU/giphy.gif",
    },
    {
      title: "What we do?",
      description:
        "We run intensive 12-week programs designed to turn bold ideas into impactful solutions. Members collaborate on real industry challenges, build MVPs, and gain access to expert-led workshops, cutting-edge tools, and mentorship from tech leaders in AI, Web3, and emerging technologies.",
      gifSrc:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG05Nzc5enlzaDA0MG9lZGVwNjc5bW5hdTNnYnpsYW5hYm5rdTZieSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/povenlBAIz14s/giphy.gif",
    },
    {
      title: "What we look for?",
      description:
        "We’re looking for passionate, curious, and driven individuals—developers, designers, entrepreneurs, researchers, or domain experts. No technical degree required, just eagerness to learn, collaborate, and innovate in a fast-paced, supportive environment.",
      gifSrc:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG05Nzc5enlzaDA0MG9lZGVwNjc5bW5hdTNnYnpsYW5hYm5rdTZieSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/st7RtYXtqAFMs/giphy.gif",
    },
    {
      title: "Partnerships",
      description:
        "We collaborate with leading companies like Google and Microsoft, plus startups. Members get mentorship, industry insights, and access to real tools and challenges. For partners, it’s a chance to engage with emerging talent and explore fresh solutions.",
      gifSrc:
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWxrd3d6bTNzeHI0bjhmdnh5M21ld3BsNHV5YWRrMzY3NG4wN2F1dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Wq48wwdsj4fO0oLe4Z/giphy.gif",
    },
  ];

  const AnimatedBackground = React.memo(() => (
    <div className="background-shapes" aria-hidden="true">
      {/* Large gradient orbs */}
      <div className="floating-shape gradient-orb orb-1" />
      <div className="floating-shape gradient-orb orb-2" />
      <div className="floating-shape gradient-orb orb-3" />
      <div className="floating-shape gradient-orb orb-4" />
      <div className="floating-shape gradient-orb orb-5" />
      <div className="floating-shape gradient-orb orb-6" />
      
      {/* Multiple Hexagons */}
      <div className="floating-shape geometric-shape hexagon hexagon-1" />
      <div className="floating-shape geometric-shape hexagon hexagon-2" />
      <div className="floating-shape geometric-shape hexagon hexagon-3" />
      
      {/* Multiple Triangles */}
      <div className="floating-shape geometric-shape triangle-shape triangle-1" />
      <div className="floating-shape geometric-shape triangle-shape triangle-2" />
      <div className="floating-shape geometric-shape triangle-shape triangle-3" />
      <div className="floating-shape geometric-shape triangle-shape triangle-4" />
      
      {/* Multiple Diamonds */}
      <div className="floating-shape geometric-shape diamond diamond-1" />
      <div className="floating-shape geometric-shape diamond diamond-2" />
      <div className="floating-shape geometric-shape diamond diamond-3" />
      
      {/* Rotating Squares */}
      <div className="floating-shape square-shape square-1" />
      <div className="floating-shape square-shape square-2" />
      <div className="floating-shape square-shape square-3" />
      
      {/* Pulsing Circles */}
      <div className="floating-shape circle-pulse circle-1" />
      <div className="floating-shape circle-pulse circle-2" />
      <div className="floating-shape circle-pulse circle-3" />
      
      {/* Twinkling Stars */}
      <div className="floating-shape star-shape star-1" />
      <div className="floating-shape star-shape star-2" />
      <div className="floating-shape star-shape star-3" />
      
      {/* Enhanced Floating particles */}
      {Array.from({ length: 12 }, (_, i) => (
        <div 
          key={`particle-${i}`}
          className="particle" 
          style={{ 
            top: `${Math.random() * 80 + 10}%`, 
            left: `${Math.random() * 80 + 10}%`, 
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }} 
        />
      ))}
  
      {/* Mini particles */}
      {Array.from({ length: 20 }, (_, i) => (
        <div 
          key={`mini-particle-${i}`}
          className="mini-particle" 
          style={{ 
            top: `${Math.random() * 90 + 5}%`, 
            left: `${Math.random() * 90 + 5}%`, 
            animationDelay: `${i * 0.4}s`,
            backgroundColor: `var(--${['blue', 'purple', 'yellow', 'green', 'pink'][i % 5]}-accent)`
          }} 
        />
      ))}
  
      {/* Large particles */}
      {Array.from({ length: 8 }, (_, i) => (
        <div 
          key={`large-particle-${i}`}
          className="large-particle" 
          style={{ 
            top: `${Math.random() * 80 + 10}%`, 
            left: `${Math.random() * 80 + 10}%`, 
            animationDelay: `${i * 1.2}s`,
            backgroundColor: `var(--${['purple', 'blue', 'green', 'pink'][i % 4]}-accent)`
          }} 
        />
      ))}
      
      {/* Pentagon shapes */}
      <div className="floating-shape pentagon pentagon-1" />
      <div className="floating-shape pentagon pentagon-2" />
      <div className="floating-shape pentagon pentagon-3" />
      
      {/* Octagon shapes */}
      <div className="floating-shape octagon octagon-1" />
      <div className="floating-shape octagon octagon-2" />
      <div className="floating-shape octagon octagon-3" />
      
      {/* Cross shapes */}
      <div className="floating-shape cross cross-1" />
      <div className="floating-shape cross cross-2" />
      <div className="floating-shape cross cross-3" />
      
      {/* Heart shapes */}
      <div className="floating-shape heart heart-1" />
      <div className="floating-shape heart heart-2" />
      <div className="floating-shape heart heart-3" />
      
      {/* Arrow shapes */}
      <div className="floating-shape arrow arrow-1" />
      <div className="floating-shape arrow arrow-2" />
      <div className="floating-shape arrow arrow-3" />
      
      {/* Lightning bolts */}
      <div className="floating-shape lightning lightning-1" />
      <div className="floating-shape lightning lightning-2" />
      <div className="floating-shape lightning lightning-3" />
      
      {/* Spiral shapes */}
      <div className="floating-shape spiral spiral-1" />
      <div className="floating-shape spiral spiral-2" />
      <div className="floating-shape spiral spiral-3" />
      
      {/* Wave shapes */}
      <div className="floating-shape wave wave-1" />
      <div className="floating-shape wave wave-2" />
      <div className="floating-shape wave wave-3" />
      
      {/* Infinity symbols */}
      <div className="floating-shape infinity infinity-1" />
      <div className="floating-shape infinity infinity-2" />
      
      {/* Multiple Morphing blobs */}
      <div className="floating-shape morphing-blob blob-1" />
      <div className="floating-shape morphing-blob blob-2" />
      <div className="floating-shape morphing-blob blob-3" />
      
      {/* Grid overlay */}
      <div className="grid-overlay" />
    </div>
  ));
  
  return (
    <>
    <Header/>
    <div className="cohort-page">
      <HeroCohort/>

      {/* Cohort Section */}
      <main className="cohort-section">
        
        <ScrollAnimator animationClass="fade-in">
          <h2>Our Cohort Experience</h2>
        </ScrollAnimator>

        <div className="cohorts-container">
          {cohorts.map((cohort, index) => (
            <ScrollAnimator key={index} animationClass="fade-in-up">
              <div className="cohort-card">
                <div className="card-content">
                  <h3>{cohort.title}</h3>
                  <p>{cohort.description}</p>
                </div>
                <div className="card-gif">
                  <img src={cohort.gifSrc} alt={cohort.title} />
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="cohort-footer">
        <p>Ready to start your innovation journey?</p>
        <button className="cta-button">Join Next Cohort</button>
      </footer>
    </div>
    <Footer/>
    </>
  );
};

export default CohortPage;