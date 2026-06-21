import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
      </main>
      <Contact />
    </div>
  );
};

export default Home;
