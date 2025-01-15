import React, { useEffect, useRef, useState } from 'react';
import { Globe2, Languages as LangIcon } from 'lucide-react';
import './Languages.css';

const languagesData = [
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
  const skills = [
    { name: 'Hablar', value: language.details.speaking, icon: '🗣️' },
    { name: 'Escribir', value: language.details.writing, icon: '✍️' },
    { name: 'Leer', value: language.details.reading, icon: '📖' },
    { name: 'Escuchar', value: language.details.listening, icon: '👂' }
  ];

  return (
    <div 
      className={`language-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="language-header">
        <img 
          src={`https://flagcdn.com/w80/${language.code}.png`} 
          alt={`${language.name} flag`} 
          className="flag"
        />
        <div className="language-title">
          <h3>{language.name}</h3>
          <span className="level">{language.level}</span>
        </div>
      </div>
      
      <div className="proficiency-bar">
        <div 
          className="proficiency-fill"
          style={{ width: `${language.proficiency}%` }}
        />
      </div>

      <div className={`language-details ${isActive ? 'show' : ''}`}>
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item">
            <span className="skill-icon">{skill.icon}</span>
            <div className="skill-bar-container">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="skill-bar">
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
    <section ref={sectionRef} className="languages">
      <div className="languages-header">
        <LangIcon className="section-icon" size={32} />
        <h2>Idiomas</h2>
      </div>
      
      <div className="languages-container">
        <div className="languages-grid">
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
          <Globe2 className="globe-icon" size={24} />
          <p>Habilidades lingüísticas y niveles de competencia</p>
        </div>
      </div>
    </section>
  );
};

export default Languages;