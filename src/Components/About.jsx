import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-right"
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div
            className="md:w-1/2 mb-8 md:mb-0"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src="/img/Me.jpg"
              alt="About"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div
            className="md:w-1/2 md:pl-12"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <p className="text-lg leading-relaxed text-gray-700">
              I am a dedicated web developer with experience in creating
              stunning websites and applications. I specialize in front-end
              development, utilizing the latest technologies to build responsive
              and user-friendly interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
