import React from 'react';
import './Contact.scss';
import './Contact.responsive.scss';
import Social from '../social/Social';

export default () => {
    return (
        <section id="contact">
            <div className="center-info">
                <h2>Contacta conmigo.</h2>
                <p>
                    Actualmente especializado en <span className="highlight-text">Desarrollo Backend</span>.<br/>
                    Contacta conmigo para saber más sobre tus proyectos.
                </p>
                <Social extraClass="justify-content-center"/>
            </div>
        </section>
    )
};