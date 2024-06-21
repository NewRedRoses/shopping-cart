import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./ListOfItems.module.css";
import { mainText } from "../../App.module.css";
import { useOutletContext } from "react-router-dom";

const ListOfItems = () => {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useOutletContext();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((res) => res.json())
      .then((json) => setProductData(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  if (error)
    return (
      <h1>
        A network error was encountered: {error.message}...Please try again
        later
      </h1>
    );

  return (
    <>
      <h1 className={mainText}>List of All Items</h1>

      <ul className={styles.cardsContainer}>
        {loading ? (
          <p>Loading cart items...</p>
        ) : (
          productData.map((product) => (
            <li key={product.id}>
              <ProductCard
                id={product.id}
                name={product.title}
                imgUrl={product.image}
                price={product.price}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </li>
          ))
        )}
      </ul>
    </>
  );
};
export default ListOfItems;
