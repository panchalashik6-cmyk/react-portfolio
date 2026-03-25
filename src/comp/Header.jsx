import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: "#0b1c26",  height:"110px",border:"1px solid white"}}
    >
      <div className="container">

       
        <Link className="navbar-brand text-white fw-bold" to="/">
          Portfolio
        </Link>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

  
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/resume">Resume</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">Services</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/portfolio">Portfolio</Link>
            </li>

         
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>

          </ul>

         
          <div className="d-flex gap-3">
            <i className="bi bi-twitter text-white"></i>
            <i className="bi bi-facebook text-white"></i>
            <i className="bi bi-instagram text-white"></i>
            <i className="bi bi-linkedin text-white"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}