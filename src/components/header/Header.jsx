import React from 'react';
import './Header.scss';
import Social from '../social/Social';

export default () => {
    return (
        <header className="full-height">
            <div className="header-wrapper">
                <div className="intro">
                    <img src="assets/images/dots.svg"/>
                    <p>
                        ¡Hola! Yo soy_
                    </p>
                </div>
                <h1>Abrahan Zarza.</h1>
                <h2>
                    <span className="text-highlight">Desarrollador Web</span> Full Stack malagueño entusiasta<br/>
                    de las nuevas tecnologías.
                </h2>
                <ul className="current-main-info">
                    <li>
                        🚀 Actualmente especializado en Backend (API's / CMS / microservicios).
                    </li>
                    <li>
                        ⚡ Desarrollador Web Backend en <a href="https://freepik.com" target="_blank">Freepik</a>.
                    </li>
                </ul>
                <Social/>
            </div>
        </header>
    )
};