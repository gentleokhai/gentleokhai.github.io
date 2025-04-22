// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// import React, { useState, useEffect } from 'react';
// import { Menu, X, Github, Linkedin, Mail, Phone, MessageCircle, Code, Database, Server, CheckCircle, ChevronRight, ArrowRight, User, FileText, Briefcase, Award } from 'lucide-react';

// export default function Portfolio() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isVisible, setIsVisible] = useState({});

//   // Animation for elements to fade in when scrolled into view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsVisible((prev) => ({
//             ...prev,
//             [entry.target.id]: entry.isIntersecting
//           }));
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const sections = document.querySelectorAll('section[id]');
//     sections.forEach((section) => {
//       observer.observe(section);
//     });

//     return () => {
//       sections.forEach((section) => {
//         observer.unobserve(section);
//       });
//     };
//   }, []);

//   // Track scroll position to update active section in the navigation
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const sections = document.querySelectorAll('section[id]');
      
//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop - 100;
//         const sectionHeight = section.offsetHeight;
        
//         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//           setActiveSection(section.id);
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80,
//         behavior: 'smooth'
//       });
//       setActiveSection(sectionId);
//       setIsMenuOpen(false);
//     }
//   };

//   // Projects data
//   const projects = [
//     {
//       title: "E-Commerce Platform",
//       description: "A fully responsive e-commerce solution with cart functionality, payment integration, and user authentication",
//       technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
//       image: "/api/placeholder/600/400",
//       category: "Full Stack"
//     },
//     {
//       title: "Real Estate Management System",
//       description: "Property management application with filtering, booking, and admin dashboard features",
//       technologies: ["Vue", "Express", "MySQL", "JWT Authentication"],
//       image: "/api/placeholder/600/400",
//       category: "Web Application"
//     },
//     {
//       title: "Task Management Dashboard",
//       description: "Collaborative project management tool with real-time updates and analytics",
//       technologies: ["React", "Firebase", "Material UI", "Chart.js"],
//       image: "/api/placeholder/600/400",
//       category: "Front End"
//     },
//     {
//       title: "Content Management System",
//       description: "Custom CMS built for a media company with robust publishing workflow",
//       technologies: ["Angular", "Django", "PostgreSQL", "AWS S3"],
//       image: "/api/placeholder/600/400",
//       category: "Full Stack"
//     }
//   ];

//   // Services data
//   const services = [
//     {
//       title: "Full Stack Development",
//       description: "End-to-end web application development with both front-end and back-end expertise",
//       icon: <Code className="w-8 h-8 text-indigo-600" />
//     },
//     {
//       title: "Front-End Development",
//       description: "Building responsive, interactive, and user-friendly interfaces using modern frameworks",
//       icon: <FileText className="w-8 h-8 text-indigo-600" />
//     },
//     {
//       title: "Back-End Development",
//       description: "Creating robust server-side applications, APIs, and database systems",
//       icon: <Server className="w-8 h-8 text-indigo-600" />
//     },
//     {
//       title: "Database Management",
//       description: "Setting up, optimizing, and managing both SQL and NoSQL databases",
//       icon: <Database className="w-8 h-8 text-indigo-600" />
//     },
//     {
//       title: "Technical Consultation",
//       description: "Expert advice on technology stack selection and application architecture",
//       icon: <Briefcase className="w-8 h-8 text-indigo-600" />
//     },
//     {
//       title: "Technical Writing",
//       description: "Clear and concise documentation for technical projects and solutions",
//       icon: <FileText className="w-8 h-8 text-indigo-600" />
//     }
//   ];

//   // Skills data
//   const skills = {
//     frontend: ["React", "Vue", "Angular", "Ionic", "HTML/CSS", "JavaScript", "TypeScript", "Tailwind CSS"],
//     backend: ["Node.js", "Express", "Django", "Flask", "FastAPI", "RESTful APIs", "GraphQL"],
//     databases: ["MongoDB", "MySQL", "SQL Alchemy", "PostgreSQL", "Redis"],
//     tools: ["Git", "Docker", "AWS", "Heroku", "Figma", "Jira", "Agile Methodologies"]
//   };

