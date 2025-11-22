import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import Skills from '../components/Skills';
import FunProjects from '../components/FunProjects';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectsSection />
      <FunProjects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
