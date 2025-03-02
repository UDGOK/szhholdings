import { Metadata } from 'next';
import Hero from '@/components/investments/case-studies/Hero';
import CaseStudyGrid from '@/components/investments/case-studies/CaseStudyGrid';
import Impact from '@/components/investments/case-studies/Impact';
import Insights from '@/components/investments/case-studies/Insights';

export const metadata: Metadata = {
  title: 'Investment Case Studies | SZH Holdings',
  description: 'Detailed analysis of our successful investments and value creation strategies.',
};

export default function CaseStudiesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <CaseStudyGrid />
      <Impact />
      <Insights />
    </main>
  );
}