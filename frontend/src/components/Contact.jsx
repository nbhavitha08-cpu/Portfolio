import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast({
          title: 'Message Sent! ✓',
          description: response.data.message,
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.detail || 'Failed to send message. Please try again.';
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Let's Connect
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following channels.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <a
                  href="mailto:nbhavitha04@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                    <Mail size={24} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>Email</p>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>nbhavitha04@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/bhavitha-naramamidi-041979297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                    <Linkedin size={24} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>LinkedIn</p>
                    <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Bhavitha Naramamidi</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-900 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-900 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-orange-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;