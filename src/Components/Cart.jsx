import React, { useContext } from 'react';
import { CartContext } from '../ContextCart';

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}

export default Cart;