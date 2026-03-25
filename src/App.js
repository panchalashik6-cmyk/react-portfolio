import React, { useEffect } from "react";

import Header from './comp/Header'
import About from './comp/About'
import Contact from './comp/Contact'
import Dropdown from './comp/Dropdown'
import Portfolio from './comp/Portfolio'
import Services from './comp/Services'
import Home from './comp/Home'
import Resume from './comp/Resume'
import Notfound from './comp/Notfound'

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import { Routes, Route } from "react-router-dom";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}