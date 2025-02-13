import React, { useEffect, useRef } from 'react';
import { Linkedin, Github, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const parallaxContainer = parallaxRef.current;
    
    // Intersection Observer para la animación de entrada
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          header.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (header) {
      observer.observe(header);
    }

    // Efecto Parallax
    const handleMouseMove = (e) => {
      if (!parallaxContainer) return;
      
      const { left, top, width, height } = parallaxContainer.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const moveX = (x - 0.5) * 30;
      const moveY = (y - 0.5) * 30;
      
      parallaxContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    // Crear partículas mejoradas
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      const x = Math.random() * window.innerWidth;
      const startY = window.innerHeight + 10;
      
      particle.style.left = `${x}px`;
      particle.style.top = `${startY}px`;
      
      const duration = 3000 + Math.random() * 3000;
      const delay = Math.random() * 2000;
      
      particle.style.animation = `particleAnimation ${duration}ms ${delay}ms linear`;
      
      header.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, duration + delay);
    };

    const particleInterval = setInterval(createParticle, 150);

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      clearInterval(particleInterval);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = headerRef.current.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-content" ref={parallaxRef}>
        <h1 className="name">Silviu Oprescu</h1>
        <h2 className="title">Desarrollador Web</h2>
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/silviuoprescu/" 
            target="_blank" 
            rel="noreferrer"
            className="social-link"
            aria-label="Visita mi perfil de LinkedIn"
          >
            <Linkedin className="icon" /> LinkedIn
          </a>
          <a 
            href="https://github.com/silviu-oprescu" 
            target="_blank" 
            rel="noreferrer"
            className="social-link"
            aria-label="Visita mi perfil de GitHub"
          >
            <Github className="icon" /> GitHub
          </a>
        </div>
      </div>
      <button 
        className="scroll-indicator" 
        onClick={scrollToNextSection}
        aria-label="Desplázate hacia abajo"
      >
        <ChevronDown className="scroll-icon" />
      </button>
    </header>
  );
};

export default Header;