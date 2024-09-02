import React from 'react';

const About = () => {
  return (
    <section style={styles.about}>
      <h2 style={styles.heading}>Sobre mí</h2>
      <p style={styles.paragraph}>
        ¡Hola! Soy un programador de 21 años con experiencia trabajando para Orange y como desarrollador freelance. A lo largo de mi carrera, he tenido la oportunidad de trabajar con múltiples tecnologías como React, Node.js, y diseño UI/UX. Soy una persona apasionada por la tecnología, con mucha actitud y ganas de aprender y enfrentar nuevos desafíos.
      </p>
      <p style={styles.paragraph}>
        Mi motivación se refleja en mi trabajo diario, y siempre busco la mejor manera de contribuir al éxito de los proyectos en los que participo. Estoy listo para seguir creciendo como profesional y aportar mi conocimiento y entusiasmo a cualquier equipo.
      </p>
    </section>
  );
};

const styles = {
  about: {
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
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#dcdcdc',
  },
};

export default About;
