import { mainText } from "../../App.module.css";
import styles from "./Cart.module.css";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const { cartItems } = location.state;
  const updatedCartItems = addQuantityProp(cartItems);
  return (
    <>
      <h1 className={mainText}>All Items on Cart</h1>
      <ul className={styles.cartContainer}>
        {updatedCartItems.map((product, index) => (
          <li key={index} className={styles.cartItem}>
            <div className={styles["cart-item-content"]}>
              <img
                className={styles["img-preview"]}
                src={product.imgUrl}
                alt=""
              />
              <span>{product.name}</span>
              <span>{product.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const countQuantity = (cartItems) => {
  let quantityMap = {};
  for (const item of cartItems) {
    if (quantityMap[item.id]) {
      quantityMap[item.id]++;
    } else {
      quantityMap[item.id] = 1;
    }
  }

  let result = [];
  for (const id in quantityMap) {
    result.push({ id, quantity: quantityMap[id] });
  }

  return result;
};

const addQuantityProp = (cartItems) => {
  const quantityList = countQuantity(cartItems);

  const quantityMap = {};
  for (const item of quantityList) {
    quantityMap[item.id] = item.quantity;
  }

  const uniqueItems = [];
  const seenIds = new Set();

  cartItems.forEach((item) => {
    if (!seenIds.has(item.id)) {
      uniqueItems.push({
        ...item,
        quantity: quantityMap[item.id] || 0,
      });
      seenIds.add(item.id);
    }
  });

  return uniqueItems;
};

export default Cart;
