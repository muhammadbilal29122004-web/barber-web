"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import PricingHero from "@/components/PricingHero";
import ElevateSection from "@/components/ElevateSection";
import PricingCard from "@/components/PricingCard";
import Footer from "@/components/Footer";
import UpgradeSuccessModal from "@/components/UpgradeSuccess";

export default function PricingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    // Check if success query param is present
    const success = searchParams.get("success");
    if (success === "true") {
      setShowSuccessModal(true);
      // Remove the query param from URL without reload
      router.replace("/pricing", { scroll: false });
    }
  }, [searchParams, router]);

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <PricingHero />
      <ElevateSection />
      <PricingCard />
      <Footer />
      <UpgradeSuccessModal isOpen={showSuccessModal} onClose={handleCloseModal} />
    </div>
  );
}
