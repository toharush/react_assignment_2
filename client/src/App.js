import "./App.css";
import { useState, useEffect } from "react";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [shppingCart, setshppingCart] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_API}/item`
        );
        const items = await response.json();
        items.map((item) => (item.count = 1));
        setItems(items);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  function addToCart(item) {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem._id == item._id
    );
    if (itemIndex == -1) {
      setCartItems([...cartItems, item]);
    } else {
      cartItems[itemIndex].count++;
      setCartItems([...cartItems]);
    }
  }

  function handleChangeAmount(item, count) {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem._id == item._id
    );
      if(count > 0){
        cartItems[itemIndex].count = count;
      } else {
        cartItems.splice(itemIndex, 1);
      }
      setCartItems([...cartItems]);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            Shopping Cart
          </a>
        </div>
        <div>
          <button onClick={() => setshppingCart(!shppingCart)}>Go To Cart</button>
        </div>
      </nav>

      <div className="App">
        {shppingCart ? (
          <ShoppingCart items={cartItems} handleChangeAmount={handleChangeAmount} />
        ) : (
          <ShoppingList items={items} addToCart={addToCart}  />
        )}
      </div>
    </div>
  );
}

export default App;
