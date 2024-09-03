import React from 'react';
import { Code, Server, Database } from 'lucide-react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from 'react-responsive-carousel';

import imagen1 from './Capturadepantalla2024-09-03202317.png';
import imagen2 from './Captura de pantalla 2024-09-03 204908.png';
import imagen3 from './Captura de pantalla 2024-09-03 204929.png';
import imagen4 from './Captura de pantalla 2024-09-03 204941.png';
import imagen5 from './Captura de pantalla 2024-09-03 205016.png';
import imagen6 from './Captura de pantalla 2024-09-03 205115.png';
import imagen7 from './Captura de pantalla 2024-09-03 205130.png';
// Importa las imágenes 8, 9, 10, y 11
import imagen8 from './Captura de pantalla 2024-09-03 213217.png';
import imagen9 from './Captura de pantalla 2024-09-03 213231.png';
import imagen10 from './Captura de pantalla 2024-09-03 213242.png';
import imagen11 from './Captura de pantalla 2024-09-03 213253.png';

const Projects = () => {
  return (
    <section style={styles.projects}>
      <h2 style={styles.heading}>Proyectos</h2>
      
      <div style={styles.projectItem}>
        <Code color="#00aaff" size={48} />
        <div style={styles.projectContent}>
          <h3 style={styles.projectTitle}>Algoritmo de Extracción de Datos - Orange</h3>
          <p style={styles.projectDescription}>
            En este proyecto, desarrollé un algoritmo avanzado de extracción de datos utilizando técnicas de web scraping con Python. El objetivo principal era recolectar datos críticos de clientes para la empresa Orange, con el fin de realizar análisis de mercado más precisos. El algoritmo fue diseñado para iterar sobre cada cliente, teniendo en cuenta que algunos datos podrían no estar disponibles en todos los casos. Los datos recopilados se almacenaban en hojas de Excel para garantizar la privacidad y seguridad de la información sensible. Aunque actualmente no tengo acceso a la página web debido a políticas de privacidad, puedo proporcionar videos demostrativos que validan la funcionalidad y efectividad del proyecto.
          </p>
          <a href="https://github.com/tu-usuario/algoritmo-extraccion-datos" target="_blank" rel="noreferrer" style={styles.projectLink}>Ver proyecto</a>
        </div>
      </div>

      <div style={styles.projectItem}>
        <Server color="#00aaff" size={48} />
        <div style={styles.projectContent}>
          <h3 style={styles.projectTitle}>CRM para Entrenadores Personales</h3>
          <p style={styles.projectDescription}>
            En este proyecto, desarrollé un CRM robusto diseñado específicamente para entrenadores personales, incorporando tres módulos clave: <strong>Marketing</strong>, <strong>Finanzas</strong> y <strong>Ejercicios y Dietas</strong>. La aplicación está construida con <strong>React</strong> en el frontend, <strong>Node.js</strong> en el backend y <strong>MongoDB</strong> como base de datos.
          </p>
          <p style={styles.projectDescription}>
            El módulo de <strong>Marketing</strong> permite a los entrenadores gestionar sus campañas y estrategias de marketing, ayudándolos a llegar de manera efectiva a sus clientes potenciales.
          </p>
          <p style={styles.projectDescription}>
            El módulo de <strong>Finanzas</strong> es altamente personalizable, integrando funcionalidades avanzadas mediante widgets que permiten a los usuarios adaptar la plataforma a sus necesidades específicas. Además, el sistema se conecta con APIs como <strong>Plaid</strong> para ofrecer un seguimiento financiero detallado, proporcionando a los entrenadores una visión clara de sus ingresos, gastos, y flujo de caja.
          </p>
          <p style={styles.projectDescription}>
            Por último, el módulo de <strong>Ejercicios y Dietas</strong> permite la creación de planes de entrenamiento y dietas personalizados para los clientes. Utilizando la API de <strong>OpenAI</strong>, el sistema es capaz de generar recomendaciones inteligentes y personalizadas, ajustadas a las metas y necesidades específicas de cada cliente.
          </p>
          <p style={styles.projectDescription}>
            Este CRM es una herramienta poderosa que no solo facilita la gestión diaria de los entrenadores, sino que también optimiza sus operaciones, mejorando la experiencia tanto para los entrenadores como para sus clientes.
          </p>

          {/* Carrusel de fotos */}
          <div style={styles.carouselContainer}>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              <div>
                <img src={imagen1} alt="Captura de pantalla 1" style={styles.carouselImage}/>
              </div>
              <div>
                <img src={imagen2} alt="Captura de pantalla 2" style={styles.carouselImage}/>
              </div>
              <div>
                <img src={imagen3} alt="Captura de pantalla 3" style={styles.carouselImage}/>
              </div>
              <div>
                <img src={imagen4} alt="Captura de pantalla 4" style={styles.carouselImage}/>
              </div>
              <div>
                <img src={imagen5} alt="Captura de pantalla 5" style={styles.carouselImage}/>
              </div>
              <div>
                <img src={imagen6} alt="Captura de pantalla 6" style={styles.carouselImage}/>
              </div>
              <div>
                <img src={imagen7} alt="Captura de pantalla 7" style={styles.carouselImage}/>
              </div>
            </Carousel>
          </div>

          <a href="https://github.com/tu-usuario/crm-entrenadores" target="_blank" rel="noreferrer" style={styles.projectLink}>Ver proyecto</a>
        </div>
      </div>

      <div style={styles.projectItem}>
        <Database color="#00aaff" size={48} />
        <div style={styles.projectContent}>
          <h3 style={styles.projectTitle}>SaaS para Gestión Alimentaria</h3>
          <p style={styles.projectDescription}>
            He desarrollado un SaaS innovador para la gestión alimentaria, utilizando <strong>React</strong> y <strong>Node.js</strong> como las tecnologías principales, junto con <strong>MongoDB</strong> para el almacenamiento de datos. Esta plataforma está diseñada para ayudar a los usuarios a gestionar de manera integral su alimentación, ofreciendo una serie de herramientas que simplifican la planificación y el seguimiento de dietas.
          </p>
          <p style={styles.projectDescription}>
            La aplicación permite a los usuarios crear y personalizar planes de dieta basados en sus necesidades nutricionales y objetivos específicos. Los usuarios pueden registrar alimentos diarios, incluyendo detalles como calorías, macronutrientes y otros valores nutricionales. Además, la plataforma ofrece análisis detallados que proporcionan una visión clara del progreso del usuario hacia sus metas de salud y bienestar.
          </p>

          {/* Segundo Carrusel de fotos */}
          <div style={styles.carouselContainer}>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              <div>
                <img src={imagen8} alt="Captura de pantalla 8" style={styles.carouselImage}/>
              </div>
              <div>
                <img src={imagen9} alt="Captura de pantalla 9" style={styles.carouselImage}/>
              </div>
              <div>
                <img src={imagen10} alt="Captura de pantalla 10" style={styles.carouselImage}/>
              </div>
              <div>
                <img src={imagen11} alt="Captura de pantalla 11" style={styles.carouselImage}/>
              </div>
            </Carousel>
          </div>

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
    border: '2px solid rgb(89 68 241)',  
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  },
  projectItemHovered: {
    transform: 'scale(1.02)',
    boxShadow: '0px 6px 10px rgba(0, 170, 255, 0.4)', 
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
  carouselContainer: {
    width: '80%',          // Ajusta el ancho al 80% de la pantalla
    maxWidth: '600px',     // Limita el ancho máximo a 600px
    margin: '0 auto',      // Centra el carrusel horizontalmente
    height: 'auto',        // Permite que la altura se ajuste automáticamente
  },
  carouselImage: {
    width: '100%',
    height: '300px',        // Establece una altura fija para las imágenes
    objectFit: 'cover',     // Recorta o ajusta las imágenes para llenar el contenedor
  },
};

export default Projects;
