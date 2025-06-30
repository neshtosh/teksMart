'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Shield, Award } from 'lucide-react';
import { Product } from '@/lib/types';

interface ProductTabsProps {
  product: Product;
}

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
        <TabsTrigger value="supplier">Supplier Info</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="capitalize">
                      {tag.replace('-', ' ')}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert) => (
                    <Badge key={cert} className="gradient-primary text-white">
                      <Shield className="h-3 w-3 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-900 mb-2">Trade Terms</h5>
                  <div className="flex flex-wrap gap-1">
                    {product.tradeTerms.map((term) => (
                      <Badge key={term} variant="outline" className="text-blue-700 border-blue-300">
                        {term}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h5 className="font-medium text-emerald-900 mb-2">Payment Terms</h5>
                  <div className="flex flex-wrap gap-1">
                    {product.paymentTerms.map((term) => (
                      <Badge key={term} variant="outline" className="text-emerald-700 border-emerald-300">
                        {term}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="specifications" className="mt-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Specifications</h3>
            <div className="grid gap-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="supplier" className="mt-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                {product.supplier.id ? (
                  <a href={`/suppliers/${product.supplier.id}`} aria-label={`View ${product.supplier.name} profile`} className="flex-shrink-0">
                    <img
                      src={product.supplier.logo}
                      alt={`Logo of ${product.supplier.name}`}
                      className="w-16 h-16 rounded-lg object-cover border"
                    />
                  </a>
                ) : (
                <img
                  src={product.supplier.logo}
                    alt={`Logo of ${product.supplier.name}`}
                  className="w-16 h-16 rounded-lg object-cover border"
                />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {product.supplier.id ? (
                      <a href={`/suppliers/${product.supplier.id}`} aria-label={`View ${product.supplier.name} profile`} className="text-blue-700 hover:underline">
                        <h3 className="text-lg font-semibold text-gray-900">{product.supplier.name}</h3>
                      </a>
                    ) : (
                    <h3 className="text-lg font-semibold text-gray-900">{product.supplier.name}</h3>
                    )}
                    <Badge className="bg-emerald-500 text-white">
                      {product.supplier.verificationLevel === 'premium' ? 'Premium' : 'Verified'}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {product.supplier.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Response: {product.supplier.responseTime}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">{product.supplier.rating}</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">{product.supplier.reviewCount}</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center mb-2">
                    <Shield className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">{product.supplier.businessType}</div>
                  <div className="text-sm text-gray-600">Type</div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Why Choose This Supplier?</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Verified business registration and certifications</li>
                  <li>• Fast response time and professional communication</li>
                  <li>• Consistent quality and reliable delivery</li>
                  <li>• Competitive pricing with flexible payment terms</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="reviews" className="mt-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500">({product.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-4">
                {[
                  {
                    name: "John M.",
                    rating: 5,
                    date: "2 weeks ago",
                    comment: "Excellent quality products and fast shipping. The supplier was very responsive to all my questions."
                  },
                  {
                    name: "Sarah K.",
                    rating: 4,
                    date: "1 month ago",
                    comment: "Good value for money. Products arrived as described. Will order again."
                  },
                  {
                    name: "David L.",
                    rating: 5,
                    date: "1 month ago",
                    comment: "Professional service and competitive pricing. Highly recommended for bulk orders."
                  }
                ].map((review, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{review.name}</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}