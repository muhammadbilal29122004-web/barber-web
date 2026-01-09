"use client";

import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import { useRouter } from "next/navigation";

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
  const navigate = useRouter()

  return (
    <section className="bg-[#0A0A0A] py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pricing Card */}
        <div className="relative rounded-2xl shadow-2xl border border-[#161616] overflow-hidden">
         {/* Most Popular Ribbon */}
         <div className="absolute top-0 right-0 z-10 overflow-hidden w-40 h-40 pointer-events-none">
  <div
    className="
      absolute top-10 right-[-33px]
      bg-[#FE9A00] text-black
      text-[11px] font-bold uppercase
      px-12 py-2
      whitespace-nowrap
      rotate-45
      shadow-lg
      text-center
    "
  >
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
                  <span className="text-[#FE9A00] text-lg font-bold uppercase ">
                    MOST POPULAR
                  </span>
                </div>
              </div>

             {/* Membership Title */}
<h3 className="
  text-3xl md:text-4xl font-semibold mb-2
  bg-gradient-to-r from-white via-[#C1C1C1] to-white
  bg-clip-text text-transparent
">
  Pro Membership
</h3>

              {/* Description */}
              <p className="text-[#A1A1A1] text-lg mb-8">
                Everything you need to master the art of barbering
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl md:text-6xl font-semi-bold   bg-gradient-to-r from-white via-[#C1C1C1] to-white bg-clip-text">$29</span>
                <span className="text-[#A1A1A1] text-xl">/ per month</span>
              </div>

              {/* Upgrade Button */}
              <PrimaryButton
                className="inline-block  text-black  px-8 py-4 rounded-full  text-center"
                onClick={() => navigate.push("/pricing/order-summary")}
                >
              
              Upgrade Now
              </PrimaryButton>

              {/* <Link
                href="/pricing/order-summary"
                className="inline-block bg-orange-500 text-white font-semi-bold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors text-center"
              >
                Upgrade Now
              </Link> */}
            </div>

            {/* Right Panel - What's Included */}
            <div className="flex flex-col bg-[#202020] p-6 md:p-8 lg:p-14">
              <h4 className="text-xl font-semi-bold text-white mb-6">What's Included!</h4>
              <div className="grid grid-cols-2 gap-4 ">
                {/* Left Column Features */}
                <div className="space-y-7">
                  {leftColumnFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Image src="/icons/rightarr.png" alt="right-arrow" width={12} height={12} />
                      <span className="text-[#A1A1A1]">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* Right Column Features */}
                <div className="space-y-7">
                  {rightColumnFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Image src="/icons/rightarr.png" alt="right-arrow" width={12} height={12} />
                      <span className="text-[#A1A1A1]">{feature}</span>
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

