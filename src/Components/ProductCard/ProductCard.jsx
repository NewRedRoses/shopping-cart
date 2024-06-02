import styles from "./ProductCard.module.css";
import Button from "../Button/Button.jsx";
const ProductCard = ({ imgUrl, name, price }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.productImg} src={imgUrl} alt="" />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <span className={styles.priceCartContainer}>
        <b className={styles.priceContainer}>${price}</b>
        <Button title="Add to Cart" bgColor="#2D3436" fgColor="#FFFFFF" />
      </span>
    </div>
  );
};
export default ProductCard;
