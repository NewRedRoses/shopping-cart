import styles from "./Button.module.css";
const Button = ({ title, bgColor, fgColor, onClick }) => {
  return (
    <>
      <button
        type="button"
        style={{ backgroundColor: bgColor, color: fgColor }}
        className={styles.btn}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
