import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { ChevronLeft, ChevronRight, Code, Zap } from 'lucide-react';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';

const skillsData = [
  { 
    name: 'HTML', 
    percentage: 95,
    color: '#E34F26',
    description: 'Estructuración semántica, accesibilidad, SEO'
  },
  { 
    name: 'CSS', 
    percentage: 90,
    color: '#1572B6',
    description: 'Diseño responsive, animaciones, Flexbox/Grid'
  },
  { 
    name: 'JavaScript', 
    percentage: 85,
    color: '#F7DF1E',
    description: 'ES6+, DOM, APIs, async/await'
  },
  { 
    name: 'React', 
    percentage: 80,
    color: '#61DAFB',
    description: 'Hooks, Context, Redux, Next.js'
  },
  { 
    name: 'Node.js', 
    percentage: 75,
    color: '#339933',
    description: 'Express, APIs RESTful, MongoDB'
  },
  { 
    name: 'Python', 
    percentage: 70,
    color: '#3776AB',
    description: 'Django, Flask, Data Science'
  },
  { 
    name: 'Git', 
    percentage: 80,
    color: '#F05032',
    description: 'Control de versiones, colaboración'
  }
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState('');
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(null);

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
    <section ref={sectionRef} className="skills">
      <h2>
        <Zap className="icon" size={32} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
        Habilidades
      </h2>
      <div className="skills-slider">
        <button className="nav-button prev" onClick={handlePrev} aria-label="Previous skill">
          <ChevronLeft size={24} />
        </button>
        <div className="skills-container">
          {getVisibleSkills().map((skill, index) => (
            <div 
              className={`skill ${animation}`} 
              key={index}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                styles={buildStyles({
                  textColor: '#64ffda',
                  pathColor: skill.color,
                  trailColor: 'rgba(17, 34, 64, 0.8)',
                  textSize: '16px',
                  pathTransitionDuration: 1,
                  pathTransition: 'stroke-dashoffset 0.5s ease 0s',
                })}
              />
              <p className="skill-name">
                <Code size={16} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                {skill.name}
              </p>
              {isHovered === index && (
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '120%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(17, 34, 64, 0.95)',
                    padding: '15px',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(100, 255, 218, 0.2)',
                    zIndex: 10,
                    width: '220px',
                    textAlign: 'center',
                    fontSize: '0.9em',
                    color: '#8892b0',
                    backdropFilter: 'blur(10px)',
                    marginBottom: '15px',
                    opacity: 0,
                    animation: 'tooltipAppear 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
                  }}
                >
                  <span style={{ color: '#64ffda', fontWeight: '600', marginBottom: '5px', display: 'block' }}>
                    {skill.name}
                  </span>
                  {skill.description}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%) rotate(45deg)',
                      width: '12px',
                      height: '12px',
                      background: 'rgba(17, 34, 64, 0.95)',
                      border: '1px solid rgba(100, 255, 218, 0.2)',
                      borderTop: 'none',
                      borderLeft: 'none',
                      boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
                      zIndex: -1
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={handleNext} aria-label="Next skill">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Skills;