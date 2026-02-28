import React, { useEffect, useRef, useState } from 'react';
import { Code, Server, Database, ExternalLink, Github, Sparkles } from 'lucide-react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Projects.css';

const projectsData = [
  {
    title: 'SaaS ERP para Entrenadores y Centros Deportivos',
    description: [
      'Plataforma CRM avanzada para gestión de negocios deportivos. Incluye generador automático de rutinas, sistema de reservas con calendario inteligente, integración con pasarela de pago Stripe, y dashboard analítico con más de 30 KPIs.',
      'La aplicación permite gestionar clientes, rutinas, reservas y facturación de manera eficiente, con una interfaz moderna y intuitiva.'
    ],
    icon: Server,
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Chart.js'],
    githubUrl: 'https://github.com/silviu-oprescu/erp-entrenadores',
    images: []
  },
  {
    title: 'Orange - Sistema Next Best Action',
    description: [
      'Sistema predictivo empresarial con motor de recomendaciones en tiempo real con latencia <100ms. Integración con Salesforce, procesamiento de más de 5 millones de registros, segmentación dinámica y APIs RESTful/GraphQL.',
      'Desarrollé algoritmos de machine learning para predecir las mejores acciones de marketing para cada cliente.'
    ],
    icon: Code,
    technologies: ['Python', 'Machine Learning', 'Salesforce', 'GraphQL', 'REST API'],
    githubUrl: 'https://github.com/silviu-oprescu/next-best-action',
    images: []
  },
  {
    title: 'SaaS Gestión Integral de Terapeutas',
    description: [
      'Solución web y móvil completa para profesionales de la salud. Incluye agenda inteligente, historia clínica digital, consultas por video WebRTC, portal de pacientes, facturación automática y app móvil con sincronización offline.',
      'La plataforma está diseñada para optimizar la gestión de clínicas y consultorios terapéuticos.'
    ],
    icon: Database,
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'React Native'],
    githubUrl: 'https://github.com/silviu-oprescu/saas-terapeutas',
    images: []
  },
  {
    title: 'ERP Especializado para Despachos de Abogados',
    description: [
      'Sistema ERP vertical para despachos de abogados. Gestiona expedientes judiciales, calendario judicial con alertas, facturación con control de honorarios, portal de clientes e integración con firma digital.',
      'Desarrollé módulos personalizados para optimizar los procesos legales y la gestión documental.'
    ],
    icon: Server,
    technologies: ['React', 'Node.js', 'MongoDB', 'PDF Digital', 'JWT'],
    githubUrl: 'https://github.com/silviu-oprescu/erp-abogados',
    images: []
  },
  {
    title: 'Mr Cool Cat - Cervecería',
    description: [
      'Proyecto integral para una cervecería artesanal que incluye tres aplicaciones complementarias: aplicación web para gestión del negocio y pedidos, aplicación móvil para clientes (iOS/Android), y juego 3D interactivo para promoción de la marca.',
      'El juego 3D ofrece una experiencia inmersiva donde los usuarios pueden explorar la fábrica de cerveza virtual y ganar premios.'
    ],
    icon: Sparkles,
    technologies: ['React', 'Node.js', 'MongoDB', 'Three.js', 'React Native', 'Unity'],
    githubUrl: 'https://github.com/silviu-oprescu/mr-cool-cat',
    demoUrl: 'https://mrcoolcat.example.com',
    images: []
  },
  {
    title: 'Rotulemos - Plataforma Web',
    description: [
      'Plataforma web desarrollada en PHP para la gestión y solicitud de rotulos publicitarios. Permite a los usuarios diseñar, presupuestar y encargar rotulos personalizados de manera online.',
      'Incluye editor gráfico integrado, sistema de presupuestos automáticos y gestión de pedidos para el administrador.'
    ],
    icon: Code,
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/silviu-oprescu/rotulemos',
    demoUrl: 'https://rotulemos.example.com',
    images: []
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