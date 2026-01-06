"use client";

import Image from "next/image";
import Link from "next/link";

export default function PricingCard() {
  const leftColumnFeatures = [
    "Unlimited AI Assistant",
    "Advanced Study Tools",
    "New Content Every Month",
    "Downloadable Resources",
  ];

  const rightColumnFeatures = [
    "Premium Video Tutorials",
    "Expert Barber Instructors",
    "Mobile & Desktop Access",
    "Cancel Anytime",
  ];

  return (
    <section className="bg-[#0A0A0A] py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Card */}
        <div className="relative rounded-2xl shadow-2xl border border-[#161616] overflow-hidden">
          {/* Most Popular Tag - Inside Card, Top Right */}
          <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
            <div className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semi-bold transform rotate-3">
              Most Popular
            </div>
          </div>

          {/* Two Panel Layout */}
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Panel - Membership Details */}
            <div className="flex flex-col bg-[#161616] p-6 md:p-8 lg:p-12">
              {/* MOST POPULAR Tag */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-0.5 w-8 bg-orange-500"></div>
                  <span className="text-orange-500 text-sm font-semi-bold uppercase tracking-wide">
                    — MOST POPULAR
                  </span>
                </div>
              </div>

              {/* Membership Title */}
              <h3 className="text-3xl md:text-4xl font-semi-bold text-white mb-4">
                Pro Membership
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-8">
                Everything you need to master the art of barbering
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl md:text-6xl font-semi-bold text-white">$29</span>
                <span className="text-gray-400 text-xl">/ per month</span>
              </div>

              {/* Upgrade Button */}
              <Link
                href="/pricing/order-summary"
                className="inline-block bg-orange-500 text-white font-semi-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors text-center"
              >
                Upgrade Now
              </Link>
            </div>

            {/* Right Panel - What's Included */}
            <div className="flex flex-col bg-[#202020] p-6 md:p-8 lg:p-12">
              <h4 className="text-xl font-semi-bold text-white mb-6">What's Included!</h4>
              <div className="grid grid-cols-2 gap-4">
                {/* Left Column Features */}
                <div className="space-y-4">
                  {leftColumnFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Image src="/icons/rightarr.png" alt="right-arrow" width={12} height={12} />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* Right Column Features */}
                <div className="space-y-4">
                  {rightColumnFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Image src="/icons/rightarr.png" alt="right-arrow" width={12} height={12} />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

