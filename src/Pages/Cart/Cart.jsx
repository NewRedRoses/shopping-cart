import { mainText } from "../../App.module.css";
import CustomInput from "../../Components/CustomInput/CustomInput";
import styles from "./Cart.module.css";
import { useLocation } from "react-router-dom";
import Button from "../../Components/Button/Button.jsx";

const Cart = () => {
  const location = useLocation();
  const { cartItems } = location.state;
  const updatedCartItems = addQuantityProp(cartItems);
  const total = calcCartPriceTotal(updatedCartItems);
  return (
    <div>
      <h1 className={mainText}>All Items on Cart</h1>
      <ul className={styles.cartContainer}>
        {updatedCartItems.map((product, index) => (
          <li key={index} className={styles.cartItem}>
            <div className={styles["cart-item-content"]}>
              <div className={styles.leftSide}>
                <img
                  className={styles["img-preview"]}
                  src={product.imgUrl}
                  alt=""
                />
                <span>{product.name}</span>
                <span className={styles.itemPrice}>${product.price}</span>
              </div>

              <span className={styles.quantityContainer}>
                <CustomInput
                  className={styles.quantityInput}
                  type="number"
                  startVal={product.quantity}
                  min={1}
                  max={100}
                />
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.placeOrder}>
        <span>Total: ${total}</span>
        <span>
          <Button title="Place Order" />
        </span>
      </div>
    </div>
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
const calcCartPriceTotal = (cartItems) => {
  let total = 0;
  cartItems.map((cartItem) => {
    if (cartItem.quantity != 1) {
      total += cartItem.price * cartItem.quantity;
    } else {
      total += cartItem.price;
    }
  });
  return total.toFixed(2);
};

export default Cart;
