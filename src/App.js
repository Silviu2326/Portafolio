import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects /> {/* Aquí se renderiza la sección de Proyectos */}
      <Languages />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
