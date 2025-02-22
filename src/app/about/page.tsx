"use client";

import AboutHero from '@/components/about/Hero';
import Stats from '@/components/about/Stats';
import Mission from '@/components/about/Mission';

const AboutPage = () => {
  return (
    <main className="flex-1">
      <AboutHero />
      <Stats />
      <Mission />
    </main>
  );
};

export default AboutPage;