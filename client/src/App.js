import './App.css';
import { useState, useEffect } from "react";
import ShoppingList from './components/ShoppingList/ShoppingList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_API}/item`);
        const items = await response.json();
        items.map(item => item.count = 1);
        setItems(items);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  function addToCart(item) {
    const itemIndex = cartItems.findIndex(cartItem => cartItem._id == item._id);
    if(itemIndex == -1){
      setCartItems([...cartItems, item])
    } else {
      cartItems[itemIndex].count++ 
      setCartItems([...cartItems])
    }
  }

  return (
    <div className="App">
      <ShoppingList items={items} addToCart={addToCart}/>
      <ShoppingCart items={cartItems} />
    </div>
  );
}

export default App;
