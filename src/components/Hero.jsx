import React, { useEffect } from "react";
import profileImage from "../assets/profile.png";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const hero = document.querySelector(".hero");

    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth; 
      const y = e.clientY / window.innerHeight; 

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
        <a href="#get-started" className="hero-button">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
