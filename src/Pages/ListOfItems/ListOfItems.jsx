import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./ListOfItems.module.css";
import { mainText } from "../../App.module.css";

const ListOfItems = (cartItems, addCartItems) => {
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
      <h1 className={mainText}>List of All Items</h1>
      <ul className={styles.cardsContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          productData.map((product) => (
            <li key={product.id}>
              <ProductCard
                id={product.id}
                name={product.title}
                imgUrl={product.image}
                price={product.price}
                cartItems={cartItems}
                addCartItems={addCartItems}
              />
            </li>
          ))
        )}
      </ul>
    </>
  );
};
export default ListOfItems;
