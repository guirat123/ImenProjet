"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';

interface BoxItem {
  id: string;
  title: string;
  price: number;
  image: string;
}

interface CartItem extends BoxItem {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: BoxItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: BoxItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        toast.success(`Quantité de ${item.title} mise à jour dans le panier !`);
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        toast.success(`${item.title} ajouté au panier !`);
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const removedItem = prevCart.find(item => item.id === itemId);
      if (removedItem) {
        toast.info(`${removedItem.title} retiré du panier.`);
      }
      return prevCart.filter((item) => item.id !== itemId);
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCart((prevCart) => {
      if (quantity <= 0) {
        return prevCart.filter((item) => item.id !== itemId);
      }
      return prevCart.map((cartItem) =>
        cartItem.id === itemId ? { ...cartItem, quantity } : cartItem
      );
    });
  };

  const clearCart = () => {
    setCart([]);
    toast.info("Le panier a été vidé.");
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};