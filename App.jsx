import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ProjectProvider } from "./context/ProjectContext.jsx";
import Nav from "./components/Nav.jsx";
import AeroChat from "./components/AeroChat.jsx";

import Home from "./pages/Home.jsx";
import Forge from "./pages/Forge.jsx";
import Learn from "./pages/Learn.jsx";
import ComponentsPage from "./pages/Components.jsx";
import Simulation from "./pages/Simulation.jsx";
import FlightComputer from "./pages/FlightComputer.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <ProjectProvider>
        <Nav />
        <main className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forge" element={<Forge />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/:lessonId" element={<Learn />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/flight-computer" element={<FlightComputer />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <AeroChat />
      </ProjectProvider>
    </ThemeProvider>
  );
}
