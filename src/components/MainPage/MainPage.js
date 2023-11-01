import classes from "./MainPage.module.css";
import logo from "../../assets/no-projects.png";

import Button from "../Button/Button";

const MainPage = () => {
  const newPoject = () => {};

  return (
    <div className={classes.main}>
      <img src={logo}></img>
      <h2>No projects Selected</h2>
      <h4>Select a project or get started with a new one</h4>
      <Button btnName="Create new project" type="button" click={newPoject} />
    </div>
  );
};

export default MainPage;
