import { useEffect, useState } from "react";
import ShoppingList from "../ShoppingList/ShoppingList"; 
import "./ShoppingCart.css";

function ShoppingCart(props) {
    useEffect(() => {  }, []);
  return (
    <div className="shopping-cart">
      <div className="title">Shopping Bag</div>
      <ShoppingList items={props.items} />
    </div>
  );
}

export default ShoppingCart;
