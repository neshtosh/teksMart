'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, MessageCircle, Eye } from 'lucide-react';
import { Product } from '@/lib/types';
import Link from 'next/link';
import { useState } from 'react';
import ChatModal, { Message } from '@/components/chat/ChatModal';
import WishlistButton from '@/components/cart/WishlistButton';
import { useCart } from '@/components/cart/CartContext';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const [showChat, setShowChat] = useState(false);
  const { addToCart, isInWishlist } = useCart();

  const minPrice = Math.min(...product.moqTiers.map(tier => tier.pricePerUnit));
  const maxPrice = Math.max(...product.moqTiers.map(tier => tier.pricePerUnit));

  const supplier = product.supplier || {
    id: '1',
    name: 'Supplier Ltd.',
    logo: '/mock/supplier-logo.png',
    verificationLevel: 'verified',
  };

  const image = product.images?.[0] || '/placeholder.png';

  const mockMessages: Message[] = [
    { id: 1, sender: 'supplier', text: 'Hello! How can I help you?', timestamp: '09:00' },
    { id: 2, sender: 'buyer', text: 'I am interested in your product.', timestamp: '09:01' },
  ];

  if (viewMode === 'list') {
    return (
      <Card className="product-card card-hover group w-full">
        <CardContent className="p-0">
          <div className="flex">
            <div className="relative w-48 h-32 flex-shrink-0">
              <img
                src={image}
                alt={product.name}
                className="w-full h-full object-cover rounded-l-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2">
                <WishlistButton 
                  id={product.id} 
                  name={product.name} 
                  image={image} 
                  price={minPrice}
                  iconClass="h-3 w-3"
                  className="p-1.5 bg-white/90 hover:bg-white shadow-md"
                />
              </div>
            </div>

            <div className="flex-1 p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-gray-900 hover:text-blue-600 line-clamp-2 mb-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-600">by {supplier.name}</p>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <Badge className="gradient-primary text-white text-xs">
                    {supplier.verificationLevel === 'premium' ? 'Premium' : 'Verified'}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium ml-1">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({product.reviewCount})</span>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <div className="text-sm text-gray-500 mb-1">
                    MOQ {product.moqTiers[0].quantity} pcs
                  </div>
                  <div className="font-bold text-lg text-emerald-600">
                    KES {minPrice.toLocaleString()}
                    {minPrice !== maxPrice && (
                      <span className="text-sm text-gray-500 font-normal">
                        - {maxPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="p-2">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="gradient-primary" asChild>
                    <Link href={`/products/${product.id}`}>
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-2 right-2 z-10">
            <WishlistButton id={product.id} name={product.name} image={image} />
          </div>
          <Button
            variant="default"
            size="sm"
            className="mt-2 w-full"
            onClick={() => addToCart({ id: product.id, name: product.name, image, price: minPrice, quantity: 1 })}
          >
            Add to Cart
          </Button>
          <Button variant="outline" size="sm" className="mt-2 w-full" onClick={() => setShowChat(true)}>
            Contact Supplier
          </Button>
        </CardContent>

        <ChatModal
          isOpen={showChat}
          onClose={() => setShowChat(false)}
          supplier={supplier}
          initialMessages={mockMessages}
        />
      </Card>
    );
  }

  return (
    <div className="relative h-full flex flex-col">
      <Card className="product-card card-hover group flex flex-col h-full border border-gray-200 hover:border-blue-200 transition-colors duration-300 overflow-hidden">
        <div className="relative overflow-hidden bg-gray-50">
          <Link href={`/products/${product.id}`} className="block aspect-square">
            <img
              src={image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <WishlistButton 
              id={product.id} 
              name={product.name} 
              image={image} 
              price={minPrice}
              iconClass="h-4 w-4"
              className="p-2"
            />
          </div>
          
          <Badge className="absolute top-3 left-3 gradient-primary text-white text-xs font-medium">
            {supplier.verificationLevel === 'premium' ? 'Premium' : 'Verified'}
          </Badge>
        </div>

        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="space-y-3 flex-1">
            <div>
              <Link href={`/products/${product.id}`} className="hover:no-underline">
                <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1 hover:text-blue-600 transition-colors text-sm sm:text-base">
                  {product.name}
                </h3>
              </Link>
              <p className="text-xs sm:text-sm text-gray-500">by {supplier.name}</p>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="flex items-center bg-yellow-50 px-2 py-0.5 rounded-full">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium ml-0.5">{product.rating}</span>
                <span className="text-xs text-gray-400 ml-0.5">({product.reviewCount})</span>
              </div>
            </div>

            <div className="space-y-1.5 mt-2">
              <div className="flex justify-between items-center bg-gray-50 px-2 py-1.5 rounded">
                <span className="text-xs text-gray-600">MOQ {product.moqTiers[0].quantity} pcs</span>
                <span className="text-sm font-semibold text-emerald-600">
                  KES {product.moqTiers[0].pricePerUnit.toLocaleString()}
                </span>
              </div>

              {product.moqTiers[1] && (
                <div className="flex justify-between items-center bg-blue-50 px-2 py-1.5 rounded">
                  <span className="text-xs text-gray-600">MOQ {product.moqTiers[1].quantity} pcs</span>
                  <span className="text-sm font-semibold text-blue-600">
                    KES {product.moqTiers[1].pricePerUnit.toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                asChild
              >
                <Link href={`/products/${product.id}`} className="text-xs sm:text-sm">
                  View Details
                </Link>
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className="p-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowChat(true);
                }}
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
            
            <Button
              variant="default"
              size="sm"
              className="w-full gradient-primary hover:opacity-90 text-xs sm:text-sm"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart({ 
                  id: product.id, 
                  name: product.name, 
                  image, 
                  price: minPrice, 
                  quantity: 1 
                });
              }}
            >
              Add to Cart
            </Button>
          </div>
        </CardContent>
        
        <ChatModal
          isOpen={showChat}
          onClose={() => setShowChat(false)}
          supplier={supplier}
          initialMessages={mockMessages}
        />
      </Card>
    </div>
  );
}
