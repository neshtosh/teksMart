'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import { ProductImageGallery } from '@/components/ProductImageGallery';
import { ProductTabs } from '@/components/ProductTabs';
import { QuoteRequestModal } from '@/components/QuoteRequestModal';
import { RelatedProducts } from '@/components/RelatedProducts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Heart, Share2, MessageCircle, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import ChatModal from '@/components/chat/ChatModal';
import WishlistButton from '@/components/cart/WishlistButton';
import { useCart } from '@/components/cart/CartContext';

export default function ProductDetailClient({ product }: { product: any }) {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(10);
  const [showChat, setShowChat] = useState(false);
  const { toast } = useToast();
  const { addToCart } = useCart();
  const supplier = product.supplier || { id: '1', name: 'Supplier Ltd.', logo: '/mock/supplier-logo.png' };
  const mockMessages = [
    { id: 1, sender: 'supplier' as 'supplier', text: 'Hello! How can I help you?', timestamp: '09:00' },
    { id: 2, sender: 'buyer' as 'buyer', text: 'I am interested in your product.', timestamp: '09:01' },
  ];

  const currentTier = product.moqTiers.find((tier: any) => selectedQuantity >= tier.quantity) || product.moqTiers[0];
  const totalPrice = currentTier.pricePerUnit * selectedQuantity;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container-custom py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/products" className="hover:text-blue-600 flex items-center gap-1" aria-label="Back to Products">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <ProductImageGallery images={product.images} productName={product.name} />
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                    {product.name}
                    <WishlistButton id={product.id} name={product.name} image={product.images[0]} />
                  </h1>
                  <Link href={`/suppliers/${product.supplier.id}`} className="text-blue-700 hover:underline" aria-label={`View ${product.supplier.name} profile`}>
                    <span className="text-gray-600">by {product.supplier.name}</span>
                  </Link>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" aria-label="Add to Wishlist">
                    <WishlistButton id={product.id} name={product.name} image={product.images[0]} />
                  </Button>
                  <Button variant="outline" size="sm" aria-label="Share Product">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-emerald-500 text-white">
                  {product.supplier.verificationLevel === 'premium' ? 'Premium Supplier' : 'Verified Supplier'}
                </Badge>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-500">({product.reviewCount} reviews)</span>
                </div>
              </div>
            </div>
            {/* MOQ Pricing */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">MOQ Pricing Tiers</h3>
                <div className="space-y-3">
                  {product.moqTiers.map((tier: any, index: number) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                        selectedQuantity >= tier.quantity
                          ? 'border-blue-400 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedQuantity(tier.quantity)}
                    >
                      <div>
                        <div className="font-medium">MOQ {tier.quantity.toLocaleString()} pcs</div>
                        {tier.discount && tier.discount > 0 && (
                          <div className="text-sm text-emerald-600">Save {tier.discount}%</div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">
                          KES {tier.pricePerUnit.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">per unit</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Selected Quantity:</span>
                    <span className="font-medium">{selectedQuantity.toLocaleString()} pcs</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Unit Price:</span>
                    <span className="font-medium">KES {currentTier.pricePerUnit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Price:</span>
                    <span className="text-blue-600">KES {totalPrice.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg"
                onClick={() => setShowQuoteModal(true)}
                aria-label="Request Quote"
              >
                Request Quote
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => addToCart({ id: product.id, name: product.name, image: product.images[0], price: currentTier.pricePerUnit, quantity: selectedQuantity })}
                  aria-label="Add to Cart"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowChat(true)}
                  aria-label="Contact Supplier"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Supplier
                </Button>
              </div>
            </div>
            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Lead Time:</span>
                <div className="font-medium">{product.leadTime}</div>
              </div>
              <div>
                <span className="text-gray-500">Response Time:</span>
                <div className="font-medium">{product.supplier.responseTime}</div>
              </div>
              <div>
                <span className="text-gray-500">Trade Terms:</span>
                <div className="font-medium">{product.tradeTerms.join(', ')}</div>
              </div>
              <div>
                <span className="text-gray-500">Payment Terms:</span>
                <div className="font-medium">{product.paymentTerms.join(', ')}</div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Details Tabs */}
        <ProductTabs product={product} />
        {/* Related Products */}
        <RelatedProducts currentProduct={product} />
      </div>
      {/* Quote Request Modal */}
      <QuoteRequestModal
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
        product={product}
        selectedQuantity={selectedQuantity}
      />
      <ChatModal
        isOpen={showChat}
        onClose={() => setShowChat(false)}
        supplier={supplier}
        initialMessages={mockMessages}
      />
      <Footer />
      <FloatingButtons />
    </main>
  );
} 