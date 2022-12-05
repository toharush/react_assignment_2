import { useState, useEffect } from "react";
import ShoppingList from "../ShoppingList/ShoppingList";
import "./ShoppingCart.css";

function ShoppingCart(props) {
  const handleChangeAmount = props.handleChangeAmount;
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let prc = 0;
    props.items.forEach((item) => {
      prc += item.price * item.count;
    });
    setPrice(prc);
  }, [props.items]);

  return (
    <div className="shopping-cart">
      <div className="title">Shopping Bag</div>
      <div className="shopping-cart-body">
        <ShoppingList
          items={props.items}
          handleChangeAmount={handleChangeAmount}
        />
      </div>
      <div className="total-price">$ {price}</div>
    </div>
  );
}

export default ShoppingCart;
