import React from 'react';
import CohortCard from './CohortCard';
import ScrollAnimator from './ScrollAnimator';
import '../styles/animations.css';

const CohortSection = () => {
  const cohorts = [
    {
      title: "What are we?",
      description: "A vibrant and diverse community of innovators, creators, and tech enthusiasts united by a shared mission to solve real-world problems through the power of technology. We bring together curious students, driven professionals, and seasoned industry experts to spark collaboration, share knowledge, and fuel personal and collective growth. Together, we’re building solutions that matter and shaping the future of innovation.",
      gifSrc: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG05Nzc5enlzaDA0MG9lZGVwNjc5bW5hdTNnYnpsYW5hYm5rdTZieSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3qXi5eIvcgCmTDObOU/giphy.gif"
    },
    {
      title: "What we do?",
      description: "We run intensive, hands-on 12-week programs designed to turn bold ideas into impactful solutions. During each cohort, members dive deep into real-world industry challenges, collaborate in high-performing teams, and work toward building MVPs that solve real problems. Participants gain access to expert-led workshops, cutting-edge tools, and dedicated mentorship from seasoned tech leaders. Our programs are focused on the most exciting and transformative fields today including Artificial Intelligence, Web3, and emerging technologies empowering members to stay ahead of the curve and make meaningful contributions to the future of tech.",
      gifSrc: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG05Nzc5enlzaDA0MG9lZGVwNjc5bW5hdTNnYnpsYW5hYm5rdTZieSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/povenlBAIz14s/giphy.gif"
    },
    {
      title: "What we look for?",
      description: "We’re looking for passionate, curious, and driven individuals who are excited to learn, build, and grow. Whether you're a developer, designer, entrepreneur, researcher, or domain expert your unique perspective matters. We value diversity in background, skills, and thinking. You don’t need years of experience or a technical degree just a genuine eagerness to explore new ideas, solve meaningful problems, and collaborate with others in a fast-paced, supportive environment. If you're ready to step out of your comfort zone and into a community that thrives on innovation you're exactly who we're looking for.",
      gifSrc: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG05Nzc5enlzaDA0MG9lZGVwNjc5bW5hdTNnYnpsYW5hYm5rdTZieSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/st7RtYXtqAFMs/giphy.gif"
    },
    {
      title: "Partnerships",
      description: "We proudly collaborate with leading tech companies like Google, Microsoft, and a growing network of cutting-edge startups to bring real-world relevance and depth to our programs. These partnerships enable us to provide our members with invaluable resources from hands-on mentorship and industry insights to access to tools, platforms, and live challenges that reflect current market needs. For our partners, it's more than just support it's an opportunity to connect with top emerging talent, tap into innovative thinking, and explore fresh solutions to their most pressing business challenges. Together, we bridge the gap between talent and industry, turning ideas into impact.",
      gifSrc: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWxrd3d6bTNzeHI0bjhmdnh5M21ld3BsNHV5YWRrMzY3NG4wN2F1dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Wq48wwdsj4fO0oLe4Z/giphy.gif"
    }
  ];

  return (
    <section className="cohort-section">
      <ScrollAnimator animationClass="fade-in">
        <h2>Our Cohort Experience</h2>
      </ScrollAnimator>
      
      <div className="cohorts-container">
        {cohorts.map((cohort, index) => (
          <CohortCard 
            key={index}
            title={cohort.title}
            description={cohort.description}
            gifSrc={cohort.gifSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default CohortSection;