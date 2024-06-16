import "./App.module.css";
import Header from "./Components/Header/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Outlet context={[cartItems, setCartItems]} />
    </>
  );
}

export default App;
