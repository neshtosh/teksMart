'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/components/cart/CartContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, ArrowRight, Loader2, Package, Truck, Shield, CreditCard, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping for now
  const total = subtotal + shipping;

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleQuantityChange = (id: string, change: number) => {
    const item = cart.find(item => item.id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + change);
      updateCartQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      // In a real app, you would redirect to a checkout page
      console.log('Proceeding to checkout...');
      setIsCheckingOut(false);
    }, 1500);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-6 mb-8 text-white">
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Your Shopping Cart</h1>
                <p className="text-blue-100">
                  {cart.length === 0 
                    ? 'Your cart is empty' 
                    : `${cart.length} item${cart.length !== 1 ? 's' : ''} in your cart`}
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

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 px-4 bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="h-12 w-12 text-blue-500" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Looks like you haven't added anything to your cart yet. Let's get shopping!
            </p>
            <Link href="/products">
              <Button className="group gradient-primary hover:opacity-90 transition-all">
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cart.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -50, transition: { duration: 0.2 } }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-20 w-20 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-full w-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/placeholder-product.png';
                            }}
                          />
                        </div>
                        <div className="ml-4 flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-gray-900 line-clamp-2">{item.name}</h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-300 hover:text-red-500 transition-colors p-1 -mr-1"
                              aria-label="Remove item"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="mt-1 text-sm font-medium text-emerald-600">
                            KES {item.price.toLocaleString()}
                          </div>
                          <div className="mt-3 flex items-center">
                            <div className="flex items-center border border-gray-200 rounded-md">
                              <button
                                onClick={() => handleQuantityChange(item.id, -1)}
                                className="h-8 w-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-10 text-center text-sm">{item.quantity}</span>
                              <button
                                onClick={() => handleQuantityChange(item.id, 1)}
                                className="h-8 w-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <div className="ml-auto text-sm font-medium">
                              KES {(item.price * item.quantity).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Clear cart button */}
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCart}
                  className="text-red-500 hover:bg-red-50 hover:text-red-600"
                >
                  <X className="h-4 w-4 mr-1.5" />
                  Clear cart
                </Button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-medium">KES {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : `KES ${shipping.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="h-px bg-gray-100 my-3"></div>
                  <div className="flex justify-between font-semibold text-gray-900">
                    <span>Total</span>
                    <span>KES {total.toLocaleString()}</span>
                  </div>
                </div>
                
                <Button 
                  className={cn(
                    'w-full mt-6 gradient-primary hover:opacity-90 transition-all',
                    isCheckingOut && 'opacity-75 cursor-not-allowed'
                  )}
                  size="lg"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Proceed to Checkout'
                  )}
                </Button>
                
                <Button variant="outline" className="w-full mt-3" size="lg">
                  Request Bulk Quote
                </Button>
                
                <div className="mt-6 space-y-4 text-sm text-gray-500">
                  <div className="flex items-start">
                    <Truck className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Free shipping on orders over KES 10,000</span>
                  </div>
                  <div className="flex items-start">
                    <Package className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Delivery in 3-5 business days</span>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Secure payment with SSL encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}