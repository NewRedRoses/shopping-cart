import Logo from "../Logo";
import { ShoppingCart } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = ({ cartItems }) => {
  return (
    <div className={styles.header}>
      <Link to="/" state={{ cartItems: cartItems }}>
        <Logo />
      </Link>

      <div className={styles.rightContainer}>
        <Link to="/Cart" state={{ cartItems: cartItems }}>
          <ShoppingCart className color="#2D3436" />
        </Link>
        <span>({cartItems.length})</span>
      </div>
    </div>
  );
};

export default Header;
