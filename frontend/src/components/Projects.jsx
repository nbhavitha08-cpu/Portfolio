import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'Dwellr — Roommate Finder Mobile App',
      subtitle: 'UX Case Study',
      description: 'Designed a roommate-matching mobile application to address trust and compatibility challenges in shared living.',
      details: [
        'Conducted user research to identify key pain points and define user needs',
        'Created user personas, user journeys, wireframes, and high-fidelity prototypes using Figma',
        'Designed intuitive onboarding and profile-matching flows to enhance usability and decision-making',
      ],
      tags: ['User Research', 'Figma', 'Mobile UX', 'Prototyping', 'User Testing'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    },
    {
      title: 'PHN Technology Programs Website',
      subtitle: 'EdTech Platform Redesign',
      description: 'Redesigned the programs website for PHN Technology to improve user engagement and course discovery.',
      details: [
        'Enhanced information architecture for better course navigation',
        'Improved visual hierarchy and call-to-action placement',
        'Created responsive designs for seamless mobile experience',
      ],
      tags: ['Web Design', 'Responsive Design', 'EdTech', 'UI Design'],
      link: 'https://phntechnology.com/programs/',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    },
    {
      title: 'PHN Technology LMS Platform',
      subtitle: 'Learning Management System',
      description: 'Designed user interface for a learning management system focused on accessibility and ease of use.',
      details: [
        'Created intuitive dashboard for learners and instructors',
        'Designed course navigation and content consumption flows',
        'Implemented accessibility best practices for inclusive design',
      ],
      tags: ['LMS Design', 'Dashboard', 'Accessibility', 'User Flow'],
      link: 'https://lms.phntechnology.com/',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-3d" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Projects
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Projects Grid with 3D Effects */}
          <div className="space-y-12 perspective-container">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-card-3d bg-white rounded-3xl overflow-hidden transition-all duration-500 delay-${index * 100} transform ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section with 3D Effect */}
                  <div className="relative h-64 lg:h-full overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{ transformStyle: 'preserve-3d' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <p className="text-orange-500 font-semibold mb-2 text-sm uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {project.subtitle}
                    </p>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {project.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-3 mb-6">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <span className="text-orange-500 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 hover:scale-105"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300 group/link"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        View Project
                        <ArrowUpRight size={20} className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;