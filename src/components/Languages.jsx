import React, { useEffect, useRef, useState } from 'react';
import { Globe2, Sparkles } from 'lucide-react';
import './Languages.css';

const languagesData = [
  {
    code: 'ro',
    name: 'Rumano',
    level: 'Nativo',
    proficiency: 100,
    details: {
      speaking: 100,
      writing: 100,
      reading: 100,
      listening: 100
    }
  },
  {
    code: 'es',
    name: 'Español',
    level: 'Nativo',
    proficiency: 100,
    details: {
      speaking: 100,
      writing: 100,
      reading: 100,
      listening: 100
    }
  },
  {
    code: 'gb',
    name: 'Inglés',
    level: 'Avanzado',
    proficiency: 90,
    details: {
      speaking: 85,
      writing: 90,
      reading: 95,
      listening: 90
    }
  }
];

const LanguageCard = ({ language, isActive, onClick }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      cardRef.current.style.setProperty('--mouse-x', `${mousePosition.x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${mousePosition.y}px`);
    }
  };

  const skills = [
    { name: 'Hablar', value: language.details.speaking, icon: '🗣️' },
    { name: 'Escribir', value: language.details.writing, icon: '✍️' },
    { name: 'Leer', value: language.details.reading, icon: '📖' },
    { name: 'Escuchar', value: language.details.listening, icon: '👂' }
  ];

  return (
    <div 
      ref={cardRef}
      className={`language-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      aria-label={`${language.name} - ${language.level}`}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <div className="language-header">
        <img 
          src={`https://flagcdn.com/w80/${language.code}.png`} 
          alt={`${language.name} flag`} 
          className="flag"
          loading="lazy"
        />
        <div className="language-title">
          <h3>{language.name}</h3>
          <span className="level" role="status">{language.level}</span>
        </div>
      </div>
      
      <div 
        className="proficiency-bar"
        role="progressbar"
        aria-valuenow={language.proficiency}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`${language.name} proficiency: ${language.proficiency}%`}
      >
        <div 
          className="proficiency-fill"
          style={{ width: `${language.proficiency}%` }}
        />
      </div>

      <div 
        className={`language-details ${isActive ? 'show' : ''}`}
        aria-hidden={!isActive}
      >
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="skill-item"
            role="group"
            aria-label={`${skill.name}: ${skill.value}%`}
          >
            <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
            <div className="skill-bar-container">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div 
                className="skill-bar"
                role="progressbar"
                aria-valuenow={skill.value}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div 
                  className="skill-fill"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Languages = () => {
  const sectionRef = useRef(null);
  const [activeLanguage, setActiveLanguage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleLanguageClick = (index) => {
    setActiveLanguage(activeLanguage === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef} 
      className="languages"
      aria-label="Language Skills"
    >
      <div className="languages-header">
        <Sparkles className="section-icon" size={32} aria-hidden="true" />
        <h2>Idiomas</h2>
      </div>
      
      <div className="languages-container">
        <div 
          className="languages-grid"
          role="list"
          aria-label="Lista de idiomas"
        >
          {languagesData.map((language, index) => (
            <LanguageCard
              key={language.code}
              language={language}
              isActive={activeLanguage === index}
              onClick={() => handleLanguageClick(index)}
            />
          ))}
        </div>
        
        <div className="languages-footer">
          <Globe2 className="globe-icon" size={24} aria-hidden="true" />
          <p>Habilidades lingüísticas y niveles de competencia</p>
        </div>
      </div>
    </section>
  );
};

export default Languages;