import styles from "./Button.module.css";
const Button = (props) => {
  const { title, bgColor, fgColor, onClick, alt } = props;
  return (
    <>
      <button
        type="button"
        alt={alt}
        style={{ backgroundColor: bgColor, color: fgColor }}
        className={styles.btn}
        onClick={onClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
