import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';

const skillsData = [
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 90 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'React', percentage: 80 },
  { name: 'Node.js', percentage: 75 },
  { name: 'Python', percentage: 70 },
  { name: 'Git', percentage: 80 },
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState('');
  const sectionRef = useRef(null);

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
      <h2>Habilidades</h2>
      <div className="skills-slider">
        <button className="nav-button prev" onClick={handlePrev}>
          &#8249;
        </button>
        <div className="skills-container">
          {getVisibleSkills().map((skill, index) => (
            <div className={`skill ${animation}`} key={index}>
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                styles={buildStyles({
                  textColor: '#64ffda',
                  pathColor: '#00aaff',
                  trailColor: '#112240',
                })}
              />
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Skills;