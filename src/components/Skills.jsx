import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { ChevronLeft, ChevronRight, Code, Zap, Star, GitBranch, Globe } from 'lucide-react';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';

const skillsData = [
  { 
    name: 'HTML', 
    percentage: 95,
    color: '#E34F26',
    description: 'Estructuración semántica, accesibilidad, SEO',
    icon: Globe,
    features: ['HTML5', 'SEO', 'Accesibilidad', 'Semántica']
  },
  { 
    name: 'CSS', 
    percentage: 90,
    color: '#1572B6',
    description: 'Diseño responsive, animaciones, Flexbox/Grid',
    icon: Star,
    features: ['Flexbox', 'Grid', 'Animaciones', 'Sass']
  },
  { 
    name: 'JavaScript', 
    percentage: 85,
    color: '#F7DF1E',
    description: 'ES6+, DOM, APIs, async/await',
    icon: Code,
    features: ['ES6+', 'DOM', 'APIs', 'Async']
  },
  { 
    name: 'React', 
    percentage: 80,
    color: '#61DAFB',
    description: 'Hooks, Context, Redux, Next.js',
    icon: Code,
    features: ['Hooks', 'Context', 'Redux', 'Next.js']
  },
  { 
    name: 'Node.js', 
    percentage: 75,
    color: '#339933',
    description: 'Express, APIs RESTful, MongoDB',
    icon: GitBranch,
    features: ['Express', 'REST', 'MongoDB', 'JWT']
  },
  { 
    name: 'Python', 
    percentage: 70,
    color: '#3776AB',
    description: 'Django, Flask, Data Science',
    icon: Code,
    features: ['Django', 'Flask', 'NumPy', 'Pandas']
  },
  { 
    name: 'Git', 
    percentage: 80,
    color: '#F05032',
    description: 'Control de versiones, colaboración',
    icon: GitBranch,
    features: ['GitHub', 'GitFlow', 'CI/CD', 'Branches']
  }
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState('');
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('visible');
    }
  }, []);

  const handleNext = () => {
    setAnimation('slide-left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
      setAnimation('');
    }, 500);
  };

  const handlePrev = () => {
    setAnimation('slide-right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + skillsData.length) % skillsData.length);
      setAnimation('');
    }, 500);
  };

  const getVisibleSkills = () => {
    const visibleSkills = [];
    for (let i = 0; i < 3; i++) {
      visibleSkills.push(skillsData[(currentIndex + i) % skillsData.length]);
    }
    return visibleSkills;
  };

  return (
    <section ref={sectionRef} className="skills" aria-label="Habilidades técnicas">
      <div className="skills-background">
        <div className="skills-grid"></div>
      </div>
      <h2>
        <Zap className="icon" size={32} aria-hidden="true" />
        Habilidades
      </h2>
      <div className="skills-slider" role="region" aria-label="Carrusel de habilidades">
        <button 
          className="nav-button prev" 
          onClick={handlePrev} 
          aria-label="Habilidad anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="skills-container">
          {getVisibleSkills().map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                className={`skill ${animation}`} 
                key={index}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                role="article"
                aria-label={`${skill.name}: ${skill.percentage}% de dominio`}
              >
                <div className="skill-icon">
                  <Icon size={24} color={skill.color} />
                </div>
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    textColor: '#64ffda',
                    pathColor: skill.color,
                    trailColor: 'rgba(17, 34, 64, 0.8)',
                    textSize: '16px',
                    pathTransitionDuration: 1.5,
                    strokeLinecap: 'round',
                  })}
                />
                <p className="skill-name">
                  {skill.name}
                </p>
                {isHovered === index && (
                  <div className="skill-tooltip" role="tooltip">
                    <span className="tooltip-title">
                      {skill.name}
                    </span>
                    <p className="tooltip-description">{skill.description}</p>
                    <div className="tooltip-features">
                      {skill.features.map((feature, fIndex) => (
                        <span key={fIndex} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="tooltip-arrow" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <button 
          className="nav-button next" 
          onClick={handleNext} 
          aria-label="Siguiente habilidad"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="skills-indicator">
        {skillsData.map((_, index) => (
          <span 
            key={index} 
            className={`indicator ${index >= currentIndex && index < currentIndex + 3 ? 'active' : ''}`}
            role="presentation"
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;