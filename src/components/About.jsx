import React, { useEffect, useRef, useState } from 'react';
import { Code2, Terminal, Layout, GitBranch, Monitor, Cpu } from 'lucide-react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    { name: 'React', icon: <Code2 size={18} /> },
    { name: 'JavaScript', icon: <Terminal size={18} /> },
    { name: 'Node.js', icon: <Cpu size={18} /> },
    { name: 'HTML5', icon: <Layout size={18} /> },
    { name: 'CSS3', icon: <Monitor size={18} /> },
    { name: 'UI/UX Design', icon: <Layout size={18} /> },
    { name: 'Git', icon: <GitBranch size={18} /> },
    { name: 'Responsive Design', icon: <Monitor size={18} /> }
  ];

  return (
    <section ref={sectionRef} className="about">
      <div className="about-container">
        <h2 className="section-title">
          <span className="title-number">01.</span> Sobre mí
        </h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              ¡Hola! Soy un <span className="highlight">programador de 21 años</span> con experiencia 
              trabajando para <span className="highlight">Orange</span> y como desarrollador freelance. 
              A lo largo de mi carrera, he tenido la oportunidad de trabajar con múltiples tecnologías 
              como React, Node.js, y diseño UI/UX.
            </p>
            <p>
              Soy una persona apasionada por la tecnología, con mucha actitud y ganas de aprender y 
              enfrentar nuevos desafíos. Mi motivación se refleja en mi trabajo diario, y siempre busco 
              la mejor manera de contribuir al éxito de los proyectos en los que participo.
            </p>
            <p>
              Estoy listo para seguir creciendo como profesional y aportar mi conocimiento y 
              entusiasmo a cualquier equipo.
            </p>
          </div>

          <div className="skills-container">
            <h3>Tecnologías con las que trabajo:</h3>
            <div className="tech-stack">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="tech-item"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  <span className="tech-icon">{tech.icon}</span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="background-decoration">
        <div className="circle"></div>
        <div className="square"></div>
        <div className="triangle"></div>
      </div>
    </section>
  );
};

export default About;