import React from "react";

const withSectionWrapper = (WrappedComponent, sectionId, extraClass = "") => {
  const HOC = (props) => (
    <section id={sectionId} className={`section-wrapper ${extraClass}`}>
      <div className="container-fluid px-4 px-md-5">
        <WrappedComponent {...props} />
      </div>
    </section>
  );

  return HOC;
};

export default withSectionWrapper;
