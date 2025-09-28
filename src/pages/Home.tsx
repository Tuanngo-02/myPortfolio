import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, ExternalLink, Mail, User, Code, Briefcase, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Header Component
  const Header = () => (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-500">
            Your Name
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="flex flex-col py-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left px-6 py-3 text-gray-700 hover:text-blue-500 hover:bg-gray-50 font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );

  // Hero Section Component
  const Hero = () => (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Hi, I'm{' '}
              <span className="text-blue-500">Your Name</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl">
                Web Developer & Designer
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              I create beautiful, responsive web applications with modern technologies. 
              Passionate about clean code and exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Hire Me
              </button>
              <button className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-white transform hover:scale-105 transition-all duration-200">
                Download CV
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-8xl font-light shadow-2xl hover:scale-105 transition-transform duration-300">
              YN
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // About Section Component
  const About = () => (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 relative">
          About Me
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a passionate web developer with 5+ years of experience creating digital solutions 
              that make a difference. I specialize in modern web technologies and love turning 
              complex problems into simple, beautiful designs.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'TypeScript', 'UI/UX Design', 'MongoDB', 'Tailwind CSS'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="text-blue-500" size={20} />
              Experience Timeline
            </h3>
            <div className="space-y-6">
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="text-sm text-blue-500 font-semibold">2021 - Present</div>
                <div className="font-semibold">Senior Frontend Developer</div>
                <div className="text-gray-600 text-sm">Tech Company Inc.</div>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="text-sm text-gray-500 font-semibold">2019 - 2021</div>
                <div className="font-semibold">Full Stack Developer</div>
                <div className="text-gray-600 text-sm">StartUp Solutions</div>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="text-sm text-gray-500 font-semibold">2017 - 2019</div>
                <div className="font-semibold">Computer Science Degree</div>
                <div className="text-gray-600 text-sm">University Name</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Projects Section Component
  const Projects = () => {
    const projects = [
      {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: '#',
        demo: '#'
      },
      {
        title: 'Task Management App',
        description: 'A collaborative task management tool with real-time updates and team features.',
        tech: ['Vue.js', 'Firebase', 'Tailwind'],
        github: '#',
        demo: '#'
      },
      {
        title: 'Portfolio Website',
        description: 'A responsive portfolio website showcasing modern web development practices.',
        tech: ['React', 'Tailwind', 'Framer Motion'],
        github: '#',
        demo: '#'
      },
      {
        title: 'Weather Dashboard',
        description: 'A beautiful weather application with location-based forecasts and charts.',
        tech: ['JavaScript', 'Chart.js', 'API'],
        github: '#',
        demo: '#'
      }
    ];

    return (
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 relative">
            Featured Projects
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Code className="text-white" size={64} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Skills Section Component
  const Skills = () => {
    const skills = [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'UI/UX Design', level: 75 },
      { name: 'MongoDB', level: 70 }
    ];

    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 relative">
            Skills & Technologies
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-blue-500 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Contact Section Component
  const Contact = () => (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 relative">
          Get In Touch
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's work together!</h3>
            <p className="text-gray-600 mb-8 text-lg">
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate!
            </p>
            
            <div className="flex gap-6">
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full hover:bg-gray-900 transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-12 h-12 bg-blue-400 text-white rounded-full hover:bg-blue-500 transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <form className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © 2024 Your Name - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="font-inter">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;