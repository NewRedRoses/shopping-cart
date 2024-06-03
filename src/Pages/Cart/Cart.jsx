import Header from "../../Components/Header/Header";
import { mainText } from "../../App.module.css";
import styles from "./Cart.module.css";
const Cart = () => {
  const dummyData = ["one", "two", "three", "four"];
  return (
    <>
      <Header />
      <h1 className={mainText}>All Items on Cart</h1>
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
