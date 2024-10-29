import React from 'react';
import './Social.scss';
import './Social.responsive.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default ({extraClass}) => {
    return (
        <ul className={`social ${extraClass}`}>
            <li>
                <a href="https://github.com/AbrahanZarza" target="_blank">
                    <FontAwesomeIcon icon={faGithub}/>
                    <span>GitHub</span>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/abrahanzarza" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin}/>
                    <span>LinkedIn</span>
                </a>
            </li>
            <li>
                <a href="mailto:abrahan.azr@gmail.com" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <span>Email</span>
                </a>
            </li>
        </ul>
    )
};