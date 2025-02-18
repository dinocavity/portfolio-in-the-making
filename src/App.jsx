import React from "react";
<<<<<<< HEAD
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      {/* <Footer /> */}
    </div>
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
>>>>>>> e71f018 (Added AboutMe component and styled it consistently with Hero section)
  );
}

export default App;
