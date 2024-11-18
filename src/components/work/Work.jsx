import React, { useState, useEffect, useRef } from 'react';
import './Work.scss';
import './Work.responsive.scss';
import WorkCard from '../work-card/WorkCard';

const projects = [
    {
        img: "assets/images/github-banner.png",
        link: "https://github.com/AbrahanZarza/dbm",
        name: "dbm",
        technologies: ["PHP", "PDO"],
        resume: "Herramienta para realizar operaciones con bases de datos."
    },
    {
        img: "assets/images/github-banner.png",
        link: "https://github.com/AbrahanZarza/http-bundle",
        name: "http-bundle",
        technologies: ["PHP"],
        resume: "Micro-framework HTTP para desarrollo de aplicaciones web ligeras."
    },
    {
        img: "assets/images/github-banner.png",
        link: "https://github.com/AbrahanZarza/python-boilerplate",
        name: "python-boilerplate",
        technologies: ["Python", "Docker"],
        resume: "Boilerplate para desarrollar aplicaciones con Python de manera ágil."
    },
];

export default () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.1 }
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
        <section id="work" ref={elementRef}>
            <div className="projects-grid">
                <div className={`info ${isVisible ? 'on-screen' : ''}`}>
                    <h2>Mi espacio creativo.</h2>
                    <p>Algunos de los proyectos en los que he trabajado.</p>
                    <a href="https://github.com/AbrahanZarza" target="_blank">Explorar más →</a>
                </div>
                {projects.map((project, key) => (<WorkCard key={key} project={project}/>))}
            </div>
        </section>
    )
};