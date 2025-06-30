'use client';
import React from 'react';
import { useCart } from '@/components/cart/CartContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">My Wishlist</h1>
        {wishlist.length === 0 ? (
          <div className="text-center text-gray-500 py-16">
            <div className="text-6xl mb-4">💖</div>
            <div>Your wishlist is empty.</div>
            <Link href="/products">
              <Button className="mt-6">Browse Products</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {wishlist.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-contain mb-2" />
                <div className="font-medium mb-2 text-center">{item.name}</div>
                <div className="flex gap-2">
                  <Link href={`/products/${item.id}`}><Button size="sm" variant="outline">View</Button></Link>
                  <Button size="sm" variant="destructive" onClick={() => removeFromWishlist(item.id)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 