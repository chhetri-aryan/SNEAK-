import  { createContext } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addToCart: (item) => {},
  removeFromCart: (itemId) => {},
  clearCart: () => {},
  isOpen: false,
  setIsOpen: (isOpen) => {},
  totalCost:0,
});
