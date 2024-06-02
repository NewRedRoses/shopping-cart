import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./ListOfItems.module.css";
const ListOfItems = () => {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((res) => res.json())
      .then((json) => setProductData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <h1 className={styles.mainText}>List of All Items</h1>
      <ul className={styles.cardsContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          productData.map((product) => (
            <li key={product.id}>
              <ProductCard
                name={product.title}
                imgUrl={product.image}
                price={product.price}
              />
            </li>
          ))
        )}
      </ul>
    </>
  );
};
export default ListOfItems;
