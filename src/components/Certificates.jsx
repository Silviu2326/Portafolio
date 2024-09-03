import React from 'react';

const Certificates = () => {
  return (
    <section style={styles.certificates}>
      <h2>Certificaciones</h2>
      <div>
        <h3>Certificación en React - Udemy</h3>
        <p>Fecha de finalización: Marzo 2023</p>
      </div>
      <div>
        <h3>Full-Stack Web Developer - FreeCodeCamp</h3>
        <p>Fecha de finalización: Diciembre 2022</p>
      </div>
    </section>
  );
};

const styles = {
  certificates: {
    padding: '20px',
    background: '#fff',
    textAlign: 'left',
  }
};

export default Certificates;
