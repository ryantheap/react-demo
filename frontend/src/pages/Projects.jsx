import projectsList from "@assets/data/projectsList.json";

export default function Projects() {
  return (
    <section className="home">
      <h1>Projects</h1>
      <div className="projectList">
        {projectsList.map((e) => (
          <div className="projectCard">
            <img alt="projet" src={`./src/assets/images/${e.img}`} />
            <div>{e.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
