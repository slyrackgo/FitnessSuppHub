import React from 'react';
import './ShoppingCart.css'; // Import CSS file or include styles directly

const ShoppingCart = ({ cartItems, addToBucket, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button className="add-button" onClick={() => addToBucket(item)}>
              Add
            </button>
            <button className="remove-button" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;