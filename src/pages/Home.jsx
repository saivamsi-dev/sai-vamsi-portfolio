import React from "react";
import "./Home.css"; // Optional if you want more custom styles
import profileImage from "../assets/profile.jpg"; // Use your image path
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Home = () => {
  return (
    <section id="home" className="py-5 d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Profile Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0" data-aos="fade-right">
            <img
              src={profileImage}
              alt="Sai Vamsi Rao"
              className="img-fluid rounded-circle border border-4 profile-img"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                borderColor: "var(--bs-primary)"
              }}
            />
          </div>

          {/* Intro Text */}
          <div className="col-md-7 text-center text-md-start" data-aos="fade-left">
            <h1 className="display-5 fw-bold">Hi, I'm Sai Vamsi Rao</h1>
            <p className="lead mb-3">
              Passionate Full Stack Developer | React | Spring Boot | MySQL | Open Source Contributor
            </p>
            <a href="#projects" className="btn btn-primary btn-lg mt-2">
              View Projects
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
