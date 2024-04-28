import React, { useState } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [totalCost, setTotalCost] = useState(0); // Initialize totalCost state



  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      // If the item already exists in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        subtotal: (updatedCartItems[existingItemIndex].quantity + 1) * item.selling_price,   // Calculate subtotal
        quantity: updatedCartItems[existingItemIndex].quantity + 1,

      };
      setCartItems(updatedCartItems);
    } else {
      // If the item is new, add it to the cart with quantity 1 and subtotal to its selling price
      setCartItems([...cartItems, { ...item, quantity: 1, subtotal:item.selling_price, id:item.id }]);
    }
    setTotalCost(totalCost + parseInt(item.selling_price));

  };


  const removeFromCart = (itemId) => {
    // Find the index of the item with the matching itemId
    const indexToRemove = cartItems.findIndex((item) => item.id === itemId);
  
    // If the item is found
    if (indexToRemove !== -1) {
      // Create a copy of the item
      const updatedItem = { ...cartItems[indexToRemove] };
      
      // Decrease the quantity by 1
      if (updatedItem.quantity > 1) {
        updatedItem.quantity -= 1;
        updatedItem.subtotal -= updatedItem.selling_price;
      } else {
        // If quantity is already 1, remove the item from the cartItems array
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(indexToRemove, 1);
        setCartItems(updatedCartItems);
        setTotalCost(totalCost - updatedItem.subtotal);
        

        return; // Exit the function
      }
      
  
      // Update the cartItems array with the modified item
      const updatedCartItems = [...cartItems];
      updatedCartItems[indexToRemove] = updatedItem;
      setTotalCost(totalCost - updatedItem.selling_price);

      setCartItems(updatedCartItems);
      
    }
  };
  

  const clearCart = () => {
    setCartItems([]);
    setTotalCost(0);
  };

  const value = { cartItems, addToCart, removeFromCart, clearCart, isOpen, setIsOpen, totalCost};


  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
