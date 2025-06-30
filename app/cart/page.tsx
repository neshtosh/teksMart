'use client';
import React from 'react';
import { useCart } from '@/components/cart/CartContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">My Cart</h1>
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 py-16">
            <div className="text-6xl mb-4">🛒</div>
            <div>Your cart is empty.</div>
            <Link href="/products">
              <Button className="mt-6">Browse Products</Button>
            </Link>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-3 mb-3">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded" />
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">KES {item.price.toLocaleString()}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span>Qty:</span>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={e => updateCartQuantity(item.id, Math.max(1, Number(e.target.value)))}
                      className="w-16 border rounded px-2 py-1 text-sm"
                    />
                  </div>
                </div>
                <Button size="sm" variant="destructive" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </div>
            ))}
            <div className="flex justify-between items-center font-bold text-lg mt-4">
              <span>Total:</span>
              <span>KES {total.toLocaleString()}</span>
            </div>
            <div className="flex gap-2 mt-4">
              <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">Request Bulk Quote</Button>
              <Button variant="outline" className="flex-1" onClick={clearCart}>Clear Cart</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 