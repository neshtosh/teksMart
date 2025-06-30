import { SUPPLIERS } from '@/lib/data';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SupplierProfileClient from './SupplierProfileClient';

export function generateStaticParams() {
  return SUPPLIERS.map(supplier => ({ id: supplier.id }));
}

export default function SupplierProfilePage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container-custom py-8">
        <SupplierProfileClient supplierId={params.id} />
      </div>
      <Footer />
    </main>
  );
} 