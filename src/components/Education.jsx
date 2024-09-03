import React from 'react';
import './Education.css'

const Education = () => {
  return (
    <section style={styles.education}>
      <h2 style={styles.heading}>Educación</h2>

      <div style={styles.school}>
        <h3 style={styles.degree}>Grado Medio en Sistemas Microinformáticos y Redes - AulaCampus</h3>
        <p style={styles.date}>2020 - 2022</p>
        <p style={styles.description}>
          Durante mi formación en AulaCampus, adquirí conocimientos fundamentales en sistemas informáticos, redes, y desarrollo de software. Este grado me proporcionó una base sólida en tecnologías clave y me preparó para afrontar desafíos técnicos en el mundo laboral.
        </p>
      </div>
      
      {/* Nueva sección: Autodidacta */}
      <div style={styles.school}>
        <h3 style={styles.degree}>Autodidacta</h3>
        <p style={styles.description}>
          De manera autodidacta, he aprendido a programar en Python, Node.js y React a través de cursos en línea, videos tutoriales y la práctica constante. Este enfoque me ha permitido profundizar en estas tecnologías a mi propio ritmo, desarrollando proyectos personales y resolviendo problemas reales, lo que me ha brindado una comprensión sólida y práctica de cada una de ellas.
        </p>
      </div>

    </section>
  );
};

const styles = {
  education: {
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
  school: {
    marginBottom: '30px',
    padding: '20px',
    border: '2px solid #00aaff',  // Borde alrededor de cada bloque de educación
    borderRadius: '8px',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  },
  schoolHovered: {
    transform: 'scale(1.02)',
    boxShadow: '0px 6px 10px rgba(0, 170, 255, 0.4)', // Sombra brillante al pasar el mouse
  },
  degree: {
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

export default Education;
