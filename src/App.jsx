import "./App.module.css";
import Header from "./Components/Header/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function App() {
  const [cartItems, addCartItems] = useState([]);
  return (
    <>
      <Header cartItems={cartItems} addCartItems={addCartItems} />
      <Outlet context={[cartItems, addCartItems]} />
    </>
  );
}

export default App;
