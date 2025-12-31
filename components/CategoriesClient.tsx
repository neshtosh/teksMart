'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Laptop, 
  Smartphone, 
  Mouse, 
  Wifi, 
  Headphones,
  ArrowRight,
  Loader2
} from 'lucide-react';
import { CATEGORIES } from '@/lib/constants';
import Link from 'next/link';

const iconMap = {
  Laptop,
  Smartphone,
  Mouse,
  Wifi,
  Headphones
};

interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: Array<{
    id: string;
    name: string;
    productCount: number;
  }>;
  productCount: number;
}

export function CategoriesClient() {
  const [categories, setCategories] = useState<Category[]>(CATEGORIES);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch('/api/categories');
        const result = await response.json();
        
        if (result.success) {
          setCategories(result.data);
        } else {
          throw new Error(result.error || 'Failed to fetch categories');
        }
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
        // Fallback to static data
        setCategories(CATEGORIES);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive selection of tech products across multiple categories,
              all with verified suppliers and competitive wholesale pricing.
            </p>
          </div>
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading categories...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom px-4 sm:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block mb-3 text-sm font-medium text-blue-600 px-3 py-1 bg-blue-50 rounded-full">
            Product Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-blue-600">Tech Categories</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover a wide range of tech products from verified suppliers with competitive wholesale pricing
          </p>
          {error && (
            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r">
              <p className="text-sm text-yellow-800">
                Using cached data. {error}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const gradientColors = [
              'from-blue-500 to-blue-600',
              'from-emerald-500 to-teal-600',
              'from-purple-500 to-indigo-600',
              'from-amber-500 to-orange-500',
              'from-rose-500 to-pink-600',
              'from-violet-500 to-purple-600',
            ];
            const randomGradient = gradientColors[Math.floor(Math.random() * gradientColors.length)];
            
            return (
              <div key={category.id} className="h-full">
                <Link 
                  href={`/products?category=${category.id}`}
                  className="group block h-full"
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200 overflow-hidden bg-white">
                    <div className="relative h-40 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${randomGradient} opacity-10`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${randomGradient.replace('to-', 'bg-gradient-to-br to-')} shadow-lg`}>
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-5 flex flex-col h-[calc(100%-10rem)]">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {category.name}
                          </h3>
                          <div className="flex items-center text-sm text-blue-600">
                            <span>Explore</span>
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-500 mb-4">
                          {category.productCount.toLocaleString()} products available
                        </p>
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-gray-500">Popular Subcategories</span>
                          <span className="text-xs text-blue-600">{category.subcategories.length} total</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.subcategories.slice(0, 3).map((sub) => (
                            <Badge 
                              key={sub.id} 
                              variant="secondary" 
                              className="text-xs px-2.5 py-1 bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors border border-gray-200"
                            >
                              {sub.name}
                            </Badge>
                          ))}
                          {category.subcategories.length > 3 && (
                            <Badge 
                              variant="outline" 
                              className="text-xs px-2.5 py-1 text-gray-500 bg-white border-gray-200 hover:bg-gray-50"
                            >
                              +{category.subcategories.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="text-3xl font-extrabold text-blue-600 mb-1">15K+</div>
            <div className="text-sm font-medium text-gray-500">Total Products</div>
          </div>
          <div className="text-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="text-3xl font-extrabold text-emerald-600 mb-1">500+</div>
            <div className="text-sm font-medium text-gray-500">Verified Suppliers</div>
          </div>
          <div className="text-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="text-3xl font-extrabold text-purple-600 mb-1">98%</div>
            <div className="text-sm font-medium text-gray-500">Customer Satisfaction</div>
          </div>
          <div className="text-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="text-3xl font-extrabold text-orange-500 mb-1">24/7</div>
            <div className="text-sm font-medium text-gray-500">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}

