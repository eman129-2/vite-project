import React from 'react';
import useCartStore from '../store/cartstore';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = ({ onClose }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCartStore();
  const navigate = useNavigate();
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    navigate('/checkout'); 
  };

  return (
    <div className="cart-page">
      <button className="close-button" onClick={onClose}>Close</button>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty!</h2>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <h3>{item.title}</h3>
                <img src={item.image} alt={item.title} />
                <p>Price: ${item.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>

                <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                  🗑️ Remove
                </button>
              </li>
            ))}
          </ul>
          
  
          <div className="total">
            <h3>Total: ${subtotal.toFixed(2)}</h3> 
          </div>
          
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
