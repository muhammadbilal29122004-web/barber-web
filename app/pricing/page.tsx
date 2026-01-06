import Header from "@/components/Header";
import PricingHero from "@/components/PricingHero";
import ElevateSection from "@/components/ElevateSection";
import PricingCard from "@/components/PricingCard";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <PricingHero />
      <ElevateSection />
      <PricingCard />
      <Footer />
    </div>
  );
}
