import React from "react";
import withSectionWrapper from "../hoc/withSectionWrapper";

const WhyChoose = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6 mb-4 mb-lg-0">
        <p className="section-tag">Why Choose Us</p>
        <h2 className="section-title mb-3">
          Elevate Growth with Our
          <span className="text-gradient"> Cutting-Edge IT Solutions </span>
          for Success
        </h2>
        <p className="section-text mb-4">
          Innovating and empowering businesses with tailored digital solutions
          for long-term success and sustainable growth.
        </p>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <span className="small text-white">Campaign Launches</span>
            <span className="small text-white">90%</span>
          </div>
          <div className="progress mt-2">
            <div
              className="progress-bar progress-bar-gradient"
              style={{ width: "90%" }}
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="d-flex justify-content-between">
            <span className="small text-white">Innovation Design</span>
            <span className="small text-white">80%</span>
          </div>
          <div className="progress mt-2">
            <div
              className="progress-bar progress-bar-gradient-2"
              style={{ width: "80%" }}
            />
          </div>
        </div>

        <button className="btn btn-gradient rounded-pill px-4">
          About Us
        </button>
      </div>

      <div className="col-lg-6">
        <div className="why-image-wrapper">
          <img
            src="https://images.pexels.com/photos/1181615/pexels-photo-1181615.jpeg"
            alt="Laptop work"
            className="img-fluid rounded-4"
          />
        </div>
      </div>
    </div>
  );
};

export default withSectionWrapper(WhyChoose, "services", "section-dark");
