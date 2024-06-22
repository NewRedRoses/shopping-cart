import styles from "./Button.module.css";
const Button = (props) => {
  const { onClick, alt, className } = props;
  return (
    <>
      <button
        type="button"
        alt={alt}
        className={`${className} ${styles.btn}`}
        onClick={onClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
