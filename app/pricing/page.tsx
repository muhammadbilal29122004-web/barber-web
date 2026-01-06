"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import PricingHero from "@/components/pricing/PricingHero";
import ElevateSection from "@/components/ElevateSection";
import PricingCard from "@/components/pricing/PricingCard";
import Footer from "@/components/Footer";
import UpgradeSuccessModal from "@/components/pricing/UpgradeSuccessModal";

// Separate component for search params logic
function PricingContent() {
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
    <>
      <Header />
      <PricingHero />
      <ElevateSection />
      <PricingCard />
      <Footer />
      <UpgradeSuccessModal isOpen={showSuccessModal} onClose={handleCloseModal} />
    </>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Suspense fallback={
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
          <div className="text-white">Loading...</div>
        </div>
      }>
        <PricingContent />
      </Suspense>
    </div>
  );
}
