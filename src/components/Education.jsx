import React, { useEffect, useRef } from 'react';
import './Education.css';

const Education = () => {
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
    <section ref={sectionRef} className="education">
      <h2>Educación</h2>
      <div className="education-grid">
        <div className="education-item">
          <h3>Grado Medio en Sistemas Microinformáticos y Redes</h3>
          <p className="institution">AulaCampus</p>
          <p className="date">2020 - 2022</p>
          <p>
            Durante mi formación en AulaCampus, adquirí conocimientos fundamentales en sistemas informáticos, redes, y desarrollo de software. Este grado me proporcionó una base sólida en tecnologías clave y me preparó para afrontar desafíos técnicos en el mundo laboral.
          </p>
        </div>
        <div className="education-item">
          <h3>Formación Autodidacta</h3>
          <p className="institution">Aprendizaje Continuo</p>
          <p>
            De manera autodidacta, he aprendido a programar en Python, Node.js y React a través de cursos en línea, videos tutoriales y la práctica constante. Este enfoque me ha permitido profundizar en estas tecnologías a mi propio ritmo, desarrollando proyectos personales y resolviendo problemas reales, lo que me ha brindado una comprensión sólida y práctica de cada una de ellas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;