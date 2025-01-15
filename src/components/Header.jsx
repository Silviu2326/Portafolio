import React, { useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const header = document.querySelector('.header');
    header.classList.add('visible');

    // Crear partículas
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Posición aleatoria en el eje X
      const x = Math.random() * window.innerWidth;
      particle.style.left = `${x}px`;
      particle.style.bottom = '-10px';
      
      // Duración aleatoria de la animación
      const duration = 3000 + Math.random() * 2000;
      particle.style.animation = `particleAnimation ${duration}ms linear`;
      
      header.appendChild(particle);
      
      // Eliminar la partícula cuando termine la animación
      setTimeout(() => {
        particle.remove();
      }, duration);
    };

    // Crear partículas periódicamente
    const particleInterval = setInterval(createParticle, 200);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(particleInterval);
  }, []);

  return (
    <header className="header">
      <h1 className="name">Silviu Oprescu</h1>
      <h2 className="title">Desarrollador Web</h2>
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/silviuoprescu/" 
          target="_blank" 
          rel="noreferrer"
          className="social-link"
        >
          <Linkedin className="icon" /> LinkedIn
        </a>
        <a 
          href="https://github.com/silviu-oprescu" 
          target="_blank" 
          rel="noreferrer"
          className="social-link"
        >
          <Github className="icon" /> GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;