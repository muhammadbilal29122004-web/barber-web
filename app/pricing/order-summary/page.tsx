import Header from "@/components/Header";
import OrderSummaryHeader from "@/components/OrderSummaryHeader";
import MembershipOverviewCard from "@/components/MembershipOverviewCard";
import PaymentDetailsCard from "@/components/PaymentDetailsCard";
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
