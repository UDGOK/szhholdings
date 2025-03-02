import StocksHero from "@/components/investments/stocks-etfs/Hero";
import StocksContent from "@/components/investments/stocks-etfs/Content";

export const metadata = {
  title: "Stocks & ETFs | SHT Investments",
  description: "Explore our curated selection of stocks and ETFs for your investment portfolio.",
};

export default function StocksETFsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <StocksHero />
      <StocksContent />
    </main>
  );
}