import Header from "../../Components/Header/Header";
import Logo from "../../Components/Logo";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        {/* @TODO: Figure out why this component doesnt take the css module */}
        <Logo />
        <h1 className={styles.greeting}>Welcome to the Elegant Mock Store</h1>
        <button>Browse Items</button>
      </div>
    </>
  );
};
export default Home;