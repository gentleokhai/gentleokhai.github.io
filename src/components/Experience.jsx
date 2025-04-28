import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const experiences = [
  {
    title: "Software Engineering bootcamp",
    company: "ALX software engineering program",
    period: "2022",
    side: "right",
    details: [
      "Learnt teamwork and working under deadlines",
      "Created reusable UI components reducing development time by 20%",
      "Participated in code reviews and gained experience in professional software development practices"
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Zuri Team",
    period: "2022 - 2023",
    side: "left",
    details: [
      "Assisted in developing web applications for clients across various industries",
      "Created reusable UI components reducing development time by 20%"
    ],
  },
  {
    title: "Frontend Developer",
    company: "Timardor global resources",
    period: "2023",
    side: "right",
    details: [
      "Developed responsive web interfaces for enterprise clients using React and styled-components",
      "Integrated analytics tools resulting in 40% improved user insights",
      "Collaborated with designers to implement pixel-perfect interfaces and animations",
    ],
  },
  {
    title: "Backend Developer",
    company: "Kozzy",
    period: "2023 - 2024",
    side: "left",
    details: [
      "Built effective RESTful APIs using Flask and Mongodb",
      "Implemented JWT authentication and authorization mechanisms",
      "Optimized database queries and improved performance by 30%",
      "Worked closely with frontend teams to ensure seamless integration"
    ],
  },
  {
    title: "Smart Contract Developer",
    company: "Rebrand the brand",
    period: "2023-2024",
    side: "right",
    details: [
      "Developed and deployes an e-commerce backend",
      "Introduced Agile methodologies that increased team velocity by 28%",
      "Reduced technical debt by implementing comprehensive testing strategies",
      "Collaborated with product managers to define technical roadmaps and feature prioritization"
    ],
  },
  {
    title: "Backend Developer",
    company: "Reboot Monkey",
    period: "2024 - Present",
    side: "left",
    details: [

      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Architected and implemented scalable APIs handling 5M+ monthly requests",
      "Mentored junior developers and implemented code review protocols that improved code quality by 35%"
    ],
  },
];

const ExperienceItem = ({ title, company, period, details, side }) => {
  const isLeft = side === "left";

  return (
    <motion.div
      className="flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={`md:w-1/2 ${isLeft ? "md:pr-16 md:text-right mb-8 md:mb-0" : "md:pr-16 hidden md:block"}`}>
        {isLeft && (
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 font-medium mb-1">{company}</p>
            <p className="text-gray-400 text-sm mb-4">{period}</p>
            <ul className="text-gray-600 space-y-3">
              {details.map((item, i) => (
                <li key={i} className="flex items-start md:justify-end">
                  <span className="block md:order-2">{item}</span>
                  <span className="mr-2 md:mr-0 md:ml-2 text-indigo-500 md:order-1">•</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow-md"></div>
      </div>

      <div className={`md:w-1/2 ${!isLeft ? "md:pl-16" : "hidden md:block"}`}>
        {!isLeft && (
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 font-medium mb-1">{company}</p>
            <p className="text-gray-400 text-sm mb-4">{period}</p>
            <ul className="text-gray-600 space-y-3">
              {details.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Professional Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A progression of increasingly responsible roles demonstrating expertise in modern web development, team leadership, and delivering high-impact technical solutions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-indigo-300"></div>
          <div className="space-y-24">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;