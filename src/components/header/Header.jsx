import React, { useState, useEffect, useRef } from 'react';
import './Header.scss';
import './Header.responsive.scss';
import Social from '../social/Social';

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
        <header className="full-height" ref={elementRef}>
            <div className="header-wrapper">
                <div className={`intro ${isVisible ? 'on-screen' : ''}`}>
                    <img src="assets/images/dots.svg"/>
                    <p>
                        ¡Hola! Yo soy_
                    </p>
                    <h1>Abrahan Zarza.</h1>
                </div>
                <h2 className={`${isVisible ? 'on-screen' : ''}`}>
                    <span className="text-highlight">Desarrollador Web</span> Full Stack malagueño entusiasta <br/>
                    de las nuevas tecnologías.
                </h2>
                <ul className={`current-main-info ${isVisible ? 'on-screen' : ''}`}>
                    <li>
                        🚀 Actualmente especializado en Backend (API's / CMS / microservicios).
                    </li>
                    <li>
                        ⚡ Desarrollador Web Backend en <a href="https://freepik.com" target="_blank">Freepik</a>.
                    </li>
                </ul>
                <div className={`social-wrapper ${isVisible ? 'on-screen' : ''}`}>
                    <Social/>
                </div>
            </div>
        </header>
    )
};