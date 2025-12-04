import React from "react";
import withSectionWrapper from "../hoc/withSectionWrapper";

const stats = [
  { label: "Creative Plus award", value: "120+" },
  { label: "Expert Team Members", value: "300+" },
  { label: "Happy Clients Review", value: "20M" },
  { label: "Project Completed", value: "1.5K" },
];

const StatsBar = () => {
  return (
    <div className="stats-bar d-flex flex-wrap justify-content-around">
      {stats.map((item) => (
        <div key={item.label} className="text-center mx-3 my-2">
          <div className="stat-value">{item.value}</div>
          <div className="small text-muted-2">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default withSectionWrapper(StatsBar, "stats", "section-dark stats-bg");
