import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { Code, Laptop, Palette } from "lucide-react";

const HeroSection = ({ scrollToSection }) => {
  const homeRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Full Stack Developer",
    "Programming teacher",
    "Fast api specialist",
    "Cyber security enthusiast",
    "Python Developer",
    "Technical writer",
    "A lot more"
  ];

  useEffect(() => {
    // Dynamic typing speed: faster typing, a bit slower deleting for readability
    const baseSpeed = isDeleting ? 20 : 40;
    const randomVariance = Math.random() * 20; // add some natural variation
    const typingSpeed = baseSpeed + randomVariance;
    const pauseDuration = 800; // shorter pause at full word
    const currentTitle = titles[textIndex];
    let timer;

    if (!isDeleting && displayText.length < currentTitle.length) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentTitle.length) {
      // Word complete, pause then delete
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting characters
      timer = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      }, typingSpeed / 1.5);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next title
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerIcons = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const iconAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 } 
    }
  };

  return (
    <section 
      id="home"
      ref={homeRef} 
      className="pt-24 pb-20 md:py-32 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <span className="bg-indigo-800 bg-opacity-50 text-yellow-300 text-sm font-semibold px-4 py-1 rounded-full inline-block mb-6">
              Portfolio 2025
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Hello, I'm <span className="text-yellow-300 relative inline-block">
                Gentle Okhai
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-300 opacity-60 rounded"></span>
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl mb-8 h-12 font-medium">
              I'm a <span className="text-yellow-300">{displayText}</span>
              <span className="animate-pulse ml-1 inline-block w-0.5 h-6 bg-yellow-300 align-middle">|</span>
            </h2>
            
            <p className="text-lg text-indigo-100 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Transforming ideas into exceptional digital experiences with clean code, 
              intuitive design, and innovative solutions that drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 hover:text-indigo-800 transition-all duration-300 transform hover:-translate-y-1"
              >
                Let's work together
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </button>
            </div>
            
            <motion.div 
              className="mt-10 flex items-center justify-center md:justify-start gap-6"
              variants={staggerIcons}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: <FaReact size={24} />, color: "bg-blue-500" },
                { icon: <Code size={24} />, color: "bg-green-500" },
                { icon: <Laptop size={24} />, color: "bg-purple-500" },
                { icon: <Palette size={24} />, color: "bg-red-500" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className={`${item.color} p-3 rounded-lg shadow-lg`}
                  variants={iconAnimation}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-5/12 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
                      <div className="relative">


                          <div className="relative aspect-square w-72 md:w-96 rounded-full bg-gradient-to-br from-indigo-300 to-purple-300 p-1 shadow-2xl ring-4 ring-white transform hover:scale-105 transition-transform duration-300">
                              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                                  <img
                                      src="gentle.jpg"
                                      alt="Gentle Okhai smiling portrait"
                                      className="w-full h-full object-cover"
                                      loading="lazy"
                                      decoding="async"
                                  />

                              </div>


                {/* Floating badges */}
                <motion.div 
                  className="absolute -right-4 -bottom-4 bg-indigo-600 rounded-full p-4 shadow-lg"
                  animate={{ 
                    y: [0, -5, 0], 
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  <FaReact className="text-4xl text-white" />
                </motion.div>

                <motion.div 
                  className="absolute -left-2 top-1/4 bg-yellow-400 rounded-full p-3 shadow-lg"
                  animate={{ 
                    y: [0, -8, 0], 
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }}
                >
                  <Code className="text-2xl text-indigo-900" />
                </motion.div>

                <motion.div 
                  className="absolute -left-6 -bottom-6 bg-purple-500 rounded-full p-3 shadow-lg"
                  animate={{ 
                    y: [0, 5, 0], 
                    rotate: [0, -3, 0]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                >
                  <Palette className="text-2xl text-white" />
                </motion.div>
              </div>

              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full filter blur-3xl opacity-20 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
    </section>
  );
};

export default HeroSection;