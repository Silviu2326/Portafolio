import React, { useEffect, useRef, useState } from 'react';
import { Code, Server, Database, ExternalLink, Github, Sparkles } from 'lucide-react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Projects.css';

import imagen1 from './Capturadepantalla2024-09-03202317.png';
import imagen2 from './Captura de pantalla 2024-09-03 204908.png';
import imagen3 from './Captura de pantalla 2024-09-03 204929.png';
import imagen4 from './Captura de pantalla 2024-09-03 204941.png';
import imagen5 from './Captura de pantalla 2024-09-03 205016.png';
import imagen6 from './Captura de pantalla 2024-09-03 205115.png';
import imagen7 from './Captura de pantalla 2024-09-03 205130.png';
import imagen8 from './Captura de pantalla 2024-09-03 213217.png';
import imagen9 from './Captura de pantalla 2024-09-03 213231.png';
import imagen10 from './Captura de pantalla 2024-09-03 213242.png';
import imagen11 from './Captura de pantalla 2024-09-03 213253.png';

const projectsData = [
  {
    title: 'Algoritmo de Extracción de Datos - Orange',
    description: 'Desarrollé un algoritmo avanzado de extracción de datos utilizando técnicas de web scraping con Python. El objetivo principal era recolectar datos críticos de clientes para la empresa Orange, con el fin de realizar análisis de mercado más precisos. El algoritmo fue diseñado para iterar sobre cada cliente, teniendo en cuenta que algunos datos podrían no estar disponibles en todos los casos. Los datos recopilados se almacenaban en hojas de Excel para garantizar la privacidad y seguridad de la información sensible.',
    icon: Code,
    technologies: ['Python', 'Web Scraping', 'Excel', 'Data Analysis'],
    githubUrl: 'https://github.com/tu-usuario/algoritmo-extraccion-datos',
    images: []
  },
  {
    title: 'CRM para Entrenadores Personales',
    description: [
      'Desarrollé un CRM robusto diseñado específicamente para entrenadores personales, incorporando tres módulos clave: Marketing, Finanzas y Ejercicios y Dietas. La aplicación está construida con React en el frontend, Node.js en el backend y MongoDB como base de datos.',
      'El módulo de Marketing permite a los entrenadores gestionar sus campañas y estrategias de marketing. El módulo de Finanzas es altamente personalizable, integrando funcionalidades avanzadas mediante widgets y se conecta con APIs como Plaid para ofrecer un seguimiento financiero detallado. El módulo de Ejercicios y Dietas permite la creación de planes personalizados utilizando la API de OpenAI para generar recomendaciones inteligentes.'
    ],
    icon: Server,
    technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Plaid API'],
    githubUrl: 'https://github.com/tu-usuario/crm-entrenadores',
    images: [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7]
  },
  {
    title: 'SaaS para Gestión Alimentaria',
    description: [
      'Desarrollé un SaaS innovador para la gestión alimentaria, utilizando React y Node.js como las tecnologías principales, junto con MongoDB para el almacenamiento de datos. Esta plataforma está diseñada para ayudar a los usuarios a gestionar de manera integral su alimentación, ofreciendo herramientas para la planificación y el seguimiento de dietas.',
      'La aplicación permite a los usuarios crear y personalizar planes de dieta, registrar alimentos diarios, y ofrece análisis detallados del progreso del usuario hacia sus metas de salud y bienestar.'
    ],
    icon: Database,
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Material-UI'],
    githubUrl: 'https://github.com/tu-usuario/saas-gestion-alimentaria',
    images: [imagen8, imagen9, imagen10, imagen11]
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e, projectElement) => {
    const rect = projectElement.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    projectElement.style.setProperty('--mouse-x', `${mousePosition.x}px`);
    projectElement.style.setProperty('--mouse-y', `${mousePosition.y}px`);
  };

  return (
    <section ref={sectionRef} className="projects">
      <h2>
        <Sparkles className="section-icon" size={32} style={{ marginRight: '10px', color: '#64ffda' }} />
        Proyectos
      </h2>
      
      {projectsData.map((project, index) => (
        <div 
          key={index} 
          className="project-item"
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          role="article"
          aria-label={`Proyecto: ${project.title}`}
        >
          <project.icon 
            className="project-icon" 
            color="#64ffda" 
            size={48} 
            aria-hidden="true"
          />
          <div className="project-content">
            <h3>
              {project.title}
              <div className="project-links" role="group" aria-label="Enlaces del proyecto">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="icon-link"
                  aria-label="Ver código en GitHub"
                >
                  <Github size={20} />
                </a>
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="icon-link"
                    aria-label="Ver demo del proyecto"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </h3>
            
            {Array.isArray(project.description) ? (
              project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))
            ) : (
              <p>{project.description}</p>
            )}

            <div 
              className="technologies-list"
              role="list"
              aria-label="Tecnologías utilizadas"
            >
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="tech-tag"
                  onMouseEnter={() => setHoveredTech(tech)}
                  onMouseLeave={() => setHoveredTech(null)}
                  role="listitem"
                >
                  {tech}
                  {hoveredTech === tech && (
                    <div 
                      className="tech-tooltip"
                      role="tooltip"
                      aria-hidden="true"
                    >
                      Tecnología utilizada: {tech}
                    </div>
                  )}
                </span>
              ))}
            </div>

            {project.images.length > 0 && (
              <div 
                className="carousel-container"
                role="region"
                aria-label="Galería de imágenes del proyecto"
              >
                <Carousel 
                  showThumbs={false} 
                  autoPlay 
                  infiniteLoop
                  interval={5000}
                  transitionTime={500}
                  showStatus={false}
                  swipeable={true}
                  emulateTouch={true}
                  useKeyboardArrows={true}
                >
                  {project.images.map((img, index) => (
                    <div key={index}>
                      <img 
                        src={img} 
                        alt={`${project.title} - Captura ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            )}

            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="project-link"
              aria-label="Ver detalles del proyecto en GitHub"
            >
              Ver proyecto
              <ExternalLink size={16} style={{ marginLeft: '8px', verticalAlign: 'middle' }} aria-hidden="true" />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;