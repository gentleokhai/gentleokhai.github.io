import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projects = [
    {
        id: 1,
        title: "One health App",
        description:
          "A responsive app for tracking health metrics with data visualization..",
        technologies: ["React", "FastAPI", "MongoDB"],
        image: "onehealth.png",
        demoUrl: "https://onehealth-ten.vercel.app/",
      },
  {
    id: 2,
    title: "Timardor global",
    description:
      "A full-featured online store with cart functionality, user authentication, and payment integration.",
    technologies: ["React", "Python", "flask", "MongoDB"],
    image: "timardor.png",
    demoUrl: "https://www.timardorglobalresource.com/",
  },
  {
    id: 3,
    title: "E commerce Backend",
    description:
      "A full-featured backend store with complete functionalities, user authentication, and payment integration.",
    technologies: ["Node", "Express", "MongoDB"],
    image: "ecommerce.png",
    demoUrl: "https://github.com/gentleokhai/node_ecommerce",
  },
  {
    id: 4,
    title: "gamified quiz",
    description:
      "A quiz app",
    technologies: ["Fastapi", "MongoDB", "Vercel"],
    image: "quiz.png",
    demoUrl: "https://fastapi-quiz.vercel.app/docs",
  },
  {
    id: 4,
    title: "Basic ecommerce",
    description:
      "An e-commerce backend with basic functionalities.",
    technologies: ["Fastapi", "MongoDB", "Vercel"],
    image: "fastapi.png",
    demoUrl: "https://timardor.vercel.app/docs",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are a few selected projects that highlight my expertise in building scalable, high-performance web applications.
            Please note that some professional projects cannot be publicly displayed due to non-disclosure agreements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-indigo-100 text-indigo-600 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-right">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/gentleokhai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-300"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
