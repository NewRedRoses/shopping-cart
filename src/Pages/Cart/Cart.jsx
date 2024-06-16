import { useState, useEffect } from "react";
import { mainText } from "../../App.module.css";
import CustomInput from "../../Components/CustomInput/CustomInput";
import styles from "./Cart.module.css";
import Button from "../../Components/Button/Button.jsx";
import { useLocation } from "react-router-dom";
const Cart = () => {
  const location = useLocation();
  const { cartItems } = location.state;

  const [updatedCartItems, setUpdatedCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const initialCartItems = addQuantityProp(cartItems);
    setUpdatedCartItems(initialCartItems);
    setTotal(calcCartPriceTotal(initialCartItems));
  }, [cartItems]);

  const handleQuantityChange = (index, newQuantity) => {
    const newCartItems = updatedCartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item,
    );
    setUpdatedCartItems(newCartItems);
    setTotal(calcCartPriceTotal(newCartItems));
  };

  return (
    <div>
      <h1 className={mainText}>All Items on Cart</h1>
      <ul className={styles.cartContainer}>
        {cartItems.map((product, index) => (
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
                  value={product.quantity}
                  min={1}
                  max={100}
                  setValue={(newValue) => handleQuantityChange(index, newValue)}
                />
                <Button
                  title="x"
                  className={styles.removeBtn}
                  alt="Delete cart item"
                  bgColor="#2d3436"
                  fgColor="#ffff"
                  onClick={() => {
                    setUpdatedCartItems(
                      updatedCartItems.filter((a) => a.id !== product.id),
                    );
                  }}
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
  cartItems.forEach((cartItem) => {
    if (cartItem.quantity !== 1) {
      total += cartItem.price * cartItem.quantity;
    } else {
      total += cartItem.price;
    }
  });
  return total.toFixed(2);
};

export default Cart;