//   // Testimonials data
//   const testimonials = [
//     {
//       text: "Gentle's attention to detail and technical expertise transformed our web application. He delivered beyond our expectations and was responsive throughout the project.",
//       name: "Sarah Johnson",
//       title: "CTO, TechStart Inc.",
//       image: "/api/placeholder/80/80"
//     },
//     {
//       text: "Working with Gentle was an excellent experience. His ability to understand our complex requirements and convert them into a functioning application was impressive.",
//       name: "Michael Chen",
//       title: "Product Manager, DataFlow Systems",
//       image: "/api/placeholder/80/80"
//     },
//     {
//       text: "Gentle not only built our website but also provided valuable insights to improve our user experience. His technical knowledge and problem-solving skills are outstanding.",
//       name: "Jessica Lee",
//       title: "Founder, CreativeHub",
//       image: "/api/placeholder/80/80"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
//       {/* Navigation Bar */}
//       <header className="bg-white shadow-md fixed w-full z-50 transition-all duration-300">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center">
//               <span className="font-bold text-xl sm:text-2xl text-indigo-600">Gentle<span className="text-gray-800">Okhai</span></span>
//             </div>
            
//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex space-x-8">
//               {['home', 'about', 'skills', 'services', 'projects', 'testimonials', 'contact'].map((item) => (
//                 <button 
//                   key={item}
//                   onClick={() => scrollToSection(item)}
//                   className={`text-sm font-medium transition-colors duration-300 ${
//                     activeSection === item ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-500'
//                   }`}
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </button>
//               ))}
//             </nav>
            
