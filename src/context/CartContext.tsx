"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';

interface BoxItem {
  id: string;
  title: string;
  price: number;
  image?: string; // Made optional
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

  const isSubscriptionItem = (itemId: string) => itemId.startsWith('gamme') || itemId.startsWith('boisson-');

  const addToCart = (item: BoxItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (isSubscriptionItem(item.id)) {
        if (existingItem) {
          toast.info(`${item.title} est déjà dans votre panier.`);
          return prevCart; // Do not increment quantity for subscriptions
        } else {
          toast.success(`${item.title} ajouté au panier !`);
          return [...prevCart, { ...item, quantity: 1 }]; // Add with quantity 1
        }
      } else {
        // Existing logic for regular box items
        if (existingItem) {
          toast.success(`Quantité de ${item.title} mise à jour dans le panier !`);
          return prevCart.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
          );
        } else {
          toast.success(`${item.title} ajouté au panier !`);
          return [...prevCart, { ...item, quantity: 1 }];
        }
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
      if (isSubscriptionItem(itemId)) {
        // For subscription items, only allow removal (quantity 0)
        if (quantity <= 0) {
          return prevCart.filter((item) => item.id !== itemId);
        }
        // Otherwise, do not allow quantity changes for subscriptions
        return prevCart;
      } else {
        // Existing logic for regular box items
        if (quantity <= 0) {
          return prevCart.filter((item) => item.id !== itemId);
        }
        return prevCart.map((cartItem) =>
          cartItem.id === itemId ? { ...cartItem, quantity } : cartItem
        );
      }
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