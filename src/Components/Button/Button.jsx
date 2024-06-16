import styles from "./Button.module.css";
const Button = ({ title, bgColor, fgColor, onClick, alt }) => {
  return (
    <>
      <button
        type="button"
        alt={alt}
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
