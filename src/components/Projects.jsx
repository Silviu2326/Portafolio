import React from 'react';
import { Code, Server, Database } from 'lucide-react';

const Projects = () => {
  return (
    <section style={styles.projects}>
      <h2 style={styles.heading}>Proyectos</h2>
      
      <div style={styles.projectItem}>
        <Code color="#00aaff" size={48} />
        <div style={styles.projectContent}>
          <h3 style={styles.projectTitle}>Algoritmo de Extracción de Datos - Orange</h3>
          <p style={styles.projectDescription}>
            Desarrollé un algoritmo de extracción de datos utilizando técnicas de web scraping con Python. Este proyecto fue parte de mi trabajo en Orange, donde automatizamos la recolección de datos críticos para análisis de mercado.
          </p>
          <a href="https://github.com/tu-usuario/algoritmo-extraccion-datos" target="_blank" rel="noreferrer" style={styles.projectLink}>Ver proyecto</a>
        </div>
      </div>

      <div style={styles.projectItem}>
        <Server color="#00aaff" size={48} />
        <div style={styles.projectContent}>
          <h3 style={styles.projectTitle}>CRM para Entrenadores Personales</h3>
          <p style={styles.projectDescription}>
            Creé un CRM completo para entrenadores personales, utilizando React en el frontend y Node.js en el backend. La aplicación permite la gestión de clientes, planificación de entrenamientos, y seguimiento del progreso.
          </p>
          <a href="https://github.com/tu-usuario/crm-entrenadores" target="_blank" rel="noreferrer" style={styles.projectLink}>Ver proyecto</a>
        </div>
      </div>

      <div style={styles.projectItem}>
        <Database color="#00aaff" size={48} />
        <div style={styles.projectContent}>
          <h3 style={styles.projectTitle}>SaaS para Gestión Alimentaria</h3>
          <p style={styles.projectDescription}>
            Desarrollé un SaaS para la gestión alimentaria utilizando React y Node.js. La plataforma permite a los usuarios gestionar dietas, registrar alimentos, y obtener análisis nutricionales detallados.
          </p>
          <a href="https://github.com/tu-usuario/saas-gestion-alimentaria" target="_blank" rel="noreferrer" style={styles.projectLink}>Ver proyecto</a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  projects: {
    padding: '40px 20px',
    background: 'linear-gradient(182deg, rgb(0, 0, 0), rgb(11, 37, 68))',
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
  projectItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '30px',
    padding: '20px',
    border: '2px solid rgb(89 68 241)',  // Borde alrededor de cada proyecto
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  },
  projectItemHovered: {
    transform: 'scale(1.02)',
    boxShadow: '0px 6px 10px rgba(0, 170, 255, 0.4)', // Sombra brillante al pasar el mouse
  },
  projectContent: {
    marginLeft: '20px',
  },
  projectTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#fff',
  },
  projectDescription: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    color: '#dcdcdc',
    marginBottom: '10px',
  },
  projectLink: {
    display: 'inline-block',
    padding: '8px 16px',
    color: '#00aaff',
    textDecoration: 'none',
    fontWeight: 'bold',
    border: '2px solid #00aaff',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  },
  projectLinkHovered: {
    backgroundColor: '#00aaff',
    color: '#fff',
  },
};

export default Projects;
