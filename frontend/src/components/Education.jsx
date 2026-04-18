import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="education" className="py-24 bg-white">
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
              Education
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Education Card with 3D Effect */}
          <div className="max-w-3xl mx-auto perspective-container">
            <div className="education-card-3d glass-3d rounded-3xl p-8 md:p-12 border-2 border-orange-100">
              <div className="flex items-start gap-6">
                <div className="bg-orange-500 p-4 rounded-2xl shadow-lg icon-float">
                  <GraduationCap size={36} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Bachelor of Technology
                  </h3>
                  <p className="text-xl text-gray-700 mb-4 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Information Technology
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin size={20} className="text-orange-500" />
                      <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                        National Institute of Technology Karnataka (NITK)
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar size={20} className="text-orange-500" />
                      <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                        2021 - 2025
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-orange-100 card-3d">
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Developed a strong foundation in <span className="font-semibold text-gray-900">design thinking</span>,{' '}
                      <span className="font-semibold text-gray-900">problem-solving</span>, and{' '}
                      <span className="font-semibold text-gray-900">technical skills</span>. Gained expertise in UI/UX design, data analysis, and software development while working on multiple design and technology projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;