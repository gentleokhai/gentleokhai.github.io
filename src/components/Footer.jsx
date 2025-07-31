import React from "react";
import { Linkedin, Github, Mail, ExternalLink, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 md:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Information */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold text-white tracking-tight inline-flex items-center">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">Portfolio</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Delivering innovative digital solutions and exceptional user experiences that drive business growth and transform ideas into reality.
            </p>
            <div className="flex items-center space-x-5 pt-3">
              <a href="https://www.linkedin.com/in/gentle235" className="hover:text-blue-400 transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/gentleokhai" className="hover:text-purple-400 transition-colors duration-300" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:gentleokhaix@gmail.com" className="hover:text-red-400 transition-colors duration-300" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-8 sm:mt-0">
            <h3 className="font-semibold text-white text-lg mb-5 pb-1 border-b border-gray-800 inline-block">Navigation</h3>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-indigo-500 opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mt-8 lg:mt-0">
            <h3 className="font-semibold text-white text-lg mb-5 pb-1 border-b border-gray-800 inline-block">Contact</h3>
            <address className="not-italic text-gray-400 space-y-3 text-sm">
              <p className="flex items-start">
                <span className="inline-block w-20 font-medium text-gray-300">Address:</span>
                <span>Lagos, Nigeria</span>
              </p>
              <p className="flex items-center">
                <span className="inline-block w-20 font-medium text-gray-300">Phone:</span>
                <a href="tel:+2349065070051" className="hover:text-white transition-colors">+234 906 507 0051</a>
              </p>
              <p className="flex items-center">
                <span className="inline-block w-20 font-medium text-gray-300">Email:</span>
                <a href="mailto:gentleokhaix@gmailcom" className="hover:text-white transition-colors">gentleokhaix@gmail.com</a>
              </p>
            </address>
            
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                Get in touch <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {currentYear} Portfolio. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              Sitemap
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;