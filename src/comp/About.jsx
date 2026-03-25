import React from "react";
import profileImg from "../assets/ashik.jpeg";
import Skills from "./Skills";
import BottomSection from "./BottomSection";

export default function About() {
  return (
<>

    <section
      style={{
        backgroundColor: "#0b1c26",
        color: "white",
        padding: "80px 0",
        border:"1px solid white"
      }}
    >
      <div className="container"data-aos="fade-up">

  
        <div className="text-center mb-5">
          <h2 className="fw-bold f-5">About</h2>
          <p className="text-secondary">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
          </p>
        </div>

        <div className="row align-items-center">

     
          <div className="col-lg-6">
            <h6 className="text-info mb-3">HELLO THERE</h6>

            <h2 className="fw-bold mb-4">
              Hi, I'm ashik panchal - a calm-minded fullstack developer crafting serene digital
            </h2>

            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique.
            </p>

            <p className="text-secondary">
              Integer posuere lacus in mi fringilla, eget luctus risus pulvinar.
            </p>

            <div className="mt-4">
              <button className="btn btn-outline-info me-3">
                View My Work
              </button>

              <button className="btn btn-link text-info">
                Download Resume
              </button>
            </div>
          </div>

         
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={profileImg}
              alt="profile"
              className="img-fluid rounded-4 shadow"
              style={{ maxWidth: "350px" }}
            />
          </div>

        </div>

     
        <div className="row mt-5 g-4">

          <div className="col-md-3">
            <div className="p-4 border rounded-4 h-100">
              <h5>HTML/CSS/BS</h5>
              <p className="text-secondary">Vivamus sagittis lacus molestie placerat.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 border rounded-4 h-100">
              <h5>C / C++</h5>
              <p className="text-secondary">Maecenas pharetra magna sit amet risus.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 border rounded-4 h-100">
              <h5>JAVASCRIPT</h5>
              <p className="text-secondary">Donec id elit non mi porta gravida.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-4 border rounded-4 h-100">
              <h5>RECT.JS</h5>
              <p className="text-secondary">Aliquam euismod nunc at augue cursus.</p>
            </div>
          </div>

        </div>

      
        <div className="row mt-5 text-center">

          <div className="col-md-3">
            <p className="text-info">2022</p>
            <h6>BCA Computer science</h6>
          </div>

          <div className="col-md-3">
            <p className="text-info">2024</p>
            <h6>Freelance Start</h6>
          </div>

          <div className="col-md-3">
            <p className="text-info">2025</p>
            <h6>Joined red & white</h6>
          </div>

          <div className="col-md-3">
            <p className="text-info">2026</p>
            <h6>Lead Fullstack</h6>
          </div>

        </div>

      </div>
    </section>
    <Skills/>
    <BottomSection/>
</>
  );
}