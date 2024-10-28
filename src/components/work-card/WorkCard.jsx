import React from 'react';
import './WorkCard.scss';

export default ({project}) => {
    return (
        <div className="project">
            <figure>
                <img src={project.img}></img>
            </figure>
            <div className="text">
                <a href={project.link} target="_blank">{project.name}</a>
                <ul className="technologies">
                    {project.technologies.map((technology, key) => <li key={key}>{technology}</li>)}
                </ul>
                <hr/>
                <p>{project.resume}</p>
            </div>
        </div>
    )
};