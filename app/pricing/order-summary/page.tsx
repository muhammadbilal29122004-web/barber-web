import Header from "@/components/Header";
import OrderSummaryHeader from "@/components/pricing/OrderSummaryHeader";
import MembershipOverviewCard from "@/components/pricing/MembershipOverviewCard";
import PaymentDetailsCard from "@/components/pricing/PaymentDetailsCard";
import Footer from "@/components/Footer";

export default function OrderSummaryPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <OrderSummaryHeader />
      <div className="bg-[#0A0A0A] pb-8">
        <MembershipOverviewCard />
        <PaymentDetailsCard />
      </div>
      <Footer />
    </div>
  );
}
