import React from 'react';
import { Mail, Phone, FileText } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-item">
        <Mail className="contact-icon" />
        <a href="mailto:oprescusilviu@gmail.com" className="contact-link">oprescusilviu@gmail.com</a>
      </div>
      <div className="contact-item">
        <Phone className="contact-icon" />
        <span className="contact-link">+34 683 529 629</span>
      </div>
      <div className="contact-item">
        <FileText className="contact-icon" />
        <a 
          href="/curriculum.pdf" 
          download 
          onClick={(e) => {
            e.preventDefault();
            window.open('/curriculum.pdf', '_blank');
          }}
          className="contact-link"
        >
          Descargar CV
        </a>
      </div>
    </footer>
  );
};

export default Footer;