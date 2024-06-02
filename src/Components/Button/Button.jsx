import styles from "./Button.module.css";
const Button = ({ title, bgColor, fgColor }) => {
  return (
    <>
      <button
        type="button"
        style={{ backgroundColor: bgColor, color: fgColor }}
        className={styles.btn}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
