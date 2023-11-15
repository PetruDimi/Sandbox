import classes from "./SideBar.module.css";

import Button from "../Button/Button";
import ProItem from "./ProItem";

import ProjectContext from "../../context/ProjectContext";
import { useContext, useState } from "react";

const SideBar = (props) => {
  const projectCtx = useContext(ProjectContext);


  const projectList = projectCtx.items.map((item) => {
    return <ProItem selected={props.onSelect} id={item.id} key={item.id} title={item.title} />;
  });

  return (
    <div className={classes.main}>
      <h3 className={classes.title}>Your Projects</h3>
      <Button btnName="+ Add Project" type="button" click={props.new}></Button>
      <div className={classes.ul}>{projectList}</div>
    </div>
  );
};

export default SideBar;
