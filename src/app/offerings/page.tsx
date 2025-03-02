import { Metadata } from 'next';
import Hero from '@/components/offerings/Hero';
import CurrentOfferings from '@/components/offerings/CurrentOfferings';
import Process from '@/components/offerings/Process';

export const metadata: Metadata = {
  title: 'The Mead Development Project | SZH Holdings',
  description: 'Explore our transformative mixed-use development opportunity in Mead, Oklahoma, featuring 99 residential homes and 5 commercial buildings.',
};

export default function OfferingsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <CurrentOfferings />
      <Process />
    </main>
  );
}