// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './Skills.css';

// const skills = [
//     { name: "Java", level: "Intermediate", icon: "🟤" },
//     { name: "Python", level: "Advanced", icon: "🐍" },
//     { name: "ReactJS", level: "Advanced", icon: "⚛️" },
//     { name: "Spring Boot", level: "Intermediate", icon: "🌱" },
//     { name: "MySQL", level: "Advanced", icon: "🐬" },
//     { name: "HTML/CSS/JS", level: "Advanced", icon: "💻" },
//     { name: "Figma/Canva", level: "Intermediate", icon: "🎨" },
// ];

// const Skills = () => {
//     useEffect(() => {
//         AOS.init({ duration: 1000 });
//     }, []);

//     return (
//         <section id="skills" className="py-5">
//             <div className="container text-center">
//                 <h2 className="fw-bold mb-4" data-aos="fade-down">Skills</h2>
//                 <p className="mb-5 text-muted" data-aos="fade-up">
//                     Here are some of the technologies and tools I work with:
//                 </p>

//                 <div className="row g-4 justify-content-center">
//                     {skills.map((skill, index) => (
//                         <div
//                             className="col-6 col-sm-4 col-md-3"
//                             key={index}
//                             data-aos="zoom-in"
//                             data-aos-delay={index * 100}
//                         >
//                             <div className="skill-card p-3 rounded shadow-sm h-100">
//                                 <div className="fs-2 mb-2">{skill.icon}</div>
//                                 <h6 className="fw-semibold mb-1">{skill.name}</h6>
//                                 <small className="text-muted">{skill.level}</small>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Skills;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css"; // Optional if you want more customization

const skills = [
    { name: "Java", level: "Intermediate", icon: "🟤", color: "#E38C00" },
    { name: "Python", level: "Advanced", icon: "🐍", color: "#3C873A" },
    { name: "ReactJS", level: "Advanced", icon: "⚛️", color: "#61DBFB" },
    { name: "Spring Boot", level: "Intermediate", icon: "🌱", color: "#6DB33F" },
    { name: "MySQL", level: "Advanced", icon: "🐬", color: "#00758F" },
    { name: "HTML/CSS/JS", level: "Advanced", icon: "💻", color: "#F16529" },
    { name: "Figma/Canva", level: "Intermediate", icon: "🎨", color: "#A259FF" },
];

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="skills" className="skills-section py-5">
            <div className="container text-center">
                <h2 className="fw-bold mb-4" data-aos="fade-down">Skills</h2>
                <p className="mb-5 text-muted" data-aos="fade-up">
                    Here are some of the technologies and tools I work with:
                </p>

                <div className="row g-4 justify-content-center">
                    {skills.map((skill, index) => (
                        <div
                            className="col-6 col-sm-4 col-md-3"
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <div
                                className="skill-card text-white p-3 rounded shadow-sm h-100"
                                style={{
                                    backgroundColor: skill.color,
                                    transition: "transform 0.3s, background-color 0.3s",
                                }}
                            >
                                <div className="fs-2 mb-2">{skill.icon}</div>
                                <h6 className="fw-semibold mb-1">{skill.name}</h6>
                                <small className="text-white-50">{skill.level}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
