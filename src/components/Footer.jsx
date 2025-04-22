import React from "react";
import { Linkedin, Github, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Information */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold text-white tracking-tight">Portfolio</a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering innovative digital solutions and exceptional user experiences that drive business growth.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://linkedin.com" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" className="hover:text-white transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:px-4">
            <h3 className="font-semibold text-white text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-indigo-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-400 space-y-3 text-sm">
              <p>123 Business Avenue</p>
              <p>San Francisco, CA 94107</p>
              <p className="pt-2">
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </p>
              <p>
                <a href="mailto:info@portfolio.com" className="hover:text-white transition-colors">info@portfolio.com</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {currentYear} Portfolio. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-gray-500">
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