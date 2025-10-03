import "./App.css";
import { useState, useEffect } from "react";
import { Menu, X, Github, ExternalLink, Briefcase } from "lucide-react";
import { ReactTyped } from "react-typed";
import ava from "./assets/images/avatar.png";
import flic from "./assets/images/flic.png";
import medicine_image from "./assets/images/Medicine-api.png";
import exam from "./assets/images/Exam.png";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { SiSwagger } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import AOS from "aos";
import ThemeToggle from "./pages/ThemeToggle";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once: true => chỉ chạy 1 lần
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  const Header = () => (
    <header
      className={`fixed top-0 w-full z-50 dark:bg-black transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold text-blue-500">
            {"{{Ngo Thanh Tuan}}"}
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-blue-500 hover:border-b-3 font-medium transition-colors duration-200 text-lg"
              >
                {item}
              </button>
            ))}
            <ThemeToggle/>
          </nav>
                          


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-black dark:text-gray-100 hover:bg-white/15 transition-colors cursor-pointer"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden dark:bg-black absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="flex flex-col py-4">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left px-6 py-3 text-gray-700 hover:text-blue-500 hover:border-b-3 hover:bg-white/15 font-medium transition-colors duration-200"
                  >
                    {item}
                  </button>
                )
              )}
              <ThemeToggle/>
            </nav>
                            

          </div>
        )}
      </div>
    </header>
  );
  const Hero = () => (
    <section id="home" className="dark:bg-black min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6"
            >
              Hi, I'm{" "}
              <div className="text-blue-500 mb-2">
                <ReactTyped
                  strings={["Ngo Thanh Tuan"]}
                  typeSpeed={75}
                  backSpeed={50}
                  backDelay={1500}
                  loop
                  showCursor={true}
                  cursorChar="|"
                />
              </div>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl dark:text-blue-300">
                FullStack Developer
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Success is not a destination, but a journey of continuous effort
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
                onClick={() => scrollToSection("contact")}
              >
                Hire Me
              </button>
              <button
                className="border-2 border-gray-800 text-gray-800 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-white transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/14DF6fk0lw3CATLdt50AK8e2aWGLh0x5p?usp=sharingf",
                    "_blank"
                  )
                }
              >
                Download CV
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-8xl font-light shadow-2xl hover:scale-105 transition-transform duration-300"
              src={ava}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
  const About = () => (
    <section id="about" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10 sm:mb-16 relative">
          About Me
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="lg:col-span-2 ">
            <p className="text-base sm:text-lg text-gray-700 dark:text-white mb-2 leading-relaxed">
              I am a final-year student at the Faculty of Computer Science,
              Vietnam – Korea University of Information and Communication
              Technology (VKU)
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-2xl text-blue-500 ">
                <FaRegPaperPlane />
              </div>
              <div className="text-base sm:text-lg text-gray-700 dark:text-white">
                <p className="font-semibold">
                  Major:
                  <span className="font-normal"> Software Engineering</span>
                </p>
                <p className="font-semibold">
                  GPA:
                  <span className="font-normal"> 3.3/4.0</span>
                </p>
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed dark:text-white">
              I enjoy learning new technologies, solving real-world problems,
              and continuously improving my coding skills. My goal is to become
              a full-stack developer, contributing to impactful projects and
              growing alongside a professional team.
            </p>
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 dark:text-white">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "HTML/CSS",
                  "React",
                  "TypeScript",
                  "UI/UX Design",
                  "Java",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="text-blue-500" size={20} />
              Experience Timeline
            </h3>
            <div className="space-y-6">
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="text-sm text-blue-500 font-semibold">
                  2025/7 - 2025/9
                </div>
                <div className="font-semibold">Frontend Developer</div>
                <div className="text-gray-600 text-sm">
                  Foreign languages - Information Center VKU.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  const Skills = () => {
    const tools = [
      {
        name: "Visual Studio Code",
        category: "Code Editor",
        icon: <BiLogoVisualStudio className="text-blue-400" size={30} />,
      },
      {
        name: "React JS",
        category: "Framework",
        icon: <FaReact className="text-cyan-400" size={30} />,
      },
      {
        name: "Tailwind CSS",
        category: "Framework",
        icon: <SiTailwindcss className="text-sky-400" size={30} />,
      },
      {
        name: "Bootstrap",
        category: "Framework",
        icon: <FaBootstrap className="text-purple-500" size={30} />,
      },
      {
        name: "JavaScript",
        category: "Language",
        icon: <SiJavascript className="text-yellow-400" size={30} />,
      },
      {
        name: "Node JS",
        category: "JavaScript Runtime",
        icon: <FaNodeJs className="text-green-500" size={30} />,
      },
      {
        name: "GitHub",
        category: "Repository",
        icon: <FaGithub className="text-black" size={30} />,
      },
      {
        name: "Figma",
        category: "Design App",
        icon: <FaFigma className="text-pink-400" size={30} />,
      },
      {
        name: "Java",
        category: "Language",
        icon: <FaJava className="text-red-500" size={30} />,
      },
      {
        name: "HTML5",
        category: "Language",
        icon: <FaHtml5 className="text-orange-500" size={30} />,
      },
      {
        name: "Flutter",
        category: "Framework",
        icon: <FaFlutter className="text-blue-400" size={30} />,
      },
      {
        name: "Postman",
        category: "API Testing",
        icon: <SiPostman className="text-orange-400" size={30} />,
      },
      {
        name: "Swagger",
        category: "API Documentation",
        icon: <SiSwagger className="text-green-700" size={30} />,
      },
      {
        name: "Vercel",
        category: "Deployment",
        icon: <IoLogoVercel className="text-black" size={30} />,
      },
      {
        name: "Python",
        category: "Language",
        icon: <FaPython className="text-blue-800" size={30} />,
      },
    ];

    return (
      <section id="skills" className="py-10 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10 sm:mb-16 relative">
            Tools & Technologies
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
            {tools.map((tool, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div>{tool.icon}</div>
                <div>
                  <h3 className="text-black dark:text-white text-base sm:text-xl font-semibold">
                    {tool.name}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-300 text-xs sm:text-md">{tool.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  const Projects = () => {
    const projects = [
      {
        id: 1,
        image: flic,
        title: "FLIC Information and Management System",
        description:
          "A website that introduces courses, exam schedules, news, and student sharing, while also managing students and teachers of the Center for Foreign Languages and Informatics at VKU.",
        tech: ["React", "Java (Spring boot)", "MySql", "Tailwind"],
        date: "2025/7 - 2025/9",
        github: "#",
        demo: "https://drive.google.com/file/d/1U5Rj8WvE985q8Kvp1Dm3Qrg4LpBx0t8s/view?usp=sharing",
      },
      {
        id: 2,
        title: "MEDICINE SERVICE API",
        image: medicine_image,
        description:
          "Developed a RESTful Medicine Service API that manages medicines, users, orders, categories and prescriptions with secure JWT authentication and support for payment via API gateway VNPAY.",
        tech: [
          "Spring boot",
          "Spring security",
          "Lombok",
          "MySql",
          "JWT",
          "Docker",
          "Swagger",
        ],
        date: "2024/11 - 2025/1",
        github: "https://github.com/Tuanngo-02/Medicine-Service-API",
        demo: "https://github.com/Tuanngo-02/Medicine-Service-API",
      },
      {
        id: 3,
        image: exam,
        title: "ONLINE TEST PROGRAM",
        description:
          "Built an online testing system using the Client-Server model over LAN with UDP, supporting multi-client exam delivery, real-time response collection, and automated grading.",
        tech: ["Java Swing", "JDBC", "MySql"],
        github: "https://github.com/Tuanngo-02/ExamTest_UDP",
        date: "2023/10 - 2023/12",
        demo: "https://www.youtube.com/watch?v=nBCo-Ogp3yA",
      },
    ];

    return (
      <section id="projects" className="py-10 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10 sm:mb-16 relative">
            Featured Projects
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 h-full shadow-lg shadow-purple-500/50"></div>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="relative flex flex-col md:flex-row items-center w-full mb-10 md:mb-16"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full z-10 shadow-lg shadow-purple-500/50 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div 
                    className={`flex items-center mb-4 ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className="flex items-center bg-gradient-to-r bg-blue-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      <IoCalendarOutline className="w-4 h-4 mr-2" />
                      {project.date}
                    </div>
                  </div>
                  <div className="bg-white backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-gray-500/20 transition-all duration-300 p-4 sm:p-8 border border-gray-700 hover:border-gray-500/50 group">
                    <div className="text-center mb-4">
                      <img
                        className="w-full max-w-xs mx-auto text-4xl mr-4 group-hover:scale-110 transition-transform duration-300"
                        src={project?.image}
                        alt={project.title}
                      />
                      <div className="flex-1 mt-3">
                        <h3 className="text-xl sm:text-3xl font-bold text-blue-700 mb-2 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-500 mb-6 leading-relaxed text-xs sm:text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-white text-black border-gray-800 rounded-lg text-xs font-medium border hover:bg-gray-600 hover:text-white transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <a
                        href={project.demo}
                        className="flex items-center px-4 py-2 bg-gradient-to-r bg-blue-500 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-600 transition-all shadow-lg hover:shadow-purple-500/25"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-800 hover:text-white transition-all border border-slate-600 hover:border-gray-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  const Contact = () => (
    <section id="contact" className="py-10 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10 sm:mb-16 relative">
          Get In Touch
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div data-aos="zoom-in-up">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 dark:text-white">
              Let's work together!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-base sm:text-lg">
              I'm always interested in new opportunities and exciting projects.
              Feel free to reach out if you'd like to collaborate!
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="https://www.linkedin.com/in/thanh-tu%E1%BA%A5n-ng%C3%B4-082555257/"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <CiLinkedin size={20} />
              </a>
              <a
                href="https://github.com/Tuanngo-02"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 text-white rounded-full hover:bg-gray-900 transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.facebook.com/ngo.thanhhtuan"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 text-white rounded-full hover:bg-blue-500 transform hover:scale-110 transition-all duration-200 shadow-lg"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
          <form data-aos="fade-down-left" className="bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white dark:bg-gray-900 dark:text-white"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white dark:bg-gray-900 dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none bg-white dark:bg-gray-900 dark:text-white"
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
            © 2025 Ngo Thanh Tuan - All Rights Reserved
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
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
