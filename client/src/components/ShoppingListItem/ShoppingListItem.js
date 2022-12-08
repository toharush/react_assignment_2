import "./ShoppingListItem.css";

function ShoppingListItem(props) {
  const item = props.item;
  const addToCart = props.addToCart;
  const handleChangeAmount = props.handleChangeAmount;

  const handleClick = (event) => {
    addToCart(item);
    event.currentTarget.classList.toggle("clicked");
  };

  return (
    <div className={addToCart ? "item shoppingListItem" : "cartListItem item"}>
      <div className="list-group-item">
        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
          <div className="media-body order-2 order-lg-1">
            <h5 className="mt-0 font-weight-bold mb-2">{item.name}</h5>
            <p className="font-italic text-muted mb-0 small">
              {item.description}
            </p>
            <h6 className="font-weight-bold  my-2">$ {item.price}</h6>
            {addToCart ? (
              <button class="custom-button cart-button" onClick={handleClick}>
                <span class="add-to-cart">Add to cart</span>
                <span class="added">Added</span>
                <i class="fas fa-shopping-cart"></i>
                <i class="fas fa-box"></i>
              </button>
            ) : (
              <div className="mainDiv">
                <button
                  className="btn plusMinusButton"
                  onClick={() => handleChangeAmount(item, item.count - 1)}
                >
                  -
                </button>
                <span className="count">{item.count}</span>
                <button
                  className="btn plusMinusButton"
                  onClick={() => handleChangeAmount(item, item.count + 1)}
                >
                  +
                </button>
              </div>
            )}
          </div>
          <img src={item.imagePath} className="ml-lg-5 order-1 order-lg-2" />
        </div>
      </div>
    </div>
  );
}

export default ShoppingListItem;
