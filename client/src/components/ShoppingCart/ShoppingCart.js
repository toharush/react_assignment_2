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

  function handleSave() {
    let itemState = [];
    props.items.forEach((item) =>
      itemState.push({ _id: item._id, count: item.count })
    );
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: itemState }),
    };
    fetch(`${process.env.REACT_APP_SERVER_API}/cart`, requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  }

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
      <button
        className="custom-button btn-success"
        onClick={() => handleSave()}
      >
        Save To Db
      </button>
    </div>
  );
}

export default ShoppingCart;