//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2 rounded-md text-gray-600 hover:text-indigo-500 focus:outline-none"
//               >
//                 {isMenuOpen ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white shadow-lg">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               {['home', 'about', 'skills', 'services', 'projects', 'testimonials', 'contact'].map((item) => (
//                 <button 
//                   key={item}
//                   onClick={() => scrollToSection(item)}
//                   className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
//                     activeSection === item 
//                       ? 'bg-indigo-50 text-indigo-600' 
//                       : 'text-gray-600 hover:bg-gray-50 hover:text-indigo-500'
//                   }`}
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="pt-28 pb-20 bg-gradient-to-br from-indigo-50 to-blue-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
//                 Full Stack Developer <span className="text-indigo-600">Crafting Digital Experiences</span>
//               </h1>
//               <p className="text-lg md:text-xl text-gray-600 mb-8">
//                 Transforming ideas into elegant, functional, and user-friendly web applications with modern technologies and best practices.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <button 
//                   onClick={() => scrollToSection('contact')}
//                   className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 flex items-center"
//                 >
//                   Let's Work Together
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </button>
//                 <button 
//                   onClick={() => scrollToSection('projects')}
//                   className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-gray-50 transition-colors duration-300 flex items-center"
//                 >
//                   View Projects
//                   <ChevronRight className="ml-2 h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//             <div className="md:w-1/2 flex justify-center">
//               <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden shadow-lg border-4 border-white">
//                 <img 
//                   src="/api/placeholder/320/320" 
//                   alt="Gentle Okhai"
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section 
//         id="about" 
//         className={`py-20 ${isVisible.about ? 'animate-fadeIn' : 'opacity-0'}`}
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4 relative">
//               About Me
//               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded-full mt-2"></div>
//             </h2>
//             <p className="text-lg text-gray-600">
//               Discover my journey, expertise, and approach to development
//             </p>
//           </div>
//           <div className="flex flex-col md:flex-row gap-8 items-center">
//             <div className="md:w-1/2">
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Journey</h3>
//               <p className="text-gray-600 mb-6">
//                 With over two years of experience in designing, developing, and maintaining complex web applications, I bring a wealth of knowledge and expertise to every project I undertake. My journey in web development has been driven by a passion for creating intuitive, efficient, and visually appealing digital solutions.
//               </p>
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">My Approach</h3>
//               <p className="text-gray-600 mb-6">
//                 I believe in a collaborative and transparent development process. By understanding your business goals and user needs, I create tailored solutions that not only meet but exceed expectations. My focus on clean code, performance optimization, and responsive design ensures that your web application stands out in today's competitive digital landscape.
//               </p>
//               <div className="flex flex-wrap gap-4 mt-8">
//                 <div className="flex items-center bg-indigo-50 px-4 py-2 rounded-lg">
//                   <CheckCircle className="h-5 w-5 text-indigo-600 mr-2" />
//                   <span className="text-gray-800">Detail-oriented</span>
//                 </div>
//                 <div className="flex items-center bg-indigo-50 px-4 py-2 rounded-lg">
//                   <CheckCircle className="h-5 w-5 text-indigo-600 mr-2" />
//                   <span className="text-gray-800">Problem solver</span>
//                 </div>
//                 <div className="flex items-center bg-indigo-50 px-4 py-2 rounded-lg">
//                   <CheckCircle className="h-5 w-5 text-indigo-600 mr-2" />
//                   <span className="text-gray-800">Continuous learner</span>
//                 </div>
//               </div>
//             </div>
//             <div className="md:w-1/2">
//               <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
//                 <div className="flex items-center mb-6">
//                   <User className="h-10 w-10 text-indigo-600 mr-4" />
//                   <div>
//                     <h4 className="text-xl font-bold text-gray-800">Gentle Okhai</h4>
//                     <p className="text-gray-600">Full Stack Developer</p>
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <div>
//                     <h5 className="text-sm font-medium text-gray-500 mb-2">SUMMARY</h5>
//                     <p className="text-gray-700">
//                       Highly skilled and detail-oriented Full Stack Developer with expertise in developing scalable, efficient, and user-friendly solutions. Strong focus on responsive design and performance optimization. Adept at working in agile environments and collaborating cross-functionally.
//                     </p>
//                   </div>
//                   <div>
//                     <h5 className="text-sm font-medium text-gray-500 mb-2">EXPERIENCE HIGHLIGHTS</h5>
//                     <ul className="space-y-2">
//                       <li className="flex items-start">
//                         <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
//                         <span className="text-gray-700">Led development and maintenance of web applications using React, Node.js, and MongoDB</span>
//                       </li>
//                       <li className="flex items-start">
//                         <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
//                         <span className="text-gray-700">Implemented RESTful APIs and integrated third-party services</span>
//                       </li>
//                       <li className="flex items-start">
//                         <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
//                         <span className="text-gray-700">Optimized application performance and scalability</span>
//                       </li>
//                       <li className="flex items-start">
//                         <ChevronRight className="h-5 w-5 text-indigo-600 mr-2 mt-1 flex-shrink-0" />
//                         <span className="text-gray-700">Mentored junior developers and fostered knowledge sharing</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section 
//         id="skills" 
//         className={`py-20 bg-gray-50 ${isVisible.skills ? 'animate-fadeIn' : 'opacity-0'}`}
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4 relative">
//               Technical Skills
//               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded-full mt-2"></div>
//             </h2>
//             <p className="text-lg text-gray-600">
//               A comprehensive toolkit for building modern web applications
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
//               <div className="flex items-center mb-6">
//                 <Code className="h-8 w-8 text-indigo-600 mr-3" />
//                 <h3 className="text-xl font-bold text-gray-800">Front-End Technologies</h3>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 {skills.frontend.map((skill, index) => (
//                   <span 
//                     key={index} 
//                     className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
//               <div className="flex items-center mb-6">
//                 <Server className="h-8 w-8 text-indigo-600 mr-3" />
//                 <h3 className="text-xl font-bold text-gray-800">Back-End Technologies</h3>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 {skills.backend.map((skill, index) => (
//                   <span 
//                     key={index} 
//                     className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
//               <div className="flex items-center mb-6">
//                 <Database className="h-8 w-8 text-indigo-600 mr-3" />
//                 <h3 className="text-xl font-bold text-gray-800">Database Management</h3>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 {skills.databases.map((skill, index) => (
//                   <span 
//                     key={index} 
//                     className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
            
