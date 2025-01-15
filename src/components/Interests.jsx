import React, { useEffect, useRef, useState } from 'react';
import { 
  Cpu, 
  Book, 
  Briefcase, 
  Brain, 
  Code2, 
  Bot, 
  Rocket,
  Coffee,
  Lightbulb
} from 'lucide-react';
import './Interests.css';

const interestsData = [
  {
    icon: Brain,
    title: 'IA',
    description: 'Fascinado por el potencial de la Inteligencia Artificial para resolver problemas complejos.',
    color: '#FF6B6B'
  },
  {
    icon: Bot,
    title: 'Machine Learning',
    description: 'Explorando algoritmos y modelos para crear sistemas más inteligentes.',
    color: '#4ECDC4'
  },
  {
    icon: Code2,
    title: 'Desarrollo',
    description: 'Creando soluciones innovadoras a través del código.',
    color: '#45B7D1'
  },
  {
    icon: Book,
    title: 'Lectura',
    description: 'Aprendizaje continuo a través de libros técnicos y de ciencia ficción.',
    color: '#96CEB4'
  },
  {
    icon: Rocket,
    title: 'Innovación',
    description: 'Explorando nuevas tecnologías y tendencias emergentes.',
    color: '#D4A5A5'
  },
  {
    icon: Briefcase,
    title: 'Negocios',
    description: 'Interesado en el emprendimiento y la tecnología empresarial.',
    color: '#9B89B3'
  }
];

const Interests = () => {
  const sectionRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);

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

  return (
    <section ref={sectionRef} className="interests">
      <div className="interests-header">
        <Lightbulb className="section-icon" size={32} />
        <h2>Intereses</h2>
      </div>
      
      <div className="interests-container">
        <p className="interests-description">
          Me apasiona la tecnología, la inteligencia artificial, y el desarrollo de software. 
          En mi tiempo libre, disfruto aprendiendo sobre nuevas tecnologías, leyendo libros 
          de ciencia ficción, y explorando el mundo de los negocios.
          <Coffee className="coffee-icon" size={24} />
        </p>

        <div className="interests-grid">
          {interestsData.map((interest, index) => (
            <div 
              key={index}
              className="interest-item"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                '--hover-color': interest.color,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="interest-icon-container">
                <interest.icon 
                  className="interest-icon" 
                  size={48}
                />
              </div>
              <h3>{interest.title}</h3>
              {hoveredItem === index && (
                <div className="interest-description">
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