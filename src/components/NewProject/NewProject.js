import classes from "./NewProject.module.css";

import Button from "../Button/Button";

const NewProject = (props) => {
  return (
    <form>
      <label htmlFor="title">TITLE</label>
      <input id="title" type="text" />

      <label htmlFor="description">DESCRIPTION</label>
      <textarea id="description" typeof="text" />

      <label htmlFor="title">DUE DATE</label>
      <input id="date" type="date" />

      <div className={classes.buttons}>
        <Button btnName="Save" type="submit" click={""} />
        <Button btnName="Cancel" type="button" click={props.cancel} />
      </div>
    </form>
  );
};

export default NewProject;
