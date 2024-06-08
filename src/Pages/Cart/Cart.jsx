import { mainText } from "../../App.module.css";
import styles from "./Cart.module.css";
import { useLocation } from "react-router-dom";
const Cart = () => {
  const location = useLocation();
  const { cartItems } = location.state;
  return (
    <>
      <h1 className={mainText}>All Items on Cart</h1>
      <ul className={styles.cartContainer}>
        {cartItems.map((product, index) => (
          <li key={index} className={styles.cartItem}>
            {product}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cart;
