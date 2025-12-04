import React from "react";
import withSectionWrapper from "../hoc/withSectionWrapper";

const Footer = () => {
  return (
    <div className="footer-content" id="contact">
      <div className="row mb-5">
        <div className="col-lg-4 mb-4 mb-lg-0">
          <div className="footer-card">
            <div className="d-flex align-items-center mb-3">
              <span className="logo-circle me-2" />
              <span className="fw-bold fs-5 text-white">TechGuru</span>
            </div>

            <div className="mb-3">
              <h6 className="text-white mb-2">Contact Info</h6>
              <p className="small text-muted-2 mb-0">info@domain.com</p>
              <p className="small text-muted-2 mb-0">+99 (00) 567 780</p>
            </div>

            <div>
              <h6 className="text-white mb-2">Location</h6>
              <p className="small text-muted-2 mb-0">
                123 Main Street, Apt 4B
                <br />
                New York, NY 10001 USA
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-2 mb-4">
          <h6 className="text-white mb-3">Pages</h6>
          <ul className="list-unstyled small text-muted-2 footer-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Portfolio</li>
            <li>Blogs</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="col-lg-3 mb-4">
          <h6 className="text-white mb-3">Support</h6>
          <ul className="list-unstyled small text-muted-2 footer-links">
            <li>Terms &amp; Conditions</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>404 Page</li>
            <li>Live Chat</li>
            <li>Our Services</li>
          </ul>
        </div>

        <div className="col-lg-3 mb-4">
          <h6 className="text-white mb-3">Our Services</h6>
          <ul className="list-unstyled small text-muted-2 footer-links">
            <li>UI/UX Design</li>
            <li>Website Design</li>
            <li>Web Development</li>
            <li>Product Design</li>
            <li>Online Branding</li>
            <li>Personal Branding</li>
          </ul>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center border-top pt-3">
        <p className="small text-muted-2 mb-0">
          © Copyright 2025 TechGuru. All rights reserved
        </p>

        <div className="d-flex align-items-center gap-3">
          <span className="small text-white">Follow Us:</span>

          <span className="social-circle">
            <i className="bi bi-facebook"></i>
          </span>
          <span className="social-circle">
            <i className="bi bi-twitter-x"></i>
          </span>
          <span className="social-circle">
            <i className="bi bi-linkedin"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default withSectionWrapper(Footer, "footer", "section-dark");
