import React, { useEffect, useRef, useState } from 'react';
import { 
  Book, 
  Briefcase, 
  Brain, 
  Code2, 
  Bot, 
  Rocket,
  Coffee,
  Sparkles
} from 'lucide-react';
import './Interests.css';

const interestsData = [
  {
    icon: Brain,
    title: 'IA',
    description: 'Fascinado por el potencial de la Inteligencia Artificial para resolver problemas complejos.',
    color: '#FF6B6B',
    colorRgb: '255, 107, 107'
  },
  {
    icon: Bot,
    title: 'Machine Learning',
    description: 'Explorando algoritmos y modelos para crear sistemas más inteligentes.',
    color: '#4ECDC4',
    colorRgb: '78, 205, 196'
  },
  {
    icon: Code2,
    title: 'Desarrollo',
    description: 'Creando soluciones innovadoras a través del código.',
    color: '#45B7D1',
    colorRgb: '69, 183, 209'
  },
  {
    icon: Book,
    title: 'Lectura',
    description: 'Aprendizaje continuo a través de libros técnicos y de ciencia ficción.',
    color: '#96CEB4',
    colorRgb: '150, 206, 180'
  },
  {
    icon: Rocket,
    title: 'Innovación',
    description: 'Explorando nuevas tecnologías y tendencias emergentes.',
    color: '#D4A5A5',
    colorRgb: '212, 165, 165'
  },
  {
    icon: Briefcase,
    title: 'Negocios',
    description: 'Interesado en el emprendimiento y la tecnología empresarial.',
    color: '#9B89B3',
    colorRgb: '155, 137, 179'
  }
];

const Interests = () => {
  const sectionRef = useRef(null);
  const descriptionRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e, element) => {
    const rect = element.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    element.style.setProperty('--mouse-x', `${mousePosition.x}px`);
    element.style.setProperty('--mouse-y', `${mousePosition.y}px`);
  };

  return (
    <section 
      ref={sectionRef} 
      className="interests"
      aria-label="Intereses y pasiones"
    >
      <div className="interests-header">
        <Sparkles className="section-icon" size={32} aria-hidden="true" />
        <h2>Intereses</h2>
      </div>
      
      <div className="interests-container">
        <div 
          ref={descriptionRef}
          className="interests-description"
          onMouseMove={(e) => handleMouseMove(e, descriptionRef.current)}
        >
          Me apasiona la tecnología, la inteligencia artificial, y el desarrollo de software. 
          En mi tiempo libre, disfruto aprendiendo sobre nuevas tecnologías, leyendo libros 
          de ciencia ficción, y explorando el mundo de los negocios.
          <Coffee 
            className="coffee-icon" 
            size={24} 
            aria-hidden="true"
          />
        </div>

        <div 
          className="interests-grid"
          role="list"
          aria-label="Lista de intereses"
        >
          {interestsData.map((interest, index) => (
            <div 
              key={index}
              className="interest-item"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              style={{
                '--hover-color': interest.color,
                '--hover-color-rgb': interest.colorRgb,
                animationDelay: `${index * 0.1}s`
              }}
              role="listitem"
              aria-label={interest.title}
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setHoveredItem(hoveredItem === index ? null : index);
                }
              }}
            >
              <div 
                className="interest-icon-container"
                aria-hidden="true"
              >
                <interest.icon 
                  className="interest-icon" 
                  size={48}
                />
              </div>
              <h3>{interest.title}</h3>
              {hoveredItem === index && (
                <div 
                  className="interest-description"
                  role="tooltip"
                >
                  {interest.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;