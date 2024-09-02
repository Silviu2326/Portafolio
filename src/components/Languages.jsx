import React from 'react';
import './Languages.css'; // Importamos el archivo CSS para los estilos

const Languages = () => {
  return (
    <section style={styles.languages}>
      <h2 style={styles.heading}>Idiomas</h2>
      <ul style={styles.ul}>
        <li style={styles.languageItem}>
          <img src="https://flagcdn.com/w20/es.png" alt="Spanish flag" style={styles.flag} />
          Español - <span style={styles.level}>Nativo</span>
        </li>
        <li style={styles.languageItem}>
          <img src="https://flagcdn.com/w20/gb.png" alt="English flag" style={styles.flag} />
          Inglés - <span style={styles.level}>Avanzado</span>
        </li>
      </ul>
    </section>
  );
};

const styles = {
  languages: {
    padding: '40px 20px',
    background: 'linear-gradient(0deg, rgb(0, 0, 0), rgb(11, 37, 68))',
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
  ul: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  languageItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.2em',
    marginBottom: '10px',
  },
  flag: {
    marginRight: '10px',
    width: '24px',
    height: '24px',
    borderRadius: '50%', // Redondeamos la bandera
  },
  level: {
    fontWeight: 'bold',
    marginLeft: '5px',
    color: '#00aaff', // Color destacado para el nivel del idioma
  },
};

export default Languages;
