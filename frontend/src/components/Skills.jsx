import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Palette, Figma, Users, FileText, Sparkles, BarChart, Layout, Layers, Target, Zap } from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      category: 'Design Tools',
      skills: [
        { name: 'Figma', icon: <Figma size={24} />, level: 95 },
        { name: 'Prototyping', icon: <Layers size={24} />, level: 90 },
        { name: 'Wireframing', icon: <Layout size={24} />, level: 92 },
      ],
    },
    {
      category: 'UX Research',
      skills: [
        { name: 'User Research', icon: <Users size={24} />, level: 88 },
        { name: 'User Testing', icon: <Target size={24} />, level: 85 },
        { name: 'User Personas', icon: <FileText size={24} />, level: 90 },
      ],
    },
    {
      category: 'Design Skills',
      skills: [
        { name: 'Design Thinking', icon: <Sparkles size={24} />, level: 90 },
        { name: 'Visual Design', icon: <Palette size={24} />, level: 87 },
        { name: 'Interaction Design', icon: <Zap size={24} />, level: 85 },
      ],
    },
    {
      category: 'Technical Skills',
      skills: [
        { name: 'HTML/CSS', icon: <Layout size={24} />, level: 80 },
        { name: 'Data Analytics', icon: <BarChart size={24} />, level: 75 },
      ],
    },
  ];

  const softSkills = [
    'User-Centered Design',
    'Journey Mapping',
    'Information Architecture',
    'Design Systems',
    'Accessibility',
    'Responsive Design',
    'Collaboration',
    'Problem Solving',
    'Critical Thinking',
    'Communication',
  ];

  return (
    <section id="skills" className="py-24 bg-white">
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Skill Categories with 3D Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 perspective-container">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`bg-gray-50 rounded-2xl p-8 card-3d card-3d-shadow transition-all duration-500 delay-${catIndex * 100} transform ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="text-orange-500 icon-float">{skill.icon}</div>
                          <span className="font-semibold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-600 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="skill-bar-3d bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            transitionDelay: `${catIndex * 100 + skillIndex * 150}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills with 3D Effects */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Additional Competencies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`px-6 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-800 font-medium hover:border-orange-500 hover:text-orange-500 transition-all duration-300 shadow-sm hover:shadow-md cursor-default card-3d delay-${index * 50} transform ${
                    inView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-5 opacity-0 scale-95'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', transitionDelay: `${index * 50}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