//             <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
//               <div className="flex items-center mb-6">
//                 <Briefcase className="h-8 w-8 text-indigo-600 mr-3" />
//                 <h3 className="text-xl font-bold text-gray-800">Tools & Methodologies</h3>
//               </div>
//               <div className="flex flex-wrap gap-3">
//                 {skills.tools.map((skill, index) => (
//                   <span 
//                     key={index} 
//                     className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section 
//         id="services" 
//         className={`py-20 ${isVisible.services ? 'animate-fadeIn' : 'opacity-0'}`}
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4 relative">
//               Services
//               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded-full mt-2"></div>
//             </h2>
//             <p className="text-lg text-gray-600">
//               Comprehensive web development solutions tailored to your needs
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 <div className="flex items-center justify-center h-16 w-16 bg-indigo-50 rounded-lg mb-6 mx-auto">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
//                 <p className="text-gray-600 text-center">{service.description}</p>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-16 bg-indigo-600 rounded-lg shadow-lg p-8 text-center">
//             <h3 className="text-2xl font-bold text-white mb-4">Ready to Bring Your Project to Life?</h3>
//             <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
//               Whether you need a complete web application, a custom feature, or technical consultation, I'm here to help you achieve your digital goals.
//             </p>
//             <button 
//               onClick={() => scrollToSection('contact')}
//               className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-indigo-50 transition-colors duration-300"
//             >
//               Get in Touch
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section 
//         id="projects" 
//         className={`py-20 bg-gray-50 ${isVisible.projects ? 'animate-fadeIn' : 'opacity-0'}`}
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4 relative">
//               Projects
//               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded-full mt-2"></div>
//             </h2>
//             <p className="text-lg text-gray-600">
//               A showcase of my recent work and technical capabilities
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//               >
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <div className="flex justify-between items-center mb-3">
//                     <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
//                     <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
//                       {project.category}
//                     </span>
//                   </div>
//                   <p className="text-gray-600 mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span 
//                         key={techIndex} 
//                         className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex justify-center">
//                     <a 
//                       href="https://Github.com/gentleokhai" 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm flex items-center"
//                     >
//                       <Github className="w-4 h-4 mr-2" />
//                       View on Github
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-12 text-center">
//             <a 
//               href="https://Github.com/gentleokhai" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-300 flex items-center justify-center"
//             >
//               View more projects
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section 
//         id="testimonials" 
//         className={`py-20 ${isVisible.testimonials ? 'animate-fadeIn' : 'opacity-0'}`}
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4 relative">
//               Client Testimonials
//               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded-full mt-2"></div>
//             </h2>
//             <p className="text-lg text-gray-600">
//               What clients say about working with me
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div className="flex items-center mb-4">
//                   <img 
//                     src={testimonial.image} 
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full object-cover mr-4"
//                   />
//                   <div>
//                     <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
//                     <p className="text-gray-500 text-sm">{testimonial.title}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 italic">"{testimonial.text}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section 
//         id="contact" 
//         className={`py-20 bg-gradient-to-br from-indigo-50 to-blue-50 ${isVisible.contact ? 'animate-fadeIn' : 'opacity-0'}`}
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4 relative">
//               Get in Touch
//               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-indigo-600 rounded-full mt-2"></div>
//             </h2>
//             <p className="text-lg text-gray-600">
//               Let's discuss how I can help bring your web application to life
//             </p>
//           </div>
          
