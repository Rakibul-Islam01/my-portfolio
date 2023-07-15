import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './MyProjects.css'

const MyProjects = () => {
    const [projects, setProjects] = useState()

    useEffect(() => {
        fetch('../../../public/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='my-12'>
            <h2 className='text-3xl text-center font-bold mb-8'>MY PROJECTS</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-8'>
                {
                    projects?.map((project, index) => (
                        <div key={index} className="project-card flex flex-col w-full">
                            <h3 className="project-name">{project.name}</h3>
                            <div className="project-content">
                                <p>{project.description}</p>
                            </div>
                            <div className="project-image-container">
                                <img src={project.screenshot} alt={project.name} className="project-image" />
                            </div>
                            <div className="project-links">
                                <a href={project.liveDemo}>Live Demo</a>
                                <a href={project.githubRepo}>GitHub Repo</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyProjects;