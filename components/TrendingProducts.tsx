'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { TRENDING_PRODUCTS } from '@/lib/data';
import Link from 'next/link';

export function TrendingProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TRENDING_PRODUCTS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TRENDING_PRODUCTS.length) % TRENDING_PRODUCTS.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Products</h2>
            <p className="text-gray-600">Most popular tech products this week</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRENDING_PRODUCTS.map((product, index) => (
            <Card key={product.id} className="product-card card-hover group">
              <div className="relative overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="p-2 bg-white/90 hover:bg-white shadow-md"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <Badge className="absolute top-3 left-3 gradient-primary text-white">
                  Trending
                </Badge>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">by {product.supplier.name}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviewCount})</span>
                    <Badge variant="outline" className="text-xs">
                      {product.supplier.verificationLevel === 'premium' ? 'Premium' : 'Verified'}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">MOQ {product.moqTiers[0].quantity} pcs</span>
                      <span className="text-sm font-semibold text-emerald-600">
                        KES {product.moqTiers[0].pricePerUnit.toLocaleString()}
                      </span>
                    </div>
                    
                    {product.moqTiers[1] && (
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">MOQ {product.moqTiers[1].quantity} pcs</span>
                        <span className="text-sm font-semibold text-blue-600">
                          KES {product.moqTiers[1].pricePerUnit.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1 gradient-primary" asChild>
                      <Link href={`/products/${product.id}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link href="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}