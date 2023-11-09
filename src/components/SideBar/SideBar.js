import classes from "./SideBar.module.css";

import Button from "../Button/Button";

const SideBar = (props) => {
  console.log(props.list);
  const projectList = props.list.map((item) => {
    return <li key={Math.random()}><button>{item.title}</button></li>;
  });

  console.log(projectList);
  return (
    <div className={classes.main}>
      <h3 className={classes.title}>Your Projects</h3>
      <Button btnName="+ Add Project" type="button" click={props.new}></Button>
      <ul>{projectList}</ul>
    </div>
  );
};

export default SideBar;
