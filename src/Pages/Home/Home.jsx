import Header from "../../Components/Header/Header";
import Logo from "../../Components/Logo";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Logo className={styles.logo} />
        <h1 className={styles.greeting}>Welcome to the Elegant Mock Store</h1>
        <Link to="All_items">
          <button className={styles.btn}>Browse Items</button>
        </Link>
      </div>
    </>
  );
};
export default Home;
