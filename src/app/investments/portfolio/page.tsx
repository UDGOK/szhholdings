import { Metadata } from 'next';
import Hero from '@/components/investments/portfolio/Hero';
import PortfolioGrid from '@/components/investments/portfolio/PortfolioGrid';
import Stats from '@/components/investments/portfolio/Stats';
import Testimonials from '@/components/investments/portfolio/Testimonials';

export const metadata: Metadata = {
  title: 'Investment Portfolio | SZH Holdings',
  description: 'Explore our diverse portfolio of successful investments across multiple sectors.',
};

export default function PortfolioPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <PortfolioGrid />
      <Testimonials />
    </main>
  );
}