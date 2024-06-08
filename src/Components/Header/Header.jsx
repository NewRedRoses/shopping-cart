import Logo from "../Logo";
import { ShoppingCart } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = ({ cartItems, addCartItems }) => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/Cart" state={{ cartItems: cartItems }}>
        <ShoppingCart color="#2D3436" />
      </Link>
    </div>
  );
};

export default Header;
