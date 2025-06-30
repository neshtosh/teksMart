'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface WishlistItem {
  id: string;
  name: string;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Load from localStorage
  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    const wishlistData = localStorage.getItem('wishlist');
    if (cartData) setCart(JSON.parse(cartData));
    if (wishlistData) setWishlist(JSON.parse(wishlistData));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity } : i));
  };

  const clearCart = () => setCart([]);

  const addToWishlist = (item: WishlistItem) => {
    setWishlist(prev => prev.some(i => i.id === item.id) ? prev : [...prev, item]);
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(prev => prev.filter(i => i.id !== id));
  };

  const isInWishlist = (id: string) => wishlist.some(i => i.id === id);

  return (
    <CartContext.Provider value={{ cart, wishlist, addToCart, removeFromCart, updateCartQuantity, clearCart, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
} 