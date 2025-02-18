import React, { useEffect } from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom"; // Import Link from React Router
>>>>>>> e71f018 (Added AboutMe component and styled it consistently with Hero section)
import profileImage from "../assets/profile.png";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const hero = document.querySelector(".hero");

    const handleMouseMove = (e) => {
<<<<<<< HEAD
      const x = e.clientX / window.innerWidth; 
      const y = e.clientY / window.innerHeight; 
=======
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
>>>>>>> e71f018 (Added AboutMe component and styled it consistently with Hero section)

      hero.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, #4facfe, #445253)`;
    };

    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image-container">
          <img
            src={profileImage}
            alt="Dion Cedrick L. Marquez"
            className="hero-image"
          />
        </div>
        <h1 className="hero-title">Dion Cedrick L. Marquez</h1>
        <p className="hero-description">BSIT 4B</p>
<<<<<<< HEAD
        <a href="#get-started" className="hero-button">
          Learn More
        </a>
=======
        {/* React Router Link to About page */}
        <Link to="/about" className="hero-button">
          Learn More
        </Link>
>>>>>>> e71f018 (Added AboutMe component and styled it consistently with Hero section)
      </div>
    </section>
  );
};

export default Hero;
