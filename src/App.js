import MainPage from "./components/MainPage/MainPage";
import SideBar from "./components/SideBar/SideBar";
import NewProject from "./components/NewProject/NewProject";

import { useState } from "react";

import classes from "./App.module.css";
function App() {
  const [newPro, setNewPro] = useState(false);

  const newProHandler = () => {
    setNewPro(true);
  };
  return (
    <div className={classes.main}>
      <SideBar new={newProHandler} />
      {!newPro ? (
        <MainPage new={newProHandler} />
      ) : (
        <NewProject
          cancel={() => {
            setNewPro(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
