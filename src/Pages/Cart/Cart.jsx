import Header from "../../Components/Header/Header";
import { mainText } from "../../App.module.css";
import styles from "./Cart.module.css";
import { useLocation } from "react-router-dom";
const Cart = () => {
  const dummyData = ["one", "two", "three", "four"];
  const location = useLocation();
  const { cartItems } = location.state;
  return (
    <>
      <Header />
      <h1 className={mainText}>All Items on Cart</h1>
      {"cart items: " + cartItems}
      <ul className={styles.cartContainer}>
        {dummyData.map((product) => (
          <li key={product} className={styles.cartItem}>
            {product}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cart;
