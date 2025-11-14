import "./App.css";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Thermostat from "./components/Thermostat";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/education">Education</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/achievements">Achievements</Link>
          <Link to="/thermostat">Thermostat</Link>
          <Link to="/timer">Timer</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/thermostat" element={<Thermostat />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
