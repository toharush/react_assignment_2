import "./ShoppingList.css";
import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

function ShoppingList(props) {
  const addToCart = props.addToCart;
  const handleChangeAmount = props.handleChangeAmount;

  return (
    <div className="shoppingListBody row">
      {props.items.map((item) => (
        <ShoppingListItem
          addToCart={addToCart}
          item={item}
          handleChangeAmount={handleChangeAmount}
        />
      ))}
    </div>
  );
}

export default ShoppingList;
