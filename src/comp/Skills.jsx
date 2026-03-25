import React from "react";

export default function Skills() {
  return (
    <section
      style={{
        backgroundColor: "#0b1c26",
        color: "white",
        padding: "80px 0",
      }}
    >
      <div className="container text-center"data-aos="fade-up">

  
        <h2 className="fw-bold mb-3">Skills</h2>

        <p className="text-secondary mb-5">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
        </p>

    
        <div className="row g-4">

         
          <div className="col-md-3">
            <div className="p-4 rounded-4 skill-card h-100">
              <h5>HTML</h5>
              <p className="text-secondary small">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>

              <div className="progress mt-4" style={{ height: "6px" }}>
                <div className="progress-bar bg-info" style={{ width: "90%" }}></div>
              </div>

              <div className="text-end mt-2">90%</div>
            </div>
          </div>

         
          <div className="col-md-3">
            <div className="p-4 rounded-4 skill-card h-100">
              <h5>CSS</h5>
              <p className="text-secondary small">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
              </p>

              <div className="progress mt-4" style={{ height: "6px" }}>
                <div className="progress-bar bg-info" style={{ width: "90%" }}></div>
              </div>

              <div className="text-end mt-2">90%</div>
            </div>
          </div>

       
          <div className="col-md-3">
            <div className="p-4 rounded-4 skill-card h-100">
              <h5>JavaScript</h5>
              <p className="text-secondary small">
                Neque porro quisquam est qui dolorem ipsum quia dolor.
              </p>

              <div className="progress mt-4" style={{ height: "6px" }}>
                <div className="progress-bar bg-info" style={{ width: "80%" }}></div>
              </div>

              <div className="text-end mt-2">80%</div>
            </div>
          </div>

       
          <div className="col-md-3">
            <div className="p-4 rounded-4 skill-card h-100">
              <h5>RECT JS</h5>
              <p className="text-secondary small">
                Quis autem vel eum iure reprehenderit qui in ea voluptate.
              </p>

              <div className="progress mt-4" style={{ height: "6px" }}>
                <div className="progress-bar bg-info" style={{ width: "55%" }}></div>
              </div>

              <div className="text-end mt-2">55%</div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}