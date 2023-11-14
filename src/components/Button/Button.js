import classes from "./Button.module.css";

const Button = (props) => {
  const { disabled, btnName, type, click} = props;

  return (
    <div>
      <button onClick={click} type={type} className={disabled ? classes.disabled : classes.button} disabled={disabled}>
        {btnName}
      </button>
    </div>
  );
};

export default Button;
