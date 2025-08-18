import React from 'react';
import ScrollAnimator from '../components/ScrollAnimator';
import '../styles/CohortPage.css';

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

  return (
    <div className="cohort-page">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>InnovationHub Cohorts</h1>
          <p>
            Join the next generation of bold thinkers and creators shaping what
            comes next.
          </p>
          <button className="cta-button">Apply Now</button>
        </div>
      </header>

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
  );
};

export default CohortPage;
