import Logo from "../Logo";
import { ShoppingCart } from "lucide-react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <Logo className={styles.test} />
      <ShoppingCart color="#2D3436" />
    </div>
  );
};

export default Header;
