import React, { useEffect, useState, useRef } from 'react';
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
  const [loading, setLoading] = useState(true);
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef([]);

  useEffect(() => {
    // Preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Custom Cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursorRef.current = cursor;
    document.body.appendChild(cursor);

    // Cursor trail elements
    for (let i = 0; i < 8; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail-element';
      trail.style.animationDelay = `${i * 0.05}s`;
      document.body.appendChild(trail);
      cursorTrailRef.current.push(trail);
    }

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      cursorTrailRef.current.forEach((trail, index) => {
        const delay = index * 0.05;
        setTimeout(() => {
          trail.style.left = e.clientX + 'px';
          trail.style.top = e.clientY + 'px';
        }, delay * 100);
      });
    };

    // Add hover effect on interactive elements
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        cursor.classList.add('hovering');
      }
    };

    const handleMouseOut = (e) => {
      cursor.classList.remove('hovering');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      clearTimeout(timer);
      document.body.removeChild(cursor);
      const trails = cursorTrailRef.current;
      trails.forEach(trail => document.body.removeChild(trail));
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (loading) {
    return (
      <div className="preloader">
        <div className="preloader-content">
          <div className="preloader-circle"></div>
          <h1 className="preloader-name">Silviu Oprescu</h1>
          <p className="preloader-text">Cargando portafolio...</p>
        </div>
      </div>
    );
  }

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