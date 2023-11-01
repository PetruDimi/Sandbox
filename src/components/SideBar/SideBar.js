import classes from "./SideBar.module.css";

import Button from "../Button/Button";

const SideBar = () => {
  return (
    <div className={classes.main}>
      <h3 className={classes.title}>Your Projects</h3>
      <Button btnName='+ Add Project' type='button' click={''}></Button>
    </div>
  );
};

export default SideBar;
