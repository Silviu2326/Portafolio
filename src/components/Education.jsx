import React, { useEffect, useRef } from 'react';
import { BookOpen, Code, Calendar, ExternalLink } from 'lucide-react';
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
        rootMargin: '-50px',
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

  const educationData = [
    {
      title: "Grado Medio en Sistemas Microinformáticos y Redes",
      institution: "AulaCampus",
      date: "2020 - 2022",
      description: "Durante mi formación en AulaCampus, adquirí conocimientos fundamentales en sistemas informáticos, redes, y desarrollo de software. Este grado me proporcionó una base sólida en tecnologías clave y me preparó para afrontar desafíos técnicos en el mundo laboral.",
      skills: ["Sistemas Informáticos", "Redes", "Desarrollo de Software", "Hardware", "Seguridad"],
      url: "https://www.aulacampus.es/"
    },
    {
      title: "Formación Autodidacta",
      institution: "Aprendizaje Continuo",
      description: "De manera autodidacta, he aprendido a programar en Python, Node.js y React a través de cursos en línea, videos tutoriales y la práctica constante. Este enfoque me ha permitido profundizar en estas tecnologías a mi propio ritmo, desarrollando proyectos personales y resolviendo problemas reales.",
      skills: ["Python", "Node.js", "React", "JavaScript", "Git", "UI/UX"],
      platforms: [
        { name: "Udemy", url: "https://www.udemy.com/" },
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
        { name: "MDN Web Docs", url: "https://developer.mozilla.org/" }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="education" aria-label="Educación">
      <h2>Educación</h2>
      <div className="education-grid">
        {educationData.map((item, index) => (
          <article 
            className="education-item" 
            key={index}
            role="article"
            aria-labelledby={`education-title-${index}`}
          >
            <h3 id={`education-title-${index}`}>
              {item.title}
              {item.url && (
                <a 
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${item.institution}`}
                  style={{ marginLeft: '10px', color: '#64ffda' }}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </h3>
            <p className="institution">
              <BookOpen size={18} aria-hidden="true" />
              {item.institution}
            </p>
            {item.date && (
              <p className="date">
                <Calendar size={14} aria-hidden="true" />
                {item.date}
              </p>
            )}
            <p>{item.description}</p>
            
            {item.platforms && (
              <div className="platforms" style={{ marginTop: '15px' }}>
                <p style={{ color: '#ccd6f6', marginBottom: '8px' }}>Plataformas de aprendizaje:</p>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {item.platforms.map((platform, pIndex) => (
                    <a
                      key={pIndex}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        color: '#64ffda',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '0.9em'
                      }}
                      aria-label={`Visitar ${platform.name}`}
                    >
                      {platform.name}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="skills-container">
              {item.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="skill-tag"
                  role="listitem"
                >
                  <Code size={14} aria-hidden="true" />
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;