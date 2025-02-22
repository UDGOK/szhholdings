import AlternativeHero from "@/components/investments/alternative/Hero";
import AlternativeContent from "@/components/investments/alternative/Content";

export const metadata = {
  title: "Alternative Investments | SHT Investments",
  description: "Discover unique investment opportunities in private equity, venture capital, and other alternative assets.",
};

export default function AlternativePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AlternativeHero />
      <AlternativeContent />
    </main>
  );
}