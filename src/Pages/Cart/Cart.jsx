import { useState, useEffect } from "react";
import { mainText } from "../../App.module.css";
import CustomInput from "../../Components/CustomInput/CustomInput";
import styles from "./Cart.module.css";
import Button from "../../Components/Button/Button.jsx";
import { useOutletContext } from "react-router-dom";
const Cart = () => {
  const [cartItems, setCartItems] = useOutletContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calcCartPriceTotal(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (index, newQuantity) => {
    const newCartItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item,
    );
    setCartItems(newCartItems);
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
                  setValue={(newQuantity) =>
                    handleQuantityChange(index, newQuantity)
                  }
                />
                <Button
                  title="x"
                  className={styles.removeBtn}
                  alt="Delete cart item"
                  bgColor="#2d3436"
                  fgColor="#ffff"
                  onClick={() => {
                    setCartItems(cartItems.filter((a) => a.id !== product.id));
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
