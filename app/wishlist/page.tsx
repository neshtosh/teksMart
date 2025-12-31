'use client';

import React, { useEffect, useState } from 'react';
import { useCart } from '@/components/cart/CartContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart, ArrowRight, ShoppingBag, X, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

type WishlistItem = {
  id: string;
  name: string;
  image: string;
  price: number;
};

export default function WishlistPage() {
  const { wishlist: initialWishlist, removeFromWishlist } = useCart();
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client before rendering
  useEffect(() => {
    setIsClient(true);
    setWishlist(initialWishlist);
  }, [initialWishlist]);

  const handleRemove = (id: string) => {
    removeFromWishlist(id);
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  if (!isClient) {
    return null; // or a loading state
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-6 mb-8 text-white">
          <div className="relative z-10">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
                <p className="text-blue-100">
                  {wishlist.length === 0 
                    ? 'Your saved items will appear here' 
                    : `You have ${wishlist.length} item${wishlist.length !== 1 ? 's' : ''} in your wishlist`}
                </p>
              </div>
              <Link href="/">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500 opacity-20"></div>
          <div className="absolute -right-10 top-1/2 h-32 w-32 rounded-full bg-purple-500 opacity-20"></div>
        </div>

        {wishlist.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 px-4 bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-pink-500" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Save your favorite products to your wishlist and they'll appear here
            </p>
            <Link href="/products">
              <Button className="group gradient-primary hover:opacity-90 transition-all">
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {wishlist.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="relative group"
                >
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="relative aspect-square bg-gray-50">
                      <img 
                        src={item.image || '/placeholder.png'} 
                        alt={item.name} 
                        className="w-full h-full object-contain p-4" 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.png';
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-full bg-white/90 backdrop-blur-sm hover:bg-red-50 group/remove"
                          onClick={(e) => {
                            e.preventDefault();
                            handleRemove(item.id);
                          }}
                        >
                          <X className="h-4 w-4 text-gray-500 group-hover/remove:text-red-500 transition-colors" />
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-gray-900 line-clamp-2 mb-2">{item.name}</h3>
                      <div className="flex items-center justify-between mt-4">
                        {item.price && (
                          <span className="text-lg font-bold text-emerald-600">
                            KES {item.price.toLocaleString()}
                          </span>
                        )}
                        <div className="flex gap-2">
                          <Button 
                            asChild
                            variant="outline" 
                            size="sm" 
                            className="border-gray-200 hover:bg-gray-50"
                          >
                            <Link href={`/products/${item.id}`} className="flex items-center">
                              <Eye className="h-4 w-4 mr-1.5" />
                              View
                            </Link>
                          </Button>
                          <Button 
                            size="sm" 
                            className="gradient-primary hover:opacity-90"
                            onClick={(e) => {
                              e.preventDefault();
                              // Add to cart logic here
                            }}
                          >
                            <ShoppingBag className="h-4 w-4 mr-1.5" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
} 