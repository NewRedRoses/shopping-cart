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

      <ShoppingCart color="#2D3436" />
    </div>
  );
};

export default Header;
