import "./App.css";
import HeroImage from "./HeroImage";
import Header from "./Header";
import Project from "./Project";
import About from "./About";
import projects from "./projects.js";

function App() {
  return (
    <>
      <Header />
      <div className="hero-image-container">
        <HeroImage />
      </div>
      <div className="section" id="projects">
        <h1 id="projects">PROJECTS</h1>
        <hr />
        <section className="projects-container">
          <Project project={projects[0]} />
          <Project project={projects[1]} />
          <Project project={projects[2]} />
          <Project project={projects[3]} />
          <Project project={projects[4]} />
          <Project project={projects[5]} />
        </section>
      </div>
      <About />
    </>
  );
}

export default App;
