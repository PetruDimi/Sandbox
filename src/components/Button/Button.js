import classes from "./Button.module.css";

const Button = (props) => {
  const { btnName, type, click } = props;
  return (
    <div>
      <button onClick={click} type={type} className={classes.button}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;
