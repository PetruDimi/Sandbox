import classes from "./NewProject.module.css";

import Button from "../Button/Button";

import { useState, useContext } from "react";
import ProjectContext from "../../context/ProjectContext";

const NewProject = (props) => {
  const projectCtx = useContext(ProjectContext);

  const defaultData = {
    title: "",
    description: "",
    date: "",
  };
  const [data, setData] = useState(defaultData);

  const titleChange = (e) => {
    setData((prevData) => {
      return { ...prevData, title: e.target.value };
    });
  };

  const descriptionChange = (e) => {
    setData((prevData) => {
      return { ...prevData, description: e.target.value };
    });
  };

  const dateChange = (e) => {
    setData((prevData) => {
      return { ...prevData, date: e.target.value };
    });
  };

  let formIsValid = false;
  if (data.title && data.description && data.date) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    if (!formIsValid) {
      return;
    }

    e.preventDefault();
    const dataConfig = { ...data, id: data.description.length + Math.random()};
    projectCtx.addItem(dataConfig);
    setData(defaultData);
    props.cancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">TITLE</label>
      <input onChange={titleChange} value={data.title} id="title" type="text" />

      <label htmlFor="description">DESCRIPTION</label>
      <textarea
        onChange={descriptionChange}
        value={data.description}
        id="description"
        typeof="text"
      />

      <label htmlFor="title">DUE DATE</label>
      <input onChange={dateChange} value={data.date} id="date" type="date" />

      <div className={classes.buttons}>
        <Button btnName="Save" type="submit" disabled={!formIsValid} />
        <Button btnName="Cancel" type="button" click={props.cancel} />
      </div>
    </form>
  );
};

export default NewProject;