//           <div className="flex flex-col md:flex-row gap-8 items-start">
//             <div className="md:w-1/2">
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h3 className="text-xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
//                 <form>
//                   <div className="mb-4">
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                     <input 
//                       type="text" 
//                       id="name" 
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                       placeholder="Your Name"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                     <input 
//                       type="email" 
//                       id="email" 
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
//                     <input 
//                       type="text" 
//                       id="subject" 
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                       placeholder="Project Inquiry"
//                     />
//                   </div>
//                   <div className="mb-6">
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                     <textarea 
//                       id="message" 
//                       rows="4" 
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                       placeholder="Tell me about your project..."
//                     ></textarea>
//                   </div>
//                   <button 
//                     type="submit" 
//                     className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
            
//             <div className="md:w-1/2">
//               <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//                 <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <Mail className="h-6 w-6 text-indigo-600 mr-3 mt-1" />
//                     <div>
//                       <p className="font-medium text-gray-800">Email</p>
//                       <a href="mailto:gentleokhaiX@gmail.com" className="text-indigo-600 hover:underline">gentleokhaiX@gmail.com</a>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <Phone className="h-6 w-6 text-indigo-600 mr-3 mt-1" />
//                     <div>
//                       <p className="font-medium text-gray-800">Phone</p>
//                       <a href="tel:+2349065070051" className="text-indigo-600 hover:underline">+234 906 507 0051</a>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <MessageCircle className="h-6 w-6 text-indigo-600 mr-3 mt-1" />
//                     <div>
//                       <p className="font-medium text-gray-800">WhatsApp</p>
//                       <a href="https://wa.me/2349065070051" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">+234 906 507 0051</a>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <Linkedin className="h-6 w-6 text-indigo-600 mr-3 mt-1" />
//                     <div>
//                       <p className="font-medium text-gray-800">LinkedIn</p>
//                       <a href="https://www.linkedin.com/in/gentle235" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">linkedin.com/in/gentle235</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-indigo-600 rounded-lg shadow-md p-6 text-white">
//                 <h3 className="text-xl font-bold mb-4">Available for New Projects</h3>
//                 <p className="text-indigo-100 mb-6">
//                   I'm currently available for freelance work and open to discussing new projects or opportunities. Let's create something amazing together!
//                 </p>
//                 <div className="flex space-x-4">
//                   <a 
//                     href="https://Github.com/gentleokhai" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="p-2 bg-indigo-500 hover:bg-indigo-400 rounded-full transition-colors duration-300"
//                   >
//                     <Github className="h-5 w-5" />
//                   </a>
//                   <a 
//                     href="https://www.linkedin.com/in/gentle235" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="p-2 bg-indigo-500 hover:bg-indigo-400 rounded-full transition-colors duration-300"
//                   >
//                     <Linkedin className="h-5 w-5" />
//                   </a>
//                   <a 
//                     href="mailto:gentleokhaiX@gmail.com"
//                     className="p-2 bg-indigo-500 hover:bg-indigo-400 rounded-full transition-colors duration-300"
//                   >
//                     <Mail className="h-5 w-5" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-16 bg-indigo-600">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
//           <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
//             Let's collaborate to transform your vision into a powerful, user-friendly web application that exceeds expectations.
//           </p>
//           <button 
//             onClick={() => scrollToSection('contact')}
//             className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-indigo-50 transition-colors duration-300"
//           >
//             Get Started Now
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-12">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-6 md:mb-0">
//               <span className="font-bold text-2xl">Gentle<span className="text-indigo-400">Okhai</span></span>
//               <p className="mt-2 text-gray-400">Full Stack Developer</p>
//             </div>
//             <div className="flex space-x-6">
//               <a 
//                 href="https://Github.com/gentleokhai" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white transition-colors duration-300"
//               >
//                 <Github className="h-6 w-6" />
//               </a>
//               <a 
//                 href="https://www.linkedin.com/in/gentle235" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-gray-300 hover:text-white transition-colors duration-300"
//               >
//                 <Linkedin className="h-6 w-6" />
//               </a>
//               <a 
//                 href="mailto:gentleokhaiX@gmail.com"
//                 className="text-gray-300 hover:text-white transition-colors duration-300"
//               >
//                 <Mail className="h-6 w-6" />
//               </a>
//             </div>
//           </div>
//           <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; {new Date().getFullYear()} Gentle Okhai. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>

