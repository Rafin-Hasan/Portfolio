import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Project 1",
    description:
      "A brief description of Project 1. It’s an exciting project that showcases my skills in web development.",
    image: "/path/to/project1.jpg",
    link: "#",
  },
  {
    title: "Project 2",
    description:
      "A brief description of Project 2. This project demonstrates my ability to create functional and aesthetically pleasing websites.",
    image: "/path/to/project2.jpg",
    link: "#",
  },
  {
    title: "Project 3",
    description:
      "A brief description of Project 3. Another project that highlights my expertise in web development and design.",
    image: "/path/to/project3.jpg",
    link: "#",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-gray-100" id="projects">
      <div className="container mx-auto text-center">
        <h2
          className="text-5xl font-bold text-gray-900 mb-12"
          data-aos="fade-up"
        >
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
