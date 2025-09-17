import React, { useEffect, useState } from "react";
import CustomNavbar from "./components/CustomNavbar";
import ContactDrawer from "./components/ContactDrawer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <CustomNavbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Contact Sidebar */}
      <ContactDrawer isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* Toggle Button (Bottom-right corner) */}
      <button className="contact-toggle-button" onClick={handleSidebarToggle}>
        Contact Me
      </button>

      <main onClick={closeSidebar}>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </>
  );
};

export default App;
