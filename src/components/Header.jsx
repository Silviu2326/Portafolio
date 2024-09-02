import React from 'react';
import './Header.css'; // Importamos el archivo CSS actualizado
import { Linkedin, Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="name">Silviu Oprescu</h1>
      <h2 className="title">Desarrollador Web</h2>
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/silviuoprescu/" 
          target="_blank" 
          rel="noreferrer"
        >
          <Linkedin className="icon" /> LinkedIn
        </a>
        <a 
          href="https://github.com/silviu-oprescu" 
          target="_blank" 
          rel="noreferrer"
        >
          <Github className="icon" /> GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
