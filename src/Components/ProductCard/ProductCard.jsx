import styles from "./ProductCard.module.css";
import Button from "../Button/Button.jsx";
const ProductCard = ({ id, imgUrl, name, price, cartItems, setCartItems }) => {
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
          bgColor="#2D3436"
          fgColor="#FFFFFF"
          onClick={() => {
            const foundItemIndex = cartItems.findIndex(
              (index) => index.id == id,
            );
            // if not found as a cart item...
            if (foundItemIndex == -1) {
              setCartItems([
                ...cartItems,
                {
                  id: id,
                  name: name,
                  imgUrl: imgUrl,
                  price: price,
                  quantity: 1,
                },
              ]);
            }
            // if cart item exists, modify the quantity amount
            else {
              const newState = cartItems.map((item) => {
                if (item.id == id) {
                  return { ...item, quantity: item.quantity + 1 };
                }
                return item;
              });
              setCartItems(newState);
            }
          }}
        >
          Add to Cart
        </Button>
      </span>
    </div>
  );
};
export default ProductCard;
