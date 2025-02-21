import Hero from "@/components/investments/Hero";
import InvestmentCategories from "@/components/investments/InvestmentCategories";

export const metadata = {
  title: "Investments | SHT Investments",
  description: "Explore our diverse range of investment opportunities and solutions.",
};

export default function InvestmentsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <InvestmentCategories />
    </main>
  );
}