import React from "react";
import "./Resume.css";
import BottomSection from "./BottomSection";

export default function Resume() {
  return (
    <>
      <section className="resume-section">
        <div className="container"data-aos="fade-up">

          <div className="text-center mb-5">
            <h2 className="fw-bold">Resume</h2>
            <p className="text-secondary">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
            </p>
          </div>

          <div className="row">

  
            <div className="col-lg-6">
              <h4 className="resume-title">Education</h4>

              <div className="resume-item">
                <h5>Master of Computer Science</h5>
                <span>2025 - 2026</span>
                <p>HNGU Patan University</p>
              </div>

              <div className="resume-item">
                <h5>Bachelor of Computer Science</h5>
                <span>2021 - 2022</span>
                <p>HNGU Patan University</p>
              </div>

              <h4 className="resume-title mt-5">Professional Skills</h4>

              <div className="skill">
                <span>Frontend Development</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div className="skill">
                <span>Backend Development</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="skill">
                <span>Full Stack</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}></div>
                </div>
              </div>

            </div>

     
            <div className="col-lg-6">
              <h4 className="resume-title">Professional Experience</h4>

              <div className="resume-item">
                <h5>Senior Software Engineer</h5>
                <span>2026 - Present</span>
                <p>Google, Mountain View</p>
                <ul>
                  <li>Lead development of web applications</li>
                  <li>Manage team workflows</li>
                  <li>Optimize performance</li>
                </ul>
              </div>

              <div className="resume-item">
                <h5>Software Engineer</h5>
                <span>2023 - 2025</span>
                <p>Microsoft, Redmond</p>
                <ul>
                  <li>Developed tools</li>
                  <li>Handled deadlines</li>
                  <li>Team collaboration</li>
                </ul>
              </div>

              <div className="resume-item">
                <h5>Junior Developer</h5>
                <span>2022 - 2023</span>
                <p>Apple Inc.</p>
                <ul>
                  <li>Responsive websites</li>
                  <li>API work</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      <BottomSection />
    </>
  );
}