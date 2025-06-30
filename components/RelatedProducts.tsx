'use client';

import { ProductCard } from '@/components/ProductCard';
import { SAMPLE_PRODUCTS } from '@/lib/data';
import { Product } from '@/lib/types';

interface RelatedProductsProps {
  currentProduct: Product;
}

export function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  const relatedProducts = SAMPLE_PRODUCTS
    .filter(product => 
      product.id !== currentProduct.id && 
      (product.category === currentProduct.category || 
       product.supplier.id === currentProduct.supplier.id)
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}