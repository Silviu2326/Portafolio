import React, { useEffect, useRef } from 'react';
import './Languages.css';

const Languages = () => {
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
    <section ref={sectionRef} className="languages">
      <h2>Idiomas</h2>
      <div className="languages-container">
        <div className="language-item">
          <img src="https://flagcdn.com/w40/es.png" alt="Spanish flag" className="flag" />
          <div className="language-info">
            <h3>Español</h3>
            <p className="level">Nativo</p>
          </div>
        </div>
        <div className="language-item">
          <img src="https://flagcdn.com/w40/gb.png" alt="English flag" className="flag" />
          <div className="language-info">
            <h3>Inglés</h3>
            <p className="level">Avanzado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;