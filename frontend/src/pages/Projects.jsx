import { useState } from "react";
import projectsList from "@assets/data/projectsList.json";
import ProjectView from "@components/ProjectView";
import "./projects.css";

export default function Projects() {
  const [projectId, setProjectId] = useState(0);

  return (
    <section className="home">
      <h1>Projects</h1>

      {projectId > 0 ? <ProjectView id={projectId} /> : null}

      <div className="projectList">
        {projectsList.map((e) => (
          <div onClick={() => setProjectId(e.id)} className="projectCard">
            <img alt="projet" src={`./src/assets/images/${e.img}`} />
            <div>{e.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
