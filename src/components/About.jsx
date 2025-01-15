import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
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

  const technologies = [
    'React', 'JavaScript', 'Node.js', 'HTML5', 'CSS3', 
    'UI/UX Design', 'Git', 'Responsive Design'
  ];

  return (
    <section ref={sectionRef} className="about">
      <h2>Sobre mí</h2>
      <div className="about-content">
        <p>
          ¡Hola! Soy un <span className="highlight">programador de 21 años</span> con experiencia 
          trabajando para <span className="highlight">Orange</span> y como desarrollador freelance. 
          A lo largo de mi carrera, he tenido la oportunidad de trabajar con múltiples tecnologías 
          como React, Node.js, y diseño UI/UX. Soy una persona apasionada por la tecnología, con 
          mucha actitud y ganas de aprender y enfrentar nuevos desafíos.
        </p>
        <p>
          Mi motivación se refleja en mi trabajo diario, y siempre busco la mejor manera de 
          contribuir al éxito de los proyectos en los que participo. Estoy listo para seguir 
          creciendo como profesional y aportar mi conocimiento y entusiasmo a cualquier equipo.
        </p>
        <div className="tech-stack">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="tech-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;