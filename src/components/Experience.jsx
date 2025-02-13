import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, Code, Building2, ExternalLink, GitBranch } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const experiences = [
    {
      title: "Desarrollador Frontend",
      company: "Orange",
      companyUrl: "https://www.orange.es",
      period: "Enero 2024 - Mayo 2024",
      description: [
        "Desarrollo de interfaces de usuario dinámicas y responsivas utilizando React y tecnologías modernas.",
        "Colaboración estrecha con el equipo de diseño para implementar componentes reutilizables.",
        "Optimización del rendimiento de aplicaciones web y mejora de la experiencia de usuario.",
        "Participación en reuniones de planificación y revisión de código con el equipo."
      ],
      technologies: [
        { name: "React", icon: <Code size={14} /> },
        { name: "JavaScript", icon: <Code size={14} /> },
        { name: "HTML5", icon: <Code size={14} /> },
        { name: "CSS3", icon: <Code size={14} /> },
        { name: "Git", icon: <GitBranch size={14} /> },
        { name: "Agile", icon: <Code size={14} /> }
      ]
    },
    {
      title: "Desarrollador Full Stack",
      company: "Freelance",
      period: "Junio 2023 - Diciembre 2023, Mayo 2024 - Actualidad",
      description: [
        "Desarrollo de aplicaciones web completas utilizando el stack MERN (MongoDB, Express, React, Node.js).",
        "Diseño e implementación de arquitecturas escalables y mantenibles.",
        "Gestión directa con clientes y planificación de proyectos.",
        "Implementación de diseños responsivos y optimización para diferentes dispositivos."
      ],
      technologies: [
        { name: "React", icon: <Code size={14} /> },
        { name: "Node.js", icon: <Code size={14} /> },
        { name: "Express", icon: <Code size={14} /> },
        { name: "MongoDB", icon: <Code size={14} /> },
        { name: "UI/UX", icon: <Code size={14} /> },
        { name: "Responsive", icon: <Code size={14} /> }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="experience">
      <div className="experience-container">
        <h2 className="section-title">
          <span className="title-number">02.</span> Experiencia Profesional
        </h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              className={`timeline-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="timeline-item-content">
                <div className="experience-header">
                  <h3>
                    <Briefcase className="icon" />
                    <span>{exp.title}</span>
                  </h3>
                  <div className="company-info">
                    <Building2 className="icon" />
                    {exp.companyUrl ? (
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="company-link">
                        {exp.company} <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                  </div>
                  <div className="date">
                    <Calendar className="icon" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="experience-description">
                  <ul>
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="tech-tags">
                  {exp.technologies.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>
                      {tech.icon}
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="background-grid">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="grid-item" />
        ))}
      </div>
    </section>
  );
};

export default Experience;