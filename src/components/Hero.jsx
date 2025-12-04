import React from "react";
import withSectionWrapper from "../hoc/withSectionWrapper";

const Hero = () => {
  return (
    <div className="hero-bg-image d-flex align-items-center px-4 px-md-5">
      {/* DARK OVERLAY */}
      <div className="hero-overlay"></div>

      <div className="row w-100 position-relative">
        <div className="col-lg-7 col-md-12">
          <p className="small-tag mb-3">
            IT Solutions Designed for Your Success
          </p>

          <h1 className="hero-title mb-4">
            Techguru – Smart Solutions for a{" "}
            <span className="text-gradient">Connected World</span>
          </h1>

          <p className="hero-subtitle mb-4">
            From strategic IT consulting to seamless implementation, we deliver
            tailored solutions that drive efficiency.
          </p>

          <div className="d-flex gap-3 flex-wrap">
            <button className="btn btn-gradient rounded-pill px-4">
              Get Started →
            </button>
            <button className="btn btn-outline-light rounded-pill px-4">
              Read More →
            </button>
          </div>

          <div className="mt-5 d-flex align-items-center hero-trust">
            <div className="trust-badge me-3" />
            <div>
              <p className="mb-0 small text-muted-2">5.0 Excellent | Reviews</p>
              <p className="mb-0 fw-semibold">Trusted by clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withSectionWrapper(Hero, "home", "hero-bg");
