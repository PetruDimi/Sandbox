import MainPage from "./components/MainPage/MainPage";
import SideBar from "./components/SideBar/SideBar";
import NewProject from "./components/NewProject/NewProject";

import { useState } from "react";

import classes from "./App.module.css";
function App() {
  const [newPro, setNewPro] = useState(false);
  const [newData, setNewData] = useState([]);

  const newProHandler = () => {
    setNewPro(true);
  };

  const newDataHandler = (incomingData) => {
    setNewData((prevData) => {
      return [...prevData, incomingData];
    });
  };

  console.log(newPro);

  return (
    <div className={classes.main}>
      <SideBar new={newProHandler} list={newData} />
      {!newPro ? (
        <MainPage new={newProHandler} />
      ) : (
        <NewProject
          onSaveData={newDataHandler}
          cancel={() => {
            setNewPro(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
