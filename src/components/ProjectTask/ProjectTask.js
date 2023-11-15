import classes from "./ProjectTask.module.css";

import ProjectContext from "../../context/ProjectContext";
import { useContext } from "react";

const ProjectTask = () => {
  const projectCtx = useContext(ProjectContext);

  return (
    <main>
      <h1>Test</h1>
    </main>
  );
};

export default ProjectTask;
