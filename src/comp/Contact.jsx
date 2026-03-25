import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import BottomSection from "./BottomSection";

export default function Contact() {
  return (
    <>
    <section className="contact-section">
      <div className="container" data-aos="fade-up">

        <div className="text-center contact-heading">
          <h2>Contact Me</h2>
          <p>Let's build something amazing together </p>
        </div>

        <div className="row mt-5">

       
          <div className="col-md-5 mb-4">
            <div className="contact-box glass">

              <h4>Contact Info</h4>

              <div className="info-item">
                <FaMapMarkerAlt className="icon" />
                <div>
                  <h6>Location</h6>
                  <p>Ahmedabad, India</p>
                </div>
              </div>

              <div className="info-item">
                <FaPhoneAlt className="icon" />
                <div>
                  <h6>Phone</h6>
                  <p>+91 9313575674</p>
                </div>
              </div>

              <div className="info-item">
                <FaEnvelope className="icon" />
                <div>
                  <h6>Email</h6>
                  <p>panchalashik6@email.com</p>
                </div>
              </div>

            </div>
          </div>

       
          <div className="col-md-7">
            <div className="contact-box glass">

              <h4>Send Message</h4>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input type="text" placeholder="Your Name" className="form-control" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input type="email" placeholder="Your Email" className="form-control" />
                  </div>
                </div>

                <div className="mb-3">
                  <input type="text" placeholder="Subject" className="form-control" />
                </div>

                <div className="mb-3">
                  <textarea rows="5" placeholder="Message" className="form-control"></textarea>
                </div>

                <button className="send-btn">Send Message</button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
    <BottomSection/>
    </>
  );
}