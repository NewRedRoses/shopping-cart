import "./App.module.css";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function App() {
  const [cartItems, addCartItems] = useState([]);
  return (
    <>
      <Header cartItems={cartItems} addCartItems={addCartItems} />
      <Outlet />
    </>
  );
}

export default App;
