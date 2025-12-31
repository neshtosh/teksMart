import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrendingProducts } from '@/components/TrendingProducts';
import { CategoriesClient } from '@/components/CategoriesClient';
import { FinancingSection } from '@/components/FinancingSection';
import { FloatingButtons } from '@/components/FloatingButtons';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrendingProducts />
      <CategoriesClient />
      <FinancingSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}