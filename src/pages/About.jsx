import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center mb-4 section-heading">About Me</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="about-text">
              Hello! I'm <strong>Sai Vamsi Rao</strong>, a passionate full-stack developer from Andhra Pradesh.
              I'm currently pursuing my B.Tech in Computer Science at GMR Institute of Technology. My core
              interests include building real-world applications using modern technologies like <strong>ReactJS</strong>,{" "}
              <strong>Java Spring Boot</strong>, and <strong>Python</strong>.
            </p>
            <p className="about-text">
              I love crafting user-friendly interfaces, solving backend challenges, and collaborating on
              impactful projects. I’m also active in extracurriculars like photography, NSS, and content creation.
              My goal is to become a job-ready developer with strong fundamentals and an impressive portfolio.
            </p>
          </Col>
          <Col md={6}>
            <div className="about-box shadow-sm p-3 rounded">
              <ul className="list-unstyled mb-0">
                <li><strong>🎓 Education:</strong> B.Tech CSE, GMR Institute of Technology</li>
                <li><strong>📍 Location:</strong> Andhra Pradesh, India</li>
                <li><strong>💻 Technologies:</strong> React, Spring Boot, Python, MySQL</li>
                <li><strong>📸 Hobbies:</strong> Photography, Games, Coding & Exploring AI Tools</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
