import React, { useEffect, useRef } from 'react';
import { Cpu, Book, Briefcase } from 'lucide-react';
import './Interests.css';

const Interests = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="interests">
      <h2>Intereses</h2>
      <p className="interests-description">
        Me apasiona la tecnología, la inteligencia artificial, y el desarrollo de software. En mi tiempo libre, disfruto aprendiendo sobre nuevas tecnologías, leyendo libros de ciencia ficción, y explorando el mundo de los negocios.
      </p>
      <div className="interests-icons">
        <div className="interest-item">
          <Cpu className="interest-icon" />
          <p>IA</p>
        </div>
        <div className="interest-item">
          <Book className="interest-icon" />
          <p>Leer</p>
        </div>
        <div className="interest-item">
          <Briefcase className="interest-icon" />
          <p>Negocios</p>
        </div>
      </div>
    </section>
  );
};

export default Interests;