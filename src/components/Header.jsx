import React, { useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const header = document.querySelector('.header');
    header.classList.add('visible');
  }, []);

  return (
    <header className="header">
      <h1 className="name">Silviu Oprescu</h1>
      <h2 className="title">Desarrollador Web</h2>
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/silviuoprescu/" 
          target="_blank" 
          rel="noreferrer"
          className="social-link"
        >
          <Linkedin className="icon" /> LinkedIn
        </a>
        <a 
          href="https://github.com/silviu-oprescu" 
          target="_blank" 
          rel="noreferrer"
          className="social-link"
        >
          <Github className="icon" /> GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;