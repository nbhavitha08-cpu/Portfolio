import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-3d" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              About Me
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed perspective-container" style={{ fontFamily: 'Inter, sans-serif' }}>
            <p className="perspective-text">
              I am a <span className="font-semibold text-gray-900">UI/UX Designer</span> with a background in Information Technology from the{' '}
              <span className="font-semibold text-gray-900">National Institute of Technology Karnataka (NITK)</span>, passionate about creating intuitive and user-centered digital experiences.
            </p>

            <p className="perspective-text">
              My academic journey has helped me develop a strong foundation in design thinking, data analysis, and problem-solving, along with technical skills in Figma, SQL, Python, and HTML/CSS. I am particularly interested in understanding user behavior and transforming complex problems into simple, meaningful product experiences through thoughtful design and technology.
            </p>

            <p className="perspective-text">
              Previously, I worked as a <span className="font-semibold text-orange-500">UI/UX Designer</span> at{' '}
              <span className="font-semibold text-gray-900">ADM Education and Society Welfare NGO</span>, where I designed and improved website interfaces to enhance accessibility and user engagement. Through user research, feedback analysis, and collaboration with cross-functional teams, I contributed to creating intuitive and seamless user experiences and was promoted to{' '}
              <span className="font-semibold text-orange-500">Head of Design</span> within two months for demonstrating strong ownership and leadership.
            </p>

            <p className="perspective-text">
              Currently, I am working as an <span className="font-semibold text-gray-900">Associate Instructor at PHN Technology</span>, where I help learners understand concepts related to technology and design. Looking ahead, I aim to continue growing as a UI/UX and product-focused designer, combining my technical background with design expertise to build impactful, data-driven digital products that improve real-world user experiences.
            </p>
          </div>

          {/* 3D Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 perspective-container">
            <div className="text-center p-6 bg-gray-50 rounded-2xl stat-card-3d card-3d-shadow">
              <h3 className="text-4xl font-bold text-orange-500 mb-2 text-3d" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                1+
              </h3>
              <p className="text-gray-700 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                Years Experience
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl stat-card-3d card-3d-shadow">
              <h3 className="text-4xl font-bold text-orange-500 mb-2 text-3d" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                5+
              </h3>
              <p className="text-gray-700 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                Projects Completed
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl stat-card-3d card-3d-shadow">
              <h3 className="text-4xl font-bold text-orange-500 mb-2 text-3d" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                NITK
              </h3>
              <p className="text-gray-700 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                Graduate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;