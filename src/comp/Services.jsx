import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush, FaChartBar, FaCloud, FaShieldAlt } from "react-icons/fa";
import "./Services.css";
import BottomSection from "./BottomSection";

export default function Services() {
  return (
    <>
    <section className="services-section">
      <div className="container"data-aos="fade-up">

        <div className="text-center service-heading">
          <h2 >Services</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
          </p>
        </div>

        <div className="row">

          <div className="col-md-6 mb-4">
            <div className="service-card active">
              <div className="icon"><FaCode /></div>
              <div>
                <h5>Custom Web Development</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <a href="#">Learn More →</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon"><FaMobileAlt /></div>
              <div>
                <h5>Mobile App Solutions</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <a href="#">Learn More →</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon"><FaPaintBrush /></div>
              <div>
                <h5>UI/UX Design</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <a href="#">Learn More →</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon"><FaChartBar /></div>
              <div>
                <h5>Digital Marketing</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <a href="#">Learn More →</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon"><FaCloud /></div>
              <div>
                <h5>Cloud Computing</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <a href="#">Learn More →</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="service-card">
              <div className="icon"><FaShieldAlt /></div>
              <div>
                <h5>Cybersecurity Solutions</h5>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <a href="#">Learn More →</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <BottomSection/>
    </>
  );
}