import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";
import Logo from "./Logo";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const cartItems = location.state.cartItems || [];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    navigate("/Checkout", {
      state: {
        cartItems,
      },
    });
  };

  return (
    <div>
      <Logo />
      <Sidebar />
      <div>
        <h2>Your Cart</h2>
        {cartItems.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>Total: ${calculateTotal()}</p>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
