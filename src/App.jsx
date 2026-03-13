import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certification from './components/Certification';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <div className="template-color-1 white-version">
      <Navbar />
      <main style={{ paddingTop: '70px' }}>
        <Hero />
        <About />
        <Certification />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
