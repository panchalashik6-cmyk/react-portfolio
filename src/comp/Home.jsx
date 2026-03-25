import React from "react";
import BottomSection from "./BottomSection";
import profileImg from "../assets/ashik.jpeg";
import "./Home.css";

export default function Home() {
  return (
    <>
   
      <section
        style={{
          backgroundColor: "#0b1c26",
          minHeight: "100vh",
          color: "white",
          display: "flex",
          alignItems: "center",
          border:"1px solid white"
        }}
      >
        <div className="container"data-aos="fade-up" >
          <div className="row align-items-center">

            <div className="col-lg-6">
              <h1 style={{ fontSize: "60px", fontWeight: "700" }}>
                Hello, I'm{" "}
                <span style={{ color: "#0dcaf0" }}>
                  ashik Panchal
                </span>
              </h1>

              <h4 className="mt-3">
                Creative <span style={{ color: "#0dcaf0" }}>Web Developer</span>
              </h4>

              <p className="mt-4 text-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div className="mt-4 d-flex gap-3">
                <button className="btn btn-info px-4 py-2">
                  View My Work
                </button>

                <button className="btn btn-outline-info px-4 py-2">
                  Get In Touch
                </button>
              </div>

            <div className="mt-4 d-flex gap-3">

  <a 
    href="https://twitter.com/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white"
  >
    <i className="bi bi-twitter fs-4"></i>
  </a>


  <a 
    href="https://www.linkedin.com/in/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white"
  >
    <i className="bi bi-linkedin fs-4"></i>
  </a>


  <a 
    href="https://github.com/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white"
  >
    <i className="bi bi-github fs-4"></i>
  </a>


  <a 
    href="https://www.instagram.com/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white"
  >
    <i className="bi bi-instagram fs-4"></i>
  </a>

  {/* Facebook */}
  <a 
    href="https://www.facebook.com/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white"
  >
    <i className="bi bi-facebook fs-4"></i>
  </a>

</div>
            </div>

            <div className="col-lg-5 text-center mt-4 mt-lg-0" id="home">
              <div
                style={{
                  backgroundColor: "#0b1c26",
                  borderRadius: "40px",
                  padding: "40px",
                }}
              >
                <img
                  src={profileImg}
                  alt="profile"
                  className="img-fluid rounded"
               id="img" />
              </div>
            </div>

          </div>
        </div>
      </section>
      <BottomSection />
    </>
  );
}