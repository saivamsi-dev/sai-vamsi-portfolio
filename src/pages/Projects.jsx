import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css"; // import local styles

const projects = [
    {
        title: "Task Manager App",
        description: "A responsive app to manage daily tasks with localStorage sync.",
        imgSrc: "https://source.unsplash.com/400x300/?productivity,app",
        link: "https://github.com/yourusername/task-manager",
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio built using React, Bootstrap & AOS animations.",
        imgSrc: "https://source.unsplash.com/400x300/?portfolio,web",
        link: "https://yourportfolio.com",
    },
    {
        title: "Weather App",
        description: "Simple weather forecasting app using OpenWeatherMap API.",
        imgSrc: "https://source.unsplash.com/400x300/?weather,clouds",
        link: "https://github.com/yourusername/weather-app",
    },
];

const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="projects" className="projects-section py-5">
            <div className="container text-center">
                <h2 className="fw-bold mb-4" data-aos="fade-down">Projects</h2>
                <p className="text-muted mb-5" data-aos="fade-up">
                    Some of the works I've built with love and curiosity.
                </p>

                <div className="row g-4">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="col-12 col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            <div className="card h-100 shadow-sm border-0 project-card">
                                <img
                                    src={project.imgSrc}
                                    className="card-img-top"
                                    alt={project.title}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold">{project.title}</h5>
                                    <p className="card-text flex-grow-1">{project.description}</p>
                                    <a
                                        href={project.link}
                                        className="btn btn-outline-dark mt-auto"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
