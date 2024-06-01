import styles from "./ProductCard.module.css";
const ProductCard = ({ imgUrl, name, price }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.productImg} src={imgUrl} alt="" />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <span className={styles.priceCartContainer}>
        <b className={styles.priceContainer}>${price}</b>
        <button type="button">Add to Cart</button>
      </span>
    </div>
  );
};
export default ProductCard;
