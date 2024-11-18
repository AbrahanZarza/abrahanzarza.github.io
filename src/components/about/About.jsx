import React, { useState, useEffect, useRef } from 'react';
import './About.scss';
import './About.responsive.scss';

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
          { threshold: 0.4 }
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
        <section id="about" ref={elementRef}>
            <h2 className={`${isVisible ? 'on-screen' : ''}`}>⚡ Sobre mí</h2>
            <div className="content">
                <div className={`text-info ${isVisible ? 'on-screen' : ''}`}>
                    <p>
                        Suelo trabajar por <span className="highlight-text">Málaga y alrededores</span>.
                        En mi trabajo diario me encargo de desarrollar código de lado del servidor en forma
                        de <span className="highlight-text">servicios web, API restful e integraciones </span>
                        con servicios de terceros, entre otros.
                        Además, suelo encargarme de construir y mantener <span className="highlight-text">interfaces de usuario</span> interactivas
                        y fáciles de usar, realizadas totalmente <span className="highlight-text">a medida</span>.
                    </p>
                    <p>
                        Mi experiencia como <span className="highlight-text">desarrollador</span> me ha enseñado que
                        todo proyecto es un problema esperando a ser resuelto, por tanto, significa una nueva 
                        oportunidad para aprender conceptos y nuevas tecnologías que podré aplicar a mis otros
                        proyectos.
                    </p>
                    <p>
                    Siempre estoy experimentando, probando y nunca me canso de aprender.
                    </p>
                </div>
                <div className={`image-info ${isVisible ? 'on-screen' : ''}`}>
                    <img className="dots" src="assets/images/dots.svg"/>
                    <figure>
                        <img src="assets/images/avatar.jpg" alt="Abrahan Zarza"/>
                    </figure>
                </div>
            </div>
        </section>
    )
};