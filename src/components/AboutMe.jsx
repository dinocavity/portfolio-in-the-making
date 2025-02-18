import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <h2 className="about-me-title">About Me</h2>
        <p className="about-me-description">
          I’m Dion Cedrick L. Marquez, a passionate BSIT student specializing in
          web development. I’m currently in my final year of studies, diving deep
          into both front-end and back-end technologies. I love learning new
          programming languages and frameworks, and I am especially interested in
          creating user-friendly and innovative solutions. When I'm not coding, I
          enjoy exploring new technologies, working on personal projects, and
          reading about software development trends.
        </p>
        {/* Back to Hero Section Button */}
        <Link to="/" className="back-to-top">
          Back to Top
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
