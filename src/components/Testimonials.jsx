import React from "react";
import withSectionWrapper from "../hoc/withSectionWrapper";

const testimonials = [
  {
    name: "Sarah Williams",
    role: "Marketing Manager",
    text: "Absolutely fantastic experience! The team exceeded our expectations and delivered a solution that perfectly met our needs.",
  },
  {
    name: "Thomas Alison",
    role: "UI/UX Designer",
    text: "Their attention to detail and commitment to quality is unmatched. We loved working with the TechGuru team.",
  },
  {
    name: "Sarah Williams",
    role: "Marketing Manager",
    text: "Reliable, responsive and highly professional from planning to delivery. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <div className="text-center">
      <p className="section-tag">Testimonials</p>
      <h2 className="section-title mb-5">
        Customer Experiences That{" "}
        <span className="text-gradient">Speak Volumes</span>
      </h2>

      <div className="row justify-content-center">
        {testimonials.map((t, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="testimonial-card">
              <div className="stars mb-3">★★★★★</div>
              <p className="small text-muted-2 mb-4">{t.text}</p>
              <div className="d-flex align-items-center">
                <div className="avatar-placeholder me-3" />
                <div className="text-start">
                  <h6 className="mb-0">{t.name}</h6>
                  <p className="small text-muted-2 mb-0">{t.role}</p>
                </div>
              </div>
              <div className="quote-mark">”</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withSectionWrapper(
  Testimonials,
  "testimonials",
  "section-dark testimonials-bg"
);
