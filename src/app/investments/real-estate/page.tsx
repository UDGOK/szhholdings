import RealEstateHero from "@/components/investments/real-estate/Hero";
import RealEstateContent from "@/components/investments/real-estate/Content";

export const metadata = {
  title: "Real Estate Investments | SHT Investments",
  description: "Explore our premium real estate investment opportunities and REITs portfolio.",
};

export default function RealEstatePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <RealEstateHero />
      <RealEstateContent />
    </main>
  );
}