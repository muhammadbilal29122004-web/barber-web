"use client";

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
    <section className="bg-gray-900 py-16 relative">
      {/* Most Popular Tag - Section Level */}
      <div className="absolute top-8 right-4 md:right-8 lg:right-16 z-10">
        <div className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transform rotate-3">
          Most Popular
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Card */}
        <div className="relative bg-[#161616] rounded-2xl shadow-2xl border border-gray-700 p-8 md:p-12">
          {/* Two Panel Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Panel - Membership Details */}
            <div className="flex flex-col">
              {/* MOST POPULAR Tag */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-0.5 w-8 bg-orange-500"></div>
                  <span className="text-orange-500 text-sm font-bold uppercase tracking-wide">
                    MOST POPULAR
                  </span>
                </div>
              </div>

              {/* Membership Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pro Membership
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-8">
                Everything you need to master the art of barbering
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl md:text-6xl font-bold text-white">$29</span>
                <span className="text-gray-400 text-xl">/ per month</span>
              </div>

              {/* Upgrade Button */}
              <Link
                href="/pricing/order-summary"
                className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-center"
              >
                Upgrade Now
              </Link>
            </div>

            {/* Right Panel - What's Included */}
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white mb-6">What's Included</h4>
              <div className="grid grid-cols-2 gap-4">
                {/* Left Column Features */}
                <div className="space-y-4">
                  {leftColumnFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-orange-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* Right Column Features */}
                <div className="space-y-4">
                  {rightColumnFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-orange-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
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
