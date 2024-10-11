import React, { useEffect, useRef } from 'react';
import { Code, Server, Database } from 'lucide-react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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

const Projects = () => {
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
    <section ref={sectionRef} className="projects">
      <h2>Proyectos</h2>
      
      <div className="project-item">
        <Code className="project-icon" color="#00aaff" size={48} />
        <div className="project-content">
          <h3>Algoritmo de Extracción de Datos - Orange</h3>
          <p>
            Desarrollé un algoritmo avanzado de extracción de datos utilizando técnicas de web scraping con Python. El objetivo principal era recolectar datos críticos de clientes para la empresa Orange, con el fin de realizar análisis de mercado más precisos. El algoritmo fue diseñado para iterar sobre cada cliente, teniendo en cuenta que algunos datos podrían no estar disponibles en todos los casos. Los datos recopilados se almacenaban en hojas de Excel para garantizar la privacidad y seguridad de la información sensible.
          </p>
          <a href="https://github.com/tu-usuario/algoritmo-extraccion-datos" target="_blank" rel="noreferrer" className="project-link">Ver proyecto</a>
        </div>
      </div>

      <div className="project-item">
        <Server className="project-icon" color="#00aaff" size={48} />
        <div className="project-content">
          <h3>CRM para Entrenadores Personales</h3>
          <p>
            Desarrollé un CRM robusto diseñado específicamente para entrenadores personales, incorporando tres módulos clave: Marketing, Finanzas y Ejercicios y Dietas. La aplicación está construida con React en el frontend, Node.js en el backend y MongoDB como base de datos.
          </p>
          <p>
            El módulo de Marketing permite a los entrenadores gestionar sus campañas y estrategias de marketing. El módulo de Finanzas es altamente personalizable, integrando funcionalidades avanzadas mediante widgets y se conecta con APIs como Plaid para ofrecer un seguimiento financiero detallado. El módulo de Ejercicios y Dietas permite la creación de planes personalizados utilizando la API de OpenAI para generar recomendaciones inteligentes.
          </p>
          <div className="carousel-container">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              {[imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7].map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Captura de pantalla ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
          <a href="https://github.com/tu-usuario/crm-entrenadores" target="_blank" rel="noreferrer" className="project-link">Ver proyecto</a>
        </div>
      </div>

      <div className="project-item">
        <Database className="project-icon" color="#00aaff" size={48} />
        <div className="project-content">
          <h3>SaaS para Gestión Alimentaria</h3>
          <p>
            Desarrollé un SaaS innovador para la gestión alimentaria, utilizando React y Node.js como las tecnologías principales, junto con MongoDB para el almacenamiento de datos. Esta plataforma está diseñada para ayudar a los usuarios a gestionar de manera integral su alimentación, ofreciendo herramientas para la planificación y el seguimiento de dietas.
          </p>
          <p>
            La aplicación permite a los usuarios crear y personalizar planes de dieta, registrar alimentos diarios, y ofrece análisis detallados del progreso del usuario hacia sus metas de salud y bienestar.
          </p>
          <div className="carousel-container">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              {[imagen8, imagen9, imagen10, imagen11].map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Captura de pantalla ${index + 8}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;