import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default () => {
    const year = new Date().getFullYear();

    return (
        <section id="footer" className="wrapper">
            <div className="content">
                <small> © {year} Abrahan Zarza - Todos los derechos reservados. Sígueme en: 
                    <a href="https://www.linkedin.com/in/abrahanzarza" title="abrahanzarza" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <span>abrahanzarza</span>
                    </a>
                    <a href="https://github.com/AbrahanZarza" title="AbrahanZarza" target="_blank">
                        <FontAwesomeIcon icon={faGithub}/>
                        <span>AbrahanZarza</span>
                    </a>
                    <a href="mailto:abrahan.azr@gmail.com" title="abrahan.azr" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <span>abrahan.azr</span>
                    </a>
                </small>
            </div>
        </section>
    )
};