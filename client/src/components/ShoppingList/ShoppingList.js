import "./ShoppingList.css";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";
import { useState, useEffect } from "react";

function ShoppingList(props) {
  const addToCart = props.addToCart
  useEffect(() => {  }, []);
  return (
    <div className="shoppingListBody">
      {props.items.map((item) => (
        <ShoppingListItem
          addToCart={addToCart}
          item={item}
        />
      ))}
    </div>
  );
}

export default ShoppingList;
