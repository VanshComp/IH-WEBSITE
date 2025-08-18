import React from "react";
import "../styles/bootcamp.css";

export default function BootcampCard({ bootcamp, isVisible }) {
  return (
    <div id={`card-${bootcamp.id}`} className={`bootcamp-card ${isVisible ? "visible" : ""}`}>
      <div className="card-image-container">
        <img src={bootcamp.imageUrl} alt={bootcamp.title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{bootcamp.title}</h3>
        <p className="card-description">{bootcamp.description}</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
}
