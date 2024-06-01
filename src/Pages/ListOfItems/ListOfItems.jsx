import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./ListOfItems.module.css";
const ListOfItems = () => {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>; // Loadig screen for when fetching data

  return (
    <>
      <Header />
      <h1 className={styles.mainText}>List of All Items</h1>
      <ul className={styles.cardsContainer}>
        {productData.map((product) => (
          <li key={product.id}>
            <ProductCard
              name={product.title}
              imgUrl={product.image}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListOfItems;
