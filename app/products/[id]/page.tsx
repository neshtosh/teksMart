import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import { ProductImageGallery } from '@/components/ProductImageGallery';
import { ProductTabs } from '@/components/ProductTabs';
import { QuoteRequestModal } from '@/components/QuoteRequestModal';
import { RelatedProducts } from '@/components/RelatedProducts';
import { SAMPLE_PRODUCTS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Heart, Share2, MessageCircle, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import ProductDetailClient from './ProductDetailClient';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = params.id;
  const product = SAMPLE_PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container-custom py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/products">Browse All Products</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  return <ProductDetailClient product={product} />;
}

export async function generateStaticParams() {
  return SAMPLE_PRODUCTS.map(product => ({
    id: product.id,
  }));
}