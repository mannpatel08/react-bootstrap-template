import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import StatsBar from "./components/StatsBar";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <About />
      <StatsBar />
      <WhyChoose />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
