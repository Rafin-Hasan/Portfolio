import React from "react";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contacts";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
