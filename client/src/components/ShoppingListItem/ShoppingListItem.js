import { useEffect } from "react";
import "./ShoppingListItem.css";

function ShoppingListItem(props) {
  const item = props.item;
  const addToCart = props.addToCart;
  
  useEffect(() => { 

   }, []);
  return (
    <a className="item">
    
      <img src={item.imagePath} className="item-image" />
      <div className="item-details">
      {item.count > 1 && !addToCart && <span>{item.count}</span>}
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div>{item.description}</div>
        {addToCart ? <button onClick={() => addToCart(item)}>AddToCart</button> : ""}
      </div>
    </a>
  );
}

export default ShoppingListItem;
