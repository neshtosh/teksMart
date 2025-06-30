'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Laptop, 
  Smartphone, 
  Mouse, 
  Wifi, 
  Headphones,
  ArrowRight 
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

export function Categories() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {CATEGORIES.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <Link key={category.id} href={`/categories/${category.id}`}>
                <Card className="card-hover group cursor-pointer border-2 hover:border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600">
                        {category.productCount.toLocaleString()} products available
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-4">
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <Badge 
                          key={sub.id} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {sub.name}
                        </Badge>
                      ))}
                      {category.subcategories.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{category.subcategories.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">15K+</div>
            <div className="text-sm text-gray-600">Total Products</div>
          </div>
          <div className="text-center p-4 bg-emerald-50 rounded-lg">
            <div className="text-2xl font-bold text-emerald-600">500+</div>
            <div className="text-sm text-gray-600">Verified Suppliers</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">98%</div>
            <div className="text-sm text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}