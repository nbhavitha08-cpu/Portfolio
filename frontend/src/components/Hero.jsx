import React, { useEffect, useState } from 'react';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* 3D Floating Shapes */}
      <div 
        className="absolute top-20 right-10 w-72 h-72 bg-orange-100 rounded-full opacity-20 blur-3xl animate-float"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-orange-50 rounded-full opacity-30 blur-3xl animate-float-delayed"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      ></div>

      {/* 3D Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 border-4 border-orange-300 rotate-45 animate-spin-slow opacity-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-orange-200 rounded-lg animate-bounce-slow opacity-20"></div>
      <div className="absolute top-1/2 right-1/3 w-12 h-12 border-4 border-orange-400 rounded-full animate-pulse opacity-15"></div>

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Small intro text */}
          <p className="text-orange-500 font-semibold mb-4 tracking-wider uppercase text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Bhavitha Naramamidi
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-8 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
            UI/UX Designer & Product Thinker
          </h2>

          {/* Short Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Creating intuitive and user-centered digital experiences through thoughtful design and data-driven insights.
          </p>

          {/* CTA Buttons with 3D Effects */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('projects')}
              className="btn-3d bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="btn-3d border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/bhavitha-naramamidi-041979297"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nbhavitha04@gmail.com"
              className="text-gray-700 hover:text-orange-500 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-orange-500 transition-all duration-300 animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;