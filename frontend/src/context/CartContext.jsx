import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("cartItems");
      const parsed = stored ? JSON.parse(stored) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Lỗi parse localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const clearCart = () => setCartItems([]);

  const cartCount = Array.isArray(cartItems)
    ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, clearCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
