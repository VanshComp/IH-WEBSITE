import React, { useEffect } from 'react';
import MentorCard from '../components/MentorCard';
import './Mentors.css';

const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: 'Dr. Bhavana Tiple',
      role: 'Faculty Mentor',
      image: '',
      quote: 'Innovation is the bridge between imagination and impact.',
      type: 'faculty',
    },
    {
      id: 2,
      name: 'Dr. Surbhi Razdan',
      role: 'Faculty Mentor',
      image: '',
      quote: 'Fostering creativity and entrepreneurial thinking.',
      type: 'faculty',
    },
    {
      id: 3,
      name: 'Dr. Deepali Jawle',
      role: 'Faculty Mentor',
      image: '',
      quote: 'Nurturing the next generation of innovators.',
      type: 'faculty',
    },
    {
      id: 4,
      name: 'Dr. Shivprakash Barve',
      role: 'Faculty Mentor',
      image: '',
      quote: 'Excellence in innovation through dedication.',
      type: 'faculty',
    },
    {
      id: 5,
      name: 'Harsh Choudhary',
      role: 'Student Mentor',
      image: '',
      quote: 'Leading by example and inspiring peers.',
      type: 'student',
    },
    {
      id: 6,
      name: 'Mudit Jain',
      role: 'Student Mentor',
      image: '',
      quote: 'Bridging the gap between students and innovation.',
      type: 'student',
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in, .mentor-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='mentors-page'>
      <div className='mentors-hero'>
        <div className='pulse-circles'>
          <div className='pulse-circle'></div>
          <div className='pulse-circle'></div>
          <div className='pulse-circle'></div>
          <div className='pulse-circle'></div>
          <div className='pulse-circle'></div>
        </div>
        <div className='container'>
          <h1 className='fade-in'>Our Mentors</h1>
          <p className='hero-subtitle fade-in'>
            Meet the experienced faculty and dedicated students who guide our
            innovation journey
          </p>
        </div>
      </div>

      <div className='mentors-content'>
        <div className='container'>
          <section className='faculty-mentors-section'>
            <div className='section-header fade-in'>
              <h2>Faculty Mentors</h2>
              <p>Experienced faculty members guiding innovation and research</p>
            </div>
            <div className='mentors-grid'>
              {mentors
                .filter(mentor => mentor.type === 'faculty')
                .map((mentor, index) => (
                  <MentorCard key={mentor.id} mentor={mentor} index={index} />
                ))}
            </div>
          </section>

          <section className='student-mentors-section'>
            <div className='section-header fade-in'>
              <h2>Student Mentors</h2>
              <p>Dedicated student leaders fostering peer-to-peer learning</p>
            </div>
            <div className='mentors-grid'>
              {mentors
                .filter(mentor => mentor.type === 'student')
                .map((mentor, index) => (
                  <MentorCard key={mentor.id} mentor={mentor} index={index} />
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
