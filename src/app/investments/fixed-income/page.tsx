import FixedIncomeHero from "@/components/investments/fixed-income/Hero";
import FixedIncomeContent from "@/components/investments/fixed-income/Content";

export const metadata = {
  title: "Fixed Income | SHT Investments",
  description: "Explore our range of bonds and fixed-income securities for stable, predictable returns.",
};

export default function FixedIncomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <FixedIncomeHero />
      <FixedIncomeContent />
    </main>
  );
}