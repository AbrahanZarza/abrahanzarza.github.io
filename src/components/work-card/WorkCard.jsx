import React, { useState, useEffect, useRef } from 'react';
import './WorkCard.scss';

export default ({project}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.5 }
        );
    
        if (elementRef.current) {
          observer.observe(elementRef.current);
        }
    
        return () => {
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        };
      }, []);

    return (
        <div ref={elementRef} className={`project ${isVisible ? 'on-screen' : ''}`}>
            <figure>
                <img src={project.img}></img>
            </figure>
            <div className="text">
                <a href={project.link} target="_blank">{project.name}</a>
                <ul className="technologies">
                    {project.technologies.map((technology, key) =>
                        <li key={key} className={`badge-${technology.toLowerCase()}`}>{technology}</li>)}
                </ul>
                <hr/>
                <p>{project.resume}</p>
            </div>
        </div>
    )
};