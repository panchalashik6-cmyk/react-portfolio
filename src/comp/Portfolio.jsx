import React from "react";
import "./Portfolio.css";
import BottomSection from "./BottomSection";

export default function Portfolio() {
  return (
    <>
    <section className="portfolio-section">
      <div className="container"data-aos="fade-up">

        <div className="text-center portfolio-heading">
          <h2>Portfolio</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
          </p>
        </div>

  
        <div className="text-center mb-5">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Strategy</button>
          <button className="filter-btn">Finance</button>
          <button className="filter-btn">Operations</button>
          <button className="filter-btn">Technology</button>
        </div>


        <div className="row">

   
          <div className="col-md-4 mb-4">
            <div className="portfolio-card">
              <img src="https://picsum.photos/400/300?1" alt="" />
              <div className="portfolio-info">
                <h5>Business Growth Strategy</h5>
                <p>Strategy · Consulting</p>
              </div>
            </div>
          </div>

        
          <div className="col-md-4 mb-4">
            <div className="portfolio-card">
              <img src="https://picsum.photos/400/300?2" alt="" />
              <div className="portfolio-info">
                <h5>Financial Restructuring</h5>
                <p>Finance · Investment</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="portfolio-card">
              <img src="https://picsum.photos/400/300?3" alt="" />
              <div className="portfolio-info">
                <h5>Supply Chain Optimization</h5>
                <p>Operations · Logistics</p>
              </div>
            </div>
          </div>

       
          <div className="col-md-4 mb-4">
            <div className="portfolio-card">
              <img src="https://picsum.photos/400/300?4" alt="" />
              <div className="portfolio-info">
                <h5>Digital Transformation</h5>
                <p>Technology</p>
              </div>
            </div>
          </div>

         
          <div className="col-md-4 mb-4">
            <div className="portfolio-card">
              <img src="https://picsum.photos/400/300?5" alt="" />
              <div className="portfolio-info">
                <h5>Market Expansion</h5>
                <p>Strategy</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="portfolio-card">
              <img src="https://picsum.photos/400/300?6" alt="" />
              <div className="portfolio-info">
                <h5>Investment Strategy</h5>
                <p>Finance</p>
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