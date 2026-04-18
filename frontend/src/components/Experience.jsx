import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Associate Instructor',
      company: 'PHN Technology',
      period: 'Current',
      description: 'Helping learners understand concepts related to technology, design, and data. Facilitating interactive learning sessions and providing mentorship on UI/UX design principles.',
      skills: ['Teaching', 'Mentorship', 'UI/UX', 'Technology'],
    },
    {
      title: 'Head of Design',
      company: 'ADM Education and Society Welfare NGO',
      period: 'Previous',
      description: 'Promoted to Head of Design within two months. Led design initiatives, managed cross-functional collaboration, and drove design strategy for enhanced user engagement and accessibility.',
      skills: ['Leadership', 'Design Strategy', 'Team Management', 'Stakeholder Communication'],
    },
    {
      title: 'UI/UX Designer',
      company: 'ADM Education and Society Welfare NGO',
      period: 'Previous',
      description: 'Designed and improved website interfaces to enhance accessibility and user engagement. Conducted user research, feedback analysis, and collaborated with cross-functional teams to create intuitive user experiences.',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Figma', 'User Testing'],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Experience
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 md:pl-12 pb-12 transition-all duration-500 delay-${index * 100} transform ${
                  inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[11px] md:left-[19px] top-12 bottom-0 w-0.5 bg-gray-300"></div>
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-2 top-2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-orange-500 font-semibold mb-2">
                        <Briefcase size={18} />
                        <span style={{ fontFamily: 'Inter, sans-serif' }}>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={18} />
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium hover:bg-orange-100 transition-colors duration-300"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {skill}
                      </span>
                    ))}
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

export default Experience;