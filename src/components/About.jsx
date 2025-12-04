import React from "react";
import withSectionWrapper from "../hoc/withSectionWrapper";

const About = () => {
  return (
    <div className="row align-items-center about-row">
      <div className="col-lg-5 mb-4 mb-lg-0">
        <div className="about-images">
          <div className="about-img-main">
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
              className="img-fluid rounded-4"
              alt="Data center"
            />
          </div>
          <div className="about-img-small">
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
              className="img-fluid rounded-4"
              alt="Woman working"
            />
          </div>
          <div className="about-clients-pill">
            <span className="avatar-stack me-2" />
            <span>120K Satisfied Client</span>
          </div>
        </div>
      </div>

      <div className="col-lg-7 ps-lg-5">
        <p className="section-tag">About Us</p>
        <h2 className="section-title mb-3">
          Unlock Your Business
          <span className="text-gradient"> Potential </span>
          with Our Cutting-Edge IT Solutions to Grow
        </h2>
        <p className="section-text mb-4">
          Transform your business with innovative IT services tailored to your
          unique challenges. We combine strategy, design and technology to drive
          growth in today&apos;s digital world.
        </p>

        <div className="row">
          <div className="col-md-6 mb-3">
            <h6 className="feature-title">Customized Solutions</h6>
            <p className="small text-muted-2">
              IT strategies designed specifically for your business model.
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <h6 className="feature-title">Scalable Infrastructure</h6>
            <p className="small text-muted-2">
              Future-ready systems that grow with your organization.
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <h6 className="feature-title">Enhanced Security</h6>
            <p className="small text-muted-2">
              Robust protection with continuous monitoring and alerts.
            </p>
          </div>
          <div className="col-md-6 mb-3">
            <h6 className="feature-title">Expert Support</h6>
            <p className="small text-muted-2">
              Dedicated team of professionals 24/7 at your service.
            </p>
          </div>
        </div>

        <div className="d-flex align-items-center mt-4 gap-4 flex-wrap">
          <div>
            <h3 className="mb-0 text-gradient">25+</h3>
            <p className="small text-muted-2 mb-0">Years of Experience</p>
          </div>
          <button className="btn btn-gradient rounded-pill px-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default withSectionWrapper(About, "about", "section-dark");
