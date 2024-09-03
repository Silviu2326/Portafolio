import React from 'react';
import { Cpu, Book, Briefcase } from 'lucide-react';
import './Interests.css'; // Importamos el archivo CSS para estilos adicionales

const Interests = () => {
  return (
    <section style={styles.interests}>
      <h2 style={styles.heading}>Intereses</h2>
      <p style={styles.paragraph}>
        Me apasiona la tecnología, la inteligencia artificial, y el desarrollo de software. En mi tiempo libre, disfruto aprendiendo sobre nuevas tecnologías, leyendo libros de ciencia ficción, y explorando el mundo de los negocios.
      </p>
      <div style={styles.iconsContainer}>
        <div style={styles.iconWrapper}>
          <Cpu color="#00aaff" size={48} />
          <p style={styles.iconLabel}>IA</p>
        </div>
        <div style={styles.iconWrapper}>
          <Book color="#00aaff" size={48} />
          <p style={styles.iconLabel}>Leer</p>
        </div>
        <div style={styles.iconWrapper}>
          <Briefcase color="#00aaff" size={48} />
          <p style={styles.iconLabel}>Negocios</p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  interests: {
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
    color: '#dcdcdc',
    marginBottom: '20px',
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  iconWrapper: {
    textAlign: 'center',
  },
  iconLabel: {
    marginTop: '10px',
    fontSize: '1.1em',
    color: '#00aaff',
  },
};

export default Interests;
