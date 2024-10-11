import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Languages />
        <Interests />
      </main>
      <Footer />
    </div>
  );
}

export default App;