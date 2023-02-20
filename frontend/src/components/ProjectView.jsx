import projectsList from "@assets/data/projectsList.json";
import "@pages/projects.css";

export default function ProjectView({ id }) {
  console.log(id);
  const findProject = (findid) => {
    return projectsList.filter((e) => e.id === findid)[0];
  };

  return (
    <div className="projectView">
      <img alt="projet" src={`./src/assets/images/${findProject(id).img}`} />
      <div>
        <h2>{findProject(1).title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui id vitae
          libero! Provident odio accusamus sed facere, quibusdam impedit debitis
          iste quos perferendis tempora nisi voluptas labore minima beatae
          deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sint quis sed ea laboriosam libero at esse maxime, minima excepturi
          veniam eveniet consectetur nostrum, architecto nobis aspernatur iusto
          reprehenderit, quia consequuntur?
        </p>
      </div>
    </div>
  );
}
