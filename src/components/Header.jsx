import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Github, ChevronDown, MapPin } from 'lucide-react';
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);
  const parallaxRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const titleText = 'Desarrollador Full Stack';
  const linkRefs = useRef([]);

  useEffect(() => {
    // Typing effect
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= titleText.length) {
        setDisplayText(titleText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

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

    // Efecto Parallax en el fondo
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (header) {
        header.style.backgroundPositionY = `${scrolled * 0.5}px`;
      }
    };

    // Magnetic buttons effect
    const magneticButtons = linkRefs.current;
    magneticButtons.forEach((btn) => {
      if (!btn) return;
      
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px) scale(1)';
      });
    });

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
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      clearInterval(particleInterval);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = headerRef.current.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const setLinkRef = (el, index) => {
    linkRefs.current[index] = el;
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="cursor-trail"></div>
      <div className="header-content" ref={parallaxRef}>
        <h1 className="name">Silviu Oprescu</h1>
        <h2 className="title typing-effect">
          <span className="typing-text">{displayText}</span>
          <span className="typing-cursor">|</span>
        </h2>
        <div className="location">
          <MapPin size={16} />
          <span>Madrid, España</span>
        </div>
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/silviuoprescu/" 
            target="_blank" 
            rel="noreferrer"
            className="social-link magnetic"
            aria-label="Visita mi perfil de LinkedIn"
            ref={(el) => setLinkRef(el, 0)}
          >
            <Linkedin className="icon" /> LinkedIn
          </a>
          <a 
            href="https://github.com/silviu-oprescu" 
            target="_blank" 
            rel="noreferrer"
            className="social-link magnetic"
            aria-label="Visita mi perfil de GitHub"
            ref={(el) => setLinkRef(el, 1)}
          >
            <Github className="icon" /> GitHub
          </a>
        </div>
      </div>
      <button 
        className="scroll-indicator magnetic" 
        onClick={scrollToNextSection}
        aria-label="Desplázate hacia abajo"
        ref={(el) => setLinkRef(el, 2)}
      >
        <ChevronDown className="scroll-icon" />
      </button>
    </header>
  );
};

export default Header;