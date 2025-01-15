import React, { useEffect, useRef } from 'react';
import { BookOpen, Code, Calendar } from 'lucide-react';
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

  const educationData = [
    {
      title: "Grado Medio en Sistemas Microinformáticos y Redes",
      institution: "AulaCampus",
      date: "2020 - 2022",
      description: "Durante mi formación en AulaCampus, adquirí conocimientos fundamentales en sistemas informáticos, redes, y desarrollo de software. Este grado me proporcionó una base sólida en tecnologías clave y me preparó para afrontar desafíos técnicos en el mundo laboral.",
      skills: ["Sistemas Informáticos", "Redes", "Desarrollo de Software", "Hardware", "Seguridad"]
    },
    {
      title: "Formación Autodidacta",
      institution: "Aprendizaje Continuo",
      description: "De manera autodidacta, he aprendido a programar en Python, Node.js y React a través de cursos en línea, videos tutoriales y la práctica constante. Este enfoque me ha permitido profundizar en estas tecnologías a mi propio ritmo, desarrollando proyectos personales y resolviendo problemas reales.",
      skills: ["Python", "Node.js", "React", "JavaScript", "Git", "UI/UX"]
    }
  ];

  return (
    <section ref={sectionRef} className="education">
      <h2>Educación</h2>
      <div className="education-grid">
        {educationData.map((item, index) => (
          <div className="education-item" key={index}>
            <h3>
              {item.title}
            </h3>
            <p className="institution">
              <BookOpen size={18} />
              {item.institution}
            </p>
            {item.date && (
              <p className="date">
                <Calendar size={14} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                {item.date}
              </p>
            )}
            <p>{item.description}</p>
            <div className="skills-container" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '20px'
            }}>
              {item.skills.map((skill, skillIndex) => (
                <span key={skillIndex} style={{
                  background: 'rgba(100, 255, 218, 0.1)',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '0.9em',
                  color: '#64ffda',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <Code size={14} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;