import React, { useRef, useState } from 'react';
import { Mail, Phone, FileText, ExternalLink } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, element) => {
    const rect = element.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    element.style.setProperty('--mouse-x', `${mousePosition.x}px`);
    element.style.setProperty('--mouse-y', `${mousePosition.y}px`);
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    window.open('/curriculum.pdf', '_blank');
  };

  return (
    <footer 
      ref={footerRef} 
      className="footer"
      role="contentinfo"
      aria-label="Información de contacto"
    >
      <div 
        className="contact-item"
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
        role="presentation"
      >
        <Mail 
          className="contact-icon" 
          aria-hidden="true"
          size={20}
        />
        <a 
          href="mailto:silviu.oprescu@gmail.com" 
          className="contact-link"
          aria-label="Enviar email a silviu.oprescu@gmail.com"
        >
          silviu.oprescu@gmail.com
        </a>
      </div>

      <div 
        className="contact-item"
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
        role="presentation"
      >
        <Phone 
          className="contact-icon" 
          aria-hidden="true"
          size={20}
        />
        <span 
          className="contact-link"
          aria-label="Número de teléfono"
        >
          +34 683 529 629
        </span>
      </div>

      <div 
        className="contact-item"
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
        role="presentation"
      >
        <FileText 
          className="contact-icon" 
          aria-hidden="true"
          size={20}
        />
        <a 
          href="/curriculum.pdf" 
          download 
          onClick={handleDownloadCV}
          className="contact-link"
          aria-label="Descargar Curriculum Vitae"
        >
          Descargar CV
          <ExternalLink 
            size={16} 
            style={{ 
              marginLeft: '6px',
              verticalAlign: 'middle',
              display: 'inline-block'
            }}
            aria-hidden="true"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;