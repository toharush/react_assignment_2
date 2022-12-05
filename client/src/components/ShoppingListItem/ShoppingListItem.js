import "./ShoppingListItem.css";

function ShoppingListItem(props) {
  const name = props.name;
  const imagePath = props.imagePath;
  const price = props.price;
  const description = props.description;

  return (
    <a className="item">
      <img src={imagePath} className="item-image" />
      <div className="item-details">
        <div>{name}</div>
        <div>{price}</div>
        <div>{description}</div>
      </div>
    </a>
  );
}

export default ShoppingListItem;
