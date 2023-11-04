import classes from "./SideBar.module.css";

import Button from "../Button/Button";

const SideBar = (props) => {
  return (
    <div className={classes.main}>
      <h3 className={classes.title}>Your Projects</h3>
      <Button btnName='+ Add Project' type='button' click={props.new}></Button>
    </div>
  );
};

export default SideBar;
