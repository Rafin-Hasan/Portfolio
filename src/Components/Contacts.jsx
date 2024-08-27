import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white"
      id="contact"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Get in Touch
        </h2>
        <form
          className="w-full max-w-lg mx-auto"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="mb-6">
            <label className="block mb-2 text-lg" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 focus:outline-none"
              type="text"
              id="name"
              data-aos="fade-right"
              data-aos-delay="200"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-lg" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 focus:outline-none"
              type="email"
              id="email"
              data-aos="fade-left"
              data-aos-delay="300"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 focus:outline-none"
              id="message"
              rows="5"
              data-aos="fade-right"
              data-aos-delay="400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
