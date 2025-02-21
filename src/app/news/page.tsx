import { Metadata } from "next";
import NewsHero from "@/components/news/Hero";
import NewsGrid from "@/components/news/NewsGrid";

export const metadata: Metadata = {
  title: "Real Estate News | SHT Investments",
  description: "Latest news and updates in build-to-rent and commercial real estate across the USA",
};

export default function NewsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <NewsHero />
      <NewsGrid />
    </main>
  );
}