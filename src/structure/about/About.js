import React from 'react';
import './About.scss';
import './About.responsive.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faGithub, faHtml5, faLinkedin, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faSymfony } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default () => {
    const levels = {
        'php': 90,
        'laravel': 80,
        'symfony': 80,
        'node': 70,
        'docker': 70,
        'javascript': 90,
        'react': 80,
        'angular': 70,
        'uiux': 90
    };

    return (
        <section id="about-me" className="min-height">
            <div className="background">
                <div className="left-bg"></div>
                <div className="right-bg"></div>
            </div>
            <div className="content wrapper">
                <div className="left">
                    <h4>
                        Soy un Desarrollador Web Full Stack malagueño <span className="title">Sobre mí</span>
                    </h4>
                    <div className="section-body">
                        <p>Suelo trabajar por Málaga y alrededores. En mi trabajo diario me encargo de desarrollar código de lado del servidor en forma de servicios web, API restful e integraciones con servicios de terceros, entre otros. Además, suelo encargarme de construir y mantener interfaces de usuario interactivas y fáciles de usar, realizadas totalmente a medida.</p>
                        <p>Mi experiencia como desarrollador y administrador de sistemas me ha enseñado que todo proyecto es un problema esperando a ser resuelto, por tanto, significa una nueva oportunidad para aprender conceptos y nuevas tecnologías que podré aplicar a mis otros proyectos.</p>
                        <p>Siempre estoy experimentando, probando y nunca me canso de aprender.</p>
                    </div>
                    <ul className="rrss">
                        <li>
                            <a href="https://www.linkedin.com/in/abrahanzarza" title="abrahanzarza" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/AbrahanZarza" title="AbrahanZarza" target="_blank">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:abrahan.azr@gmail.com" title="abrahan.azr" target="_blank">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <ul className="skills">
                        <li>
                            <FontAwesomeIcon icon={faPhp}/>
                            <span className="title">PHP</span>
                            <div className="percentage" style={{width: `${levels.php}%`}}></div>
                            <span className="number">{levels.php}</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLaravel}/>
                            <span className="title">Laravel</span>
                            <div className="percentage" style={{width: `${levels.laravel}%`}}></div>
                            <span className="number">{levels.laravel}</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSymfony}/>
                            <span className="title">Symfony</span>
                            <div className="percentage" style={{width: `${levels.symfony}%`}}></div>
                            <span className="number">{levels.symfony}</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faNodeJs}/>
                            <span className="title">Node.js</span>
                            <div className="percentage" style={{width: `${levels.node}%`}}></div>
                            <span className="number">{levels.node}</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faDocker}/>
                            <span className="title">Docker</span>
                            <div className="percentage" style={{width: `${levels.docker}%`}}></div>
                            <span className="number">{levels.docker}</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faJs}/>
                            <span className="title">Javascript</span>
                            <div className="percentage" style={{width: `${levels.javascript}%`}}></div>
                            <span className="number">{levels.javascript}</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faReact}/>
                            <span className="title">React</span>
                            <div className="percentage" style={{width: `${levels.react}%`}}></div>
                            <span className="number">{levels.react}</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAngular}/>
                            <span className="title">Angular</span>
                            <div className="percentage" style={{width: `${levels.angular}%`}}></div>
                            <span className="number">{levels.angular}</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faHtml5}/>
                            <span className="title">UI/UX</span>
                            <div className="percentage" style={{width: `${levels.uiux}%`}}></div>
                            <span className="number">{levels.uiux}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
};