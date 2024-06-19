import Logo from "../Logo";
import { ShoppingCart } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = ({ cartItems }) => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>

      <div className={styles.rightContainer}>
        <Link to="/Cart">
          <ShoppingCart className color="#2D3436" />
        </Link>
        {cartItems.length != 0 && (
          <span className={styles.cartCounter}>{cartItems.length}</span>
        )}
      </div>
    </div>
  );
};

export default Header;
