import { Metadata } from 'next';
import Hero from '@/components/investments/strategy/Hero';
import Approach from '@/components/investments/strategy/Approach';
import Process from '@/components/investments/strategy/Process';
import Focus from '@/components/investments/strategy/Focus';

export const metadata: Metadata = {
  title: 'Investment Strategy | SZH Holdings',
  description: 'Our strategic approach to investment management and value creation.',
};

export default function StrategyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Approach />
      <Process />
      <Focus />
    </main>
  );
}