import { createContext, useContext } from 'react';

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  deleteItem: (id) => {},
});

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = CartContext.Provider;
