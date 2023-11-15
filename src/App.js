import MainPage from "./components/MainPage/MainPage";
import SideBar from "./components/SideBar/SideBar";
import NewProject from "./components/NewProject/NewProject";

import { useState } from "react";

import classes from "./App.module.css";
function App() {
  const [newPro, setNewPro] = useState(false);
  const [selectedProject, setSelectedProject] = useState();

  const selectedProjectHandler = (id) => {
    setSelectedProject(id)
  };

  const newProHandler = () => {
    setNewPro(true);
  };
  console.log(selectedProject);

  const main = !newPro ? (
    <MainPage new={newProHandler} />
  ) : (
    <NewProject
      cancel={() => {
        setNewPro(false);
      }}
    />
  );

  return (
    <div className={classes.main}>
      <SideBar new={newProHandler} onSelect={selectedProjectHandler} />
      {main}
    </div>
  );
}

export default App;
