import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrendingProducts } from '@/components/TrendingProducts';
import { Categories } from '@/components/Categories';
import { FinancingSection } from '@/components/FinancingSection';
import { FloatingButtons } from '@/components/FloatingButtons';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrendingProducts />
      <Categories />
      <FinancingSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}