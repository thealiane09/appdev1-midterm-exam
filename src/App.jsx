import React, { useState } from "react";
import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // for row/col classes

function App() {
  return (
    <>
      {/* Header */}
      <header className="header-area">
        <div className="container">
          <nav className="main-nav d-flex justify-content-between align-items-center">
            <a href="#top" className="logo">
              <img src="assets/images/logo.png" alt="Logo" />
            </a>
            <ul className="nav d-flex list-unstyled gap-3">
              <li><a href="#top" className="active">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
              <li>
                <div className="gradient-button">
                  <a href="#modal">Sign In Now</a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Banner */}
      <section className="main-banner" id="top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="left-content">
                <h2>Get The Latest App From App Stores</h2>
                <p>Chain App Dev is an app landing page template based on Bootstrap CSS.</p>
                <div className="white-button">
                  <a href="#contact"><i className="fab fa-apple"></i> Free Quote</a>
                </div>
                <div className="white-button">
                  <a href="#contact"><i className="fab fa-google-play"></i> Free Quote</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image">
                <img src="assets/images/slider-dec.png" alt="Slider" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services section">
        <div className="container">
          <div className="row">
            {[
              { title: "App Maintenance", text: "You are not allowed to redistribute this template ZIP file." },
              { title: "Rocket Speed of App", text: "You can use this template and modify it freely." },
              { title: "Multi Workflow Idea", text: "Support us via PayPal if beneficial." },
              { title: "24/7 Help & Support", text: "Lorem ipsum dolor consectetur adipiscing elit." }
            ].map((service, idx) => (
              <div key={idx} className="col-lg-3 mb-3">
                <div className={`service-item service-${idx + 1}`}>
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4>About <em>What We Do</em></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-lg-6">
              <img src="assets/images/about-right-dec.png" alt="About" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center py-3">
        <p>© 2025 Chain App Dev. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
