import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css'; // Importamos el archivo CSS

const skillsData = [
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 90 },
  { name: 'JavaScript', percentage: 85 },
  { name: 'React', percentage: 80 },
  { name: 'Node.js', percentage: 75 },
  { name: 'Python', percentage: 70 },
  { name: 'Git y Control de Versiones', percentage: 80 },
];

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState('');

  const handleNext = () => {
    setAnimation('slide-left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
      setAnimation(''); // Reset animation
    }, 500); // Duration of animation
  };

  const handlePrev = () => {
    setAnimation('slide-right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + skillsData.length) % skillsData.length);
      setAnimation(''); // Reset animation
    }, 500); // Duration of animation
  };

  const getVisibleSkills = () => {
    const visibleSkills = [];
    for (let i = 0; i < 3; i++) {
      visibleSkills.push(skillsData[(currentIndex + i) % skillsData.length]);
    }
    return visibleSkills;
  };

  return (
    <section style={styles.skills}>
      <h2 style={styles.heading}>Habilidades</h2>
      <div style={styles.slider}>
        <button style={styles.navButton} onClick={handlePrev}>
          {'<'}
        </button>
        <div className="skills-container">
          {getVisibleSkills().map((skill, index) => (
            <div className={`skill ${animation}`} key={index} style={styles.skill}>
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                styles={buildStyles({
                  textColor: '#fff',
                  pathColor: '#8e44ad',
                  trailColor: '#2c3e50',
                })}
              />
              <p style={styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>
        <button style={styles.navButton} onClick={handleNext}>
          {'>'}
        </button>
      </div>
    </section>
  );
};

const styles = {
  skills: {
    padding: '40px 20px',
    background: 'linear-gradient(357deg, rgb(0 0 0), rgb(11 37 68))',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
    color: 'white',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(255, 255, 255, 0.3)',
  },
  slider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skill: {
    width: '120px',
    textAlign: 'center',
    backgroundColor: 'transparent', // Eliminar fondo
  },
  skillName: {
    marginTop: '10px',
    fontSize: '1.2em',
    color: '#fff',
  },
  navButton: {
    background: 'none',
    border: 'none',
    fontSize: '2em',
    color: '#8e44ad',
    cursor: 'pointer',
    padding: '0 10px',
    userSelect: 'none',
    outline: 'none',
  },
};

export default Skills;
