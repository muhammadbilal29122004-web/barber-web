"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileTabs from "@/components/profile/ProfileTabs";
import ProfileForm from "@/components/profile/ProfileForm";
import SecurityForm from "@/components/profile/SecurityForm";
import PaymentForm from "@/components/profile/PaymentForm";
import BillingHistoryForm from "@/components/profile/BillingHistoryForm";

export default function MyAccountPage() {
  const [activeTab, setActiveTab] = useState("edit-profile");

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header activePage="my-account" showUserIcons={true} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-semi-bold text-white mb-8">
            My Account
          </h1>

          {/* Navigation Tabs */}
          <div className="w-full">
            <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Profile Content */}
          <div className="w-full">
            {activeTab === "edit-profile" && <ProfileForm />}
            {activeTab === "security" && <SecurityForm />}
            {activeTab === "payment" && <PaymentForm />}
            {activeTab === "billing-history" && <BillingHistoryForm />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

