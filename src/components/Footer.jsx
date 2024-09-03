import React from 'react';
import { Mail, Phone, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.contactItem}>
        <Mail color="#00aaff" size={24} />
        <a href="mailto:oprescusilviu@gmail.com" style={styles.contactLink}>oprescusilviu@gmail.com</a>
      </div>
      <div style={styles.contactItem}>
        <Phone color="#00aaff" size={24} />
        <span style={styles.contactLink}>+34 683 529 629</span>
      </div>
      <div style={styles.contactItem}>
        <FileText color="#00aaff" size={24} />
        <a href="/curriculum.pdf" target="_blank" rel="noreferrer" style={styles.contactLink}>Descargar PDF</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(357deg, rgb(0, 0, 0), rgb(11, 37, 68))',
    color: 'white',
    borderTop: '1px solid #444',
  },
  contactItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0',
  },
  contactLink: {
    marginLeft: '10px',
    color: '#00aaff',
    textDecoration: 'none',
    fontSize: '1.2em',
  }
};

export default Footer;
