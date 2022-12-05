import "./ShoppingList.css";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";
import { useState, useEffect } from "react";

function ShoppingList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_API}/item`);
        const json = await response.json();
        setItems(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="shoppingListBody">
      {items.map((item) => (
        <ShoppingListItem
          name={item.name}
          imagePath={item.imagePath}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default ShoppingList;
