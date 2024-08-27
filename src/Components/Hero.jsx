import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white h-screen flex items-center justify-center"
      data-aos="fade-up"
    >
      <div className="text-center">
        <h2
          className="text-5xl font-bold mb-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Welcome to My Portfolio
        </h2>
        <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
          I am a Web Developer with a passion for building beautiful and
          functional websites.
        </p>
        <a
          href="#about"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
