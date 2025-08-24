import React, { useState, useEffect } from "react";
import "../styles/bootcamp.css";
import BootcampCard from "../components/BootcampCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBootcamp from "../components/HeroBootcamp";

const bootcampData = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description:
      "Dive deep into the world of artificial intelligence. Learn to build and deploy ML models from scratch with hands-on projects.",
    imageUrl: "/IMG_2796.JPG",
  },
  {
    id: 2,
    title: "Full-Stack Web Development",
    description:
      "Master the MERN stack (MongoDB, Express, React, Node.js) and become a job-ready developer. Build dynamic, responsive web apps.",
    imageUrl: "/IMG_3702.JPG",
  },
  {
    id: 3,
    title: "Data Science & Analytics",
    description:
      "Unlock insights from data. Learn Python, Pandas, Matplotlib, and Scikit-learn to analyze data, create visualizations, and predictions.",
    imageUrl: "/IMG_3700.JPG",
  },
  {
    id: 4,
    title: "Cybersecurity Essentials",
    description:
      "Protect digital assets from cyber threats. Explore network security, ethical hacking, and cryptography in this comprehensive bootcamp.",
    imageUrl: "/IMG_3701.JPG",
  },
  {
    id: 5,
    title: "UX/UI Design Fundamentals",
    description:
      "Learn user-centric design principles. Create intuitive and beautiful interfaces using Figma, from wireframes to high-fidelity prototypes.",
    imageUrl: "/IMG_001.jpg",
  },
  {
    id: 6,
    title: "Cloud Computing with AWS",
    description:
      "Master the AWS cloud platform. Learn to design, deploy, and manage scalable and fault-tolerant systems using core AWS services.",
    imageUrl: "/IMG_2804.JPG",
  },
];

export default function BootcampPage() {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, entry.target.id])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".bootcamp-card")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <Header />
    
      <HeroBootcamp/>
      <div className="bootcamps-container">
      <main className="bootcamps-grid">
        {bootcampData.map((bootcamp) => (
          <BootcampCard
            key={bootcamp.id}
            bootcamp={bootcamp}
            isVisible={visibleCards.includes(`card-${bootcamp.id}`)}
          />
        ))}
      </main>
    </div>
    <Footer/>
    </>
  );
}