import React from 'react';

const Experience = () => {
  return (
    <section style={styles.experience}>
      <h2 style={styles.heading}>Experiencia</h2>

      <div style={styles.job}>
        <h3 style={styles.jobTitle}>Desarrollador Frontend - Orange</h3>
        <p style={styles.date}>Enero 2023 - Presente</p>
        <p style={styles.description}>
          En Orange, formé parte de un equipo dedicado a la creación y mantenimiento de aplicaciones web interactivas. Utilicé React para desarrollar interfaces de usuario dinámicas y responsivas, asegurando una experiencia de usuario fluida. También colaboré estrechamente con el equipo de diseño para implementar componentes reutilizables y optimizar el rendimiento de la aplicación.
        </p>
      </div>

      <div style={styles.job}>
        <h3 style={styles.jobTitle}>Desarrollador Full Stack - Freelance</h3>
        <p style={styles.date}>Julio 2021 - Diciembre 2022</p>
        <p style={styles.description}>
          Como freelance, trabajé en diversos proyectos para clientes de diferentes sectores. Desarrollé aplicaciones completas utilizando tecnologías como Node.js, Express y MongoDB en el backend, y React en el frontend. Mi rol incluyó desde la planificación y diseño hasta la implementación y el despliegue, siempre buscando entregar productos de alta calidad que cumplieran con los requisitos del cliente.
        </p>
      </div>
      
    </section>
  );
};

const styles = {
  experience: {
    padding: '40px 20px',
    background: 'linear-gradient(357deg, rgb(0, 0, 0), rgb(11, 37, 68))',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
    color: 'white',
    textAlign: 'left',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(255, 255, 255, 0.3)',
  },
  job: {
    marginBottom: '30px',
    padding: '20px',
    border: '2px solid #00aaff',  // Borde alrededor de cada bloque de experiencia
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  },
  jobHovered: {
    transform: 'scale(1.02)',
    boxShadow: '0px 6px 10px rgba(0, 170, 255, 0.4)', // Sombra brillante al pasar el mouse
  },
  jobTitle: {
    fontSize: '1.5em',
    marginBottom: '5px',
    color: '#fff',
  },
  date: {
    fontSize: '1em',
    fontStyle: 'italic',
    color: '#dcdcdc',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    color: '#dcdcdc',
  },
};

export default Experience;
