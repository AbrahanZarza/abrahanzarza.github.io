import React from 'react';
import './Footer.scss';
import './Footer.responsive.scss';

export default () => {
    return (
        <footer>
            <p>
                Diseñado y desarrollado con ❤️ por Abrahan Zarza.<br/>
                Construído con <span className="highlight-text">React</span>.
                Alojado en <a href="https://github.com/AbrahanZarza/abrahanzarza.github.io" target="_blank" className="highlight-text">GitHub</a>.
            </p>
        </footer>
    )
};