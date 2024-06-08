import styles from "./ProductCard.module.css";
import Button from "../Button/Button.jsx";
const ProductCard = ({ id, imgUrl, name, price, cartItems, addCartItems }) => {
  const {
    cardContainer,
    imgContainer,
    productImg,
    priceCartContainer,
    priceContainer,
  } = styles;
  return (
    <div className={cardContainer}>
      <div className={imgContainer}>
        <img className={productImg} src={imgUrl} alt="" />
      </div>
      <h2 className={styles.name}>{name}</h2>
      <span className={priceCartContainer}>
        <b className={priceContainer}>${price}</b>
        <Button
          title="Add to Cart"
          bgColor="#2D3436"
          fgColor="#FFFFFF"
          onClick={() => addCartItems([...cartItems, id])}
        />
      </span>
    </div>
  );
};
export default ProductCard;