//       {/* Add CSS for animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }

import './index.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaVuejs, FaAngular, FaNodeJs, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiExpress, SiDjango, SiFlask, SiFastapi, SiMongodb, SiMysql } from 'react-icons/si';
import { TbWriting } from 'react-icons/tb';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
  const homeRef = useRef(null);
  
  // Intersection Observer for section detection
  useEffect(() => {
    const options = {
      threshold: 0.2
    };
    
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    
    const observer = new IntersectionObserver(callback, options);
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });
    
    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);
  
  // Typewriter effect for the hero section
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const phrases = [
    "Full Stack Developer",
    "React Specialist",
    "Node.js Expert",
    "Technical Writer"
  ];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const current = phrases[currentPhrase];
      
      if (!isDeleting) {
        setText(current.substring(0, index + 1));
        setIndex(prev => prev + 1);
        
        if (index >= current.length) {
          setIsDeleting(true);
          clearInterval(interval);
          setTimeout(() => {
            setInterval(() => {
              setText(current.substring(0, index - 1));
              setIndex(prev => prev - 1);
              
              if (index <= 0) {
                setIsDeleting(false);
                setCurrentPhrase((currentPhrase + 1) % phrases.length);
              }
            }, 50);
          }, 1500);
        }
      }
    }, 150);
    
    return () => clearInterval(interval);
  }, [index, isDeleting, currentPhrase]);
  
  // Scroll to section function
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with cart functionality, user authentication, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "A comprehensive project management tool with real-time updates and collaboration features.",
      technologies: ["Vue.js", "Django", "PostgreSQL"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Health Monitoring App",
      description: "A mobile-responsive application for tracking health metrics with data visualization.",
      technologies: ["React", "FastAPI", "MongoDB"],
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Real Estate Listing Portal",
      description: "A property listing website with advanced search functionality and interactive maps.",
      technologies: ["Angular", "Node.js", "MySQL"],
      image: "/api/placeholder/600/400"
    }
  ];
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      quote: "Gentle transformed our business with his exceptional development skills and attention to detail. Our website traffic increased by 45% after his redesign.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Michael Chen",
      position: "Product Manager, InnovateCorp",
      quote: "Working with Gentle was a pleasure. He delivered our application ahead of schedule and exceeded all our performance expectations.",
      image: "/api/placeholder/80/80"
    },
    {
      name: "Aisha Patel",
      position: "Founder, DesignFusion",
      quote: "Gentle's technical skills are matched only by his professionalism and communication. He turned our vision into reality flawlessly.",
      image: "/api/placeholder/80/80"
    }
  ];
  
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">Gentle Okhai</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wider ${
                  activeSection === section 
                    ? 'text-indigo-600 font-bold'
                    : 'text-gray-600 hover:text-indigo-500'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-500 hover:text-indigo-500 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-col space-y-4">
                  {sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`text-sm uppercase tracking-wider ${
                        activeSection === section 
                          ? 'text-indigo-600 font-bold'
                          : 'text-gray-600'
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Hero Section */}
      <section id="home" ref={homeRef} className="pt-24 md:pt-32 pb-20 md:pb-32 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 text-center md:text-left"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hello, I'm <span className="text-yellow-300">Gentle Okhai</span>
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6 h-12">
                I'm a <span className="text-yellow-300">{text}</span>
                <span className="animate-pulse">|</span>
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                Transforming ideas into exceptional digital experiences with clean code and creative solutions.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300"
                >
                  Hire Me
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300"
                >
                  View My Work
                </button>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white p-2 shadow-xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src="/api/placeholder/400/400" 
                    alt="Gentle Okhai" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -right-4 -bottom-4 bg-indigo-600 rounded-full p-4 shadow-lg">
                  <FaReact className="text-4xl text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Me</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-2/5 mb-10 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="/api/placeholder/600/800" 
                  alt="Gentle Okhai Profile" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
                <div className="absolute -right-6 -bottom-6 bg-indigo-600 text-white p-6 rounded-lg shadow-lg">
                  <p className="font-bold text-xl">2+ Years</p>
                  <p className="text-sm">Professional Experience</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Full Stack Developer & Technical Writer</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am a highly skilled and detail-oriented Full Stack Developer with over two years of experience in designing, developing, and maintaining complex web applications. Proficient in front-end, back-end technologies and deployment of websites.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I've demonstrated expertise in developing scalable, efficient, and user-friendly solutions with a strong focus on responsive design and performance optimization. I'm adept at working in agile environments, collaborating cross-functionally with designers, product managers, and other developers to deliver high-quality software solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Beyond coding, I'm passionate about sharing knowledge through technical writing and mentoring junior developers, fostering a culture of continuous improvement and knowledge sharing.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-indigo-600 font-bold text-xl">2+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-indigo-600 font-bold text-xl">20+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-indigo-600 font-bold text-xl">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/gentle235" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://github.com/gentleokhai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition duration-300"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="mailto:gentleokhaix@gmail.com" 
                  className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition duration-300"
                >
                  <FaEnvelope className="text-xl" />
                </a>
                <a 
                  href="https://wa.me/2349065070051" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Technical Skills</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I specialize in a wide range of technologies that enable me to build robust, scalable, and user-friendly web applications from concept to deployment.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Frontend */}
            <motion.div 
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-6">Frontend Development</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaReact className="text-3xl text-blue-500 mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">React</span>
                      <span>95%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaVuejs className="text-3xl text-green-500 mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Vue.js</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaAngular className="text-3xl text-red-500 mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Angular</span>
                      <span>80%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Backend */}
            <motion.div 
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-6">Backend Development</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FaNodeJs className="text-3xl text-green-600 mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Node.js</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-green-600 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <SiExpress className="text-3xl text-gray-600 mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Express</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-gray-600 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <SiDjango className="text-3xl text-green-800 mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Django</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-green-800 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <SiFastapi className="text-3xl text-teal-500 mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">FastAPI</span>
                      <span>80%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-teal-500 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Database & Other */}
            <motion.div 
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-6">Databases & Other Skills</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <SiMongodb className="text-3xl text-green-500 mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">MongoDB</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <SiMysql className="text-3xl text-blue-600 mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">MySQL</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <TbWriting className="text-3xl text-purple-600 mr-4" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Technical Writing</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-full bg-purple-600 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Professional Experience</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over the past years, I've worked on a variety of projects that have helped me develop a comprehensive skill set in web development.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <motion.div 
                className="flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-indigo-600 mb-2">Full Stack Developer</h3>
                    <p className="text-gray-500 mb-4">2022 - Present</p>
                    <ul className="text-gray-600 space-y-2">
                      <li>Led development of web applications using React, Node.js, and MongoDB</li>
                      <li>Improved application performance by 30% through code optimization</li>
                      <li>Implemented RESTful APIs and integrated third-party services</li>
                      <li>Collaborated with cross-functional teams to define and ship new features</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 border-4 border-white shadow"></div>
                </div>
                <div className="md:w-1/2 md:pl-16"></div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 md:pr-16"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 border-4 border-white shadow"></div>
                </div>
                <div className="md:w-1/2 md:pl-16">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-indigo-600 mb-2">Web Development Mentor</h3>
                    <p className="text-gray-500 mb-4">2021 - Present</p>
                    <ul className="text-gray-600 space-y-2">
                      <li>Taught web development fundamentals to aspiring developers</li>
                      <li>Created comprehensive curriculum covering frontend and backend technologies</li>
                      <li>Mentored junior developers, fostering continuous improvement</li>
                      <li>Conducted code reviews and provided constructive feedback</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 md:pr-16 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-indigo-600 mb-2">Freelance Developer</h3>
                    <p className="text-gray-500 mb-4">2020 - 2022</p>
                    <ul className="text-gray-600 space-y-2">
                      <li>Designed and developed custom websites for various clients</li>
                      <li>Created responsive, user-friendly interfaces with modern web technologies</li>
                      <li>Optimized website performance and ensured cross-browser compatibility</li>
                      <li>Maintained ongoing client relationships and provided technical support</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 border-4 border-white shadow"></div>
                </div>
                <div className="md:w-1/2 md:pl-16"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Featured Projects</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise in building robust web applications.
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
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
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
                  <div className="flex justify-between">
                    <a 
                      href="https://github.com/gentleokhai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-medium hover:text-indigo-800 transition duration-300"
                    >
                      View Code
                    </a>
                    <a 
                      href="#" 
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
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Client Testimonials</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say about working with me.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Services I Offer</h2>
            <div className="w-24 h-1 bg-white mx-auto mt-4 mb-8"></div>
            <p className="max-w-2xl mx-auto opacity-90">
              I provide comprehensive web development solutions tailored to meet your specific needs and business goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Web Application Development</h3>
              <p className="opacity-90">
                Custom web applications designed and developed to meet your specific business requirements, with a focus on performance, scalability, and user experience.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Responsive Web Design</h3>
              <p className="opacity-90">
                Beautiful and functional websites that work seamlessly across all devices and screen sizes, ensuring an optimal viewing experience for your users.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Database Design & Development</h3>
              <p className="opacity-90">
                Efficient database architecture and implementation to ensure your applications handle data securely, reliably, and with optimal performance.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm"
              variants={fadeInUp}
            >
              <div className="bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">API Development & Integration</h3>
              <p className="opacity-90">
                Custom API development and third-party API integration to connect your applications with external services and enhance functionality.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm"
              variants={fadeInUp}
            >
              <div className="bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Optimization</h3>
              <p className="opacity-90">
                Improvement of website and application performance through code optimization, caching strategies, and other best practices.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm"
              variants={fadeInUp}
            >
              <div className="bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Technical Consulting & Writing</h3>
              <p className="opacity-90">
                Expert advice on technology choices, architecture decisions, and documentation to ensure your projects are built on a solid technical foundation.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-opacity-90 transition duration-300"
            >
              Get a Free Consultation
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Me Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Me?</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I bring a unique combination of technical expertise, creative problem-solving, and professional work ethic to every project.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              className="flex"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mr-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  I'm committed to delivering high-quality code that is clean, well-documented, and thoroughly tested to ensure reliability and maintainability.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mr-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">On-Time Delivery</h3>
                <p className="text-gray-600">
                  I respect deadlines and manage my time effectively to ensure projects are completed within the agreed timeframe without compromising quality.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mr-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Responsive Communication</h3>
                <p className="text-gray-600">
                  I maintain clear and prompt communication throughout the project, keeping you informed about progress and addressing any concerns quickly.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mr-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Innovative Solutions</h3>
                <p className="text-gray-600">
                  I approach each project with creative thinking and technical expertise to develop innovative solutions that meet your business objectives.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mr-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Performance Focused</h3>
                <p className="text-gray-600">
                  I prioritize application performance and optimization, ensuring your web applications load quickly and run smoothly for the best user experience.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mr-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Collaborative Approach</h3>
                <p className="text-gray-600">
                  I work closely with clients, designers, and other stakeholders to ensure the final product aligns perfectly with your vision and requirements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Get In Touch</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to transform your idea into reality? Let's discuss your project and explore how I can help you achieve your goals.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-10">
            <motion.div 
              className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800 font-medium">contact@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-800 font-medium">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-800 font-medium">San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-colors"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 outline-none transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-bold">Portfolio</a>
              <p className="text-gray-400 mt-2">Creating exceptional web experiences</p>
            </div>
            
            <div className="flex space-x-8">
              <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
              <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;