import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar, Code } from 'lucide-react';
import './Experience.css';

const Experience = () => {
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

  const experiences = [
    {
      title: "Desarrollador Frontend",
      company: "Orange",
      period: "Enero 2024 - Mayo 2024",
      description: "En Orange, formé parte de un equipo dedicado a la creación y mantenimiento de aplicaciones web interactivas. Utilicé React para desarrollar interfaces de usuario dinámicas y responsivas, asegurando una experiencia de usuario fluida. También colaboré estrechamente con el equipo de diseño para implementar componentes reutilizables y optimizar el rendimiento de la aplicación.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Git", "Agile"]
    },
    {
      title: "Desarrollador Full Stack",
      company: "Freelance",
      period: "Junio 2023 - Diciembre 2023, Mayo 2024 - Actualidad",
      description: "Como freelance, trabajé en diversos proyectos para clientes de diferentes sectores. Desarrollé aplicaciones completas utilizando tecnologías como Node.js, Express y MongoDB en el backend, y React en el frontend. Mi rol incluyó desde la planificación y diseño hasta la implementación y el despliegue, siempre buscando entregar productos de alta calidad que cumplieran con los requisitos del cliente.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "UI/UX", "Responsive Design"]
    }
  ];

  return (
    <section ref={sectionRef} className="experience">
      <h2>Experiencia</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-item-content">
              <h3>
                <Briefcase size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                {exp.title} - {exp.company}
              </h3>
              <p className="date">
                <Calendar size={16} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                {exp.period}
              </p>
              <p>{exp.description}</p>
              <div className="tech-tags">
                {exp.technologies.map((tech, techIndex) => (
                  <span className="tech-tag" key={techIndex}>
                    <Code size={14} />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;