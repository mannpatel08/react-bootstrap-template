import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent tech-navbar fixed-top">
      <div className="container-fluid px-4 px-md-5">
        <a className="navbar-brand" href="#home">
            <img 
                src="/src/assets/logo-1.webp" 
                alt="TechGuru Logo" 
                className="nav-logo"
            />
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="mainNav">
          <ul className="navbar-nav mb-2 mb-lg-0 me-3">
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="#footer">
                Contact
              </a>
            </li>
          </ul>
          <button className="btn btn-gradient rounded-pill px-4">
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
