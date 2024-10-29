import React from 'react';
import './About.scss';
import './About.responsive.scss';

export default () => {
    return (
        <section id="about">
            <h2>⚡ Sobre mí</h2>
            <div className="content">
                <div className="text-info">
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
                <div className="image-info">
                    <img className="dots" src="assets/images/dots.svg"/>
                    <figure>
                        <img src="assets/images/avatar.png" alt="Abrahan Zarza"/>
                    </figure>
                </div>
            </div>
        </section>
    )
};