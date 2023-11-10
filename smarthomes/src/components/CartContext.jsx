// CartContext.js
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([{}]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  //   const removeFromCart = (itemId) => {
  //     const updatedCart = cartItems.filter((item) => item.id !== itemId);
  //     setCartItems(updatedCart);
  //   };

  //   const clearCart = () => {
  //     setCartItems([]);
  //   };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {/* <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}> */}
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
