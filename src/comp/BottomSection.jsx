import React from "react";

export default function BottomSection() {
  return (
    <footer
      style={{
        backgroundColor: "#0b1c26",
        color: "#fff",
        padding: "40px 0",
        textAlign: "center",
        border:"1px solid white"
      }}
    >
      <div className="container">

        <p style={{ marginBottom: "20px" }}>
          © Copyright <strong>FolioOne</strong> All Rights Reserved
        </p>
        <div className="d-flex justify-content-center gap-3 mb-3">

          <div className="icon-circle">
            <i className="bi bi-twitter-x"></i>
          </div>

          <div className="icon-circle">
            <i className="bi bi-facebook"></i>
          </div>

          <div className="icon-circle">
            <i className="bi bi-instagram"></i>
          </div>

          <div className="icon-circle">
            <i className="bi bi-linkedin"></i>
          </div>

        </div>

   
        <p>
          Designed by <span style={{ color: "#0dcaf0" }}>ashik Panchal</span>
        </p>

      </div>
    </footer>
  );
}