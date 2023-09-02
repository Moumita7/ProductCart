import { useState } from "react";


function CartPage() {
  // Calculate the order totala
  let [cart]=useState([])
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Cart Page</h1>
      {cart.length === 0 ? (
        <p>No product added</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <p>Name: {item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <p>Total: ${calculateTotal()}</p>
          <p>Estimated Delivery Date: 2-3 days</p>
        </div>
      )}
    </div>
  );
}

export default CartPage;



