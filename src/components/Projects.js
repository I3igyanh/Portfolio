import "./Projects.css";

function Projects() {
  const webProjects = [
    { name: "Portfolio Website", link: "#", description: "React + CSS" },
    { name: "Weather App", link: "#", description: "React (ongoing)" },
    { name: "Todo App", link: "#", description: "React + LocalStorage (future project)" }
  ];

  const graphicsProjects = [
    { name: "Logo Design", link: "#", description: "Illustrator / Photoshop" },
    { name: "Poster Design", link: "#", description: "Photoshop / Canva" }
  ];

  return (
    <div className="projects">
      <h2>Web Projects</h2>
      <div className="project-grid">
        {webProjects.map((proj, index) => (
          <a key={index} href={proj.link} className="project-card">
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
          </a>
        ))}
      </div>

      <h2>Graphics Design Projects</h2>
      <div className="project-grid">
        {graphicsProjects.map((proj, index) => (
          <a key={index} href={proj.link} className="project-card">
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
