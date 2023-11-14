import classes from "./SideBar.module.css";

import Button from "../Button/Button";

const SideBar = (props) => {
  const projectTaskHandler = (e) => {
    console.log(e);
  };

  const projectList = props.list.map((item) => {
    return (
      <li key={Math.random()}>
        {item.title}
      </li>
    );
  });

  return (
    <div className={classes.main}>
      <h3 className={classes.title}>Your Projects</h3>
      <Button btnName="+ Add Project" type="button" click={props.new}></Button>
      <div onClick={projectTaskHandler}  className={classes.ul}>{projectList}</div>
    </div>
  );
};

export default SideBar;
