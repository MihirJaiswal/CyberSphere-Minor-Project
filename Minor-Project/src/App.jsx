import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero.jsx";
import Games from "./components/Games.jsx";
import About from "./components/About.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackToTop from "./components/BackToTop";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Hero} />
          <Route path="/games" Component={Games} />
          <Route path="/about" Component={About}  />
        </Routes>
      </Router>
      <BackToTop />
    </>
  );
}

export default App;
