import React, { useEffect, useRef } from 'react';

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

  return (
    <section ref={sectionRef} className="experience">
      <h2>Experiencia</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-item-content">
            <h3>Desarrollador Frontend - Orange</h3>
            <p className="date">Enero 2024 - Mayo 2024</p>
            <p>
              En Orange, formé parte de un equipo dedicado a la creación y mantenimiento de aplicaciones web interactivas. Utilicé React para desarrollar interfaces de usuario dinámicas y responsivas, asegurando una experiencia de usuario fluida. También colaboré estrechamente con el equipo de diseño para implementar componentes reutilizables y optimizar el rendimiento de la aplicación.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-item-content">
            <h3>Desarrollador Full Stack - Freelance</h3>
            <p className="date">Junio 2023 - Diciembre 2023, Mayo 2024 - Actualidad</p>
            <p>
              Como freelance, trabajé en diversos proyectos para clientes de diferentes sectores. Desarrollé aplicaciones completas utilizando tecnologías como Node.js, Express y MongoDB en el backend, y React en el frontend. Mi rol incluyó desde la planificación y diseño hasta la implementación y el despliegue, siempre buscando entregar productos de alta calidad que cumplieran con los requisitos del cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;