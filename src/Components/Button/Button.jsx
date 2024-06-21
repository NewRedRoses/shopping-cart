import styles from "./Button.module.css";
const Button = (props) => {
  const { onClick, alt, style } = props;
  return (
    <>
      <button
        type="button"
        alt={alt}
        style={style}
        className={styles.btn}
        onClick={onClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
