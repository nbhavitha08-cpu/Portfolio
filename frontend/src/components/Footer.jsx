import React from 'react';
import { Linkedin, Mail, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Bhavitha Naramamidi
            </h3>
            <p className="text-gray-400 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              UI/UX Designer crafting intuitive and user-centered digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Connect
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/bhavitha-naramamidi-041979297"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:bhavitha@example.com"
                className="bg-gray-800 p-3 rounded-lg hover:bg-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            © {currentYear} Bhavitha Naramamidi. Made with <Heart size={16} className="text-orange-500" /> and passion.
          </p>
          <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Designed & Built by Bhavitha Naramamidi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;