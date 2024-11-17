import React from 'react';
import './Work.scss';
import './Work.responsive.scss';
import WorkCard from '../work-card/WorkCard';

const projects = [
    {
        img: "assets/images/github-banner.png",
        link: "https://github.com/AbrahanZarza/dbm",
        name: "dbm",
        technologies: ["PHP", "PDO"],
        resume: "Herramienta para realizar operaciones con bases de datos."
    },
    {
        img: "assets/images/github-banner.png",
        link: "https://github.com/AbrahanZarza/http-bundle",
        name: "http-bundle",
        technologies: ["PHP"],
        resume: "Micro-framework HTTP para desarrollo de aplicaciones web ligeras."
    },
    {
        img: "assets/images/github-banner.png",
        link: "https://github.com/AbrahanZarza/python-boilerplate",
        name: "python-boilerplate",
        technologies: ["Python", "Docker"],
        resume: "Boilerplate para desarrollar aplicaciones con Python de manera ágil."
    },
];

export default () => {
    return (
        <section id="work">
            <div className="projects-grid">
                <div className="info">
                    <h2>Mi espacio creativo.</h2>
                    <p>Algunos de los proyectos en los que he trabajado.</p>
                    <a href="https://github.com/AbrahanZarza" target="_blank">Explorar más →</a>
                </div>
                {projects.map((project, key) => (<WorkCard key={key} project={project}/>))}
            </div>
        </section>
    )
};