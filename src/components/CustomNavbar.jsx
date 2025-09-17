import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";

const CustomNavbar = ({ isDarkMode, toggleDarkMode }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -70; // offset for navbar
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" fixed="top" bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} className="shadow-sm">
      <Container>
        <Navbar.Brand
          href="#home"
          onClick={() => scrollToSection("home")}
          style={{ fontWeight: "600", fontSize: "20px" }}
        >
          Sai Vamsi Rao
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link onClick={() => scrollToSection("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("about")}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("skills")}>Skills</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("projects")}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")}>Contact</Nav.Link>
            <Button
              variant={isDarkMode ? "outline-light" : "outline-dark"}
              onClick={toggleDarkMode}
              className="ms-2 px-2 py-1"
              title="Toggle dark/light mode"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
