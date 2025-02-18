import React from "react";
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
  );
}

export default App;
