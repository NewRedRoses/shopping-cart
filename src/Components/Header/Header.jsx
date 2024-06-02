import Logo from "../Logo";
import { ShoppingCart } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>

      <Link to="/Cart">
        <ShoppingCart color="#2D3436" />
      </Link>
    </div>
  );
};

export default Header;
