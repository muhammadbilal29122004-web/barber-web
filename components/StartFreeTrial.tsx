"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import EnterCardDetails from "@/components/EnterCardDetails";
import UpgradeSuccessModal from "@/components/pricing/UpgradeSuccessModal";

export default function StartFreeTrial() {
  const router = useRouter();
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);

  const leftFeatures = [
    "Unlimited AI Assistant",
    "Advanced Study Tools",
    "New Content Every Month",
    "Downloadable Resources",
  ];

  const rightFeatures = [
    "Premium Video Tutorials",
    "Expert Barber Instructors",
    "Mobile & Desktop Access",
    "Cancel Anytime",
  ];

  const handleUpgrade = () => {
    setShowCardDetails(true);
  };

  if (showCardDetails) {
    return <EnterCardDetails onBack={() => setShowCardDetails(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Warm glow effect at bottom left */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: 'clamp(300px, 50vw, 600px)',
          height: 'clamp(200px, 40vw, 400px)',
          background: 'radial-gradient(ellipse at bottom left, rgba(180, 100, 20, 0.15) 0%, transparent 60%)',
        }}
      />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        {/* Main Content Card */}
        <div
          className="relative mx-auto flex flex-col w-full"
          style={{
            backgroundColor: 'rgba(10, 10, 10, 1)',
            border: '1px solid rgba(38, 38, 38, 1)',
            width: '100%',
            maxWidth: '1193px',
            minHeight: 'auto',
            borderRadius: 'clamp(20px, 4vw, 40px)',
            padding: 'clamp(20px, 4vw, 50px)',
            gap: 'clamp(20px, 3vw, 39px)',
          }}
        >
          {/* Most Popular Ribbon - Diagonal Top Right */}


          {/* Top Section - Back, Logo, Close */}
          <div className="relative flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1 sm:gap-2 text-white hover:text-[#FE9A00] transition-colors z-10"
            >
              <svg
                width="clamp(20px, 4vw, 24px)"
                height="clamp(20px, 4vw, 24px)"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.56994 18.8201C9.37994 18.8201 9.18994 18.7501 9.03994 18.6001L2.96994 12.5301C2.67994 12.2401 2.67994 11.7601 2.96994 11.4701L9.03994 5.40012C9.32994 5.11012 9.80994 5.11012 10.0999 5.40012C10.3899 5.69012 10.3899 6.17012 10.0999 6.46012L4.55994 12.0001L10.0999 17.5401C10.3899 17.8301 10.3899 18.3101 10.0999 18.6001C9.95994 18.7501 9.75994 18.8201 9.56994 18.8201Z"
                  fill="rgba(161, 161, 161, 1)"
                />
                <path
                  d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z"
                  fill="rgba(161, 161, 161, 1)"
                />
              </svg>
              <span
                className="hidden sm:inline"
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  color: 'rgba(161, 161, 161, 1)',
                }}
              >
                Back
              </span>
            </button>

            {/* Logo - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="flex items-center gap-1 sm:gap-2">
                <svg
                  width="clamp(30px, 6vw, 50px)"
                  height="clamp(30px, 6vw, 50px)"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.7792 28.1901C18.4706 28.381 19.1988 28.4837 19.9508 28.4838C20.6529 28.4838 21.335 28.3948 21.985 28.2277L18.8296 40L14.8973 38.9468L17.7792 28.1901Z" fill="rgba(254, 154, 0, 1)" />
                  <path d="M28.9453 37.8805L25.0116 38.9337L22.1325 28.1887C23.5335 27.8004 24.7825 27.0456 25.7711 26.0359L28.9453 37.8805Z" fill="rgba(254, 154, 0, 1)" />
                  <path d="M14.0654 25.9679C15.0337 26.9803 16.2609 27.7435 17.6403 28.151L9.01186 36.7795L6.13281 33.9005L14.0654 25.9679Z" fill="rgba(254, 154, 0, 1)" />
                  <path d="M36.6435 30.9881L33.763 33.8672L25.8507 25.9534C26.8274 24.9273 27.539 23.6463 27.8762 22.2208L36.6435 30.9881Z" fill="rgba(254, 154, 0, 1)" />
                  <path d="M12.024 22.2106C12.354 23.6142 13.0485 24.878 14.0003 25.897L2.1195 29.0799L1.06626 25.1476L12.024 22.2106Z" fill="rgba(254, 154, 0, 1)" />
                  <path d="M25.0926 1.05324L22.1412 12.0674L30.8521 3.35648L33.7312 6.23553L25.6785 14.2882L37.7445 11.0561L38.7977 14.9884L27.798 17.9355L39.864 21.169L38.8108 25.1027L27.8877 22.1759C28.0236 21.586 28.096 20.9712 28.0961 20.34C28.0961 15.8425 24.4497 12.1964 19.9523 12.1962C15.4547 12.1962 11.8084 15.8424 11.8084 20.34C11.8085 20.9753 11.8807 21.5941 12.0182 22.1875L0 18.967L1.05324 15.0333L12.053 17.9803L3.22049 9.14786L6.09954 6.26881L14.1522 14.3215L10.9201 2.2555L14.8524 1.20226L17.8458 12.3698L21.1589 0L25.0926 1.05324Z" fill="rgba(254, 154, 0, 1)" />
                </svg>
                <span
                  style={{
                    fontFamily: 'Urbanist, sans-serif',
                    fontSize: 'clamp(14px, 3vw, 20px)',
                    fontWeight: 700,
                    color: '#FE9A00',
                  }}
                >
                  Logoipsum
                </span>
              </Link>
            </div>

            {/* Close Button */}
            <Link
              href="/"
              className="flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <svg
                width="clamp(18px, 3vw, 20px)"
                height="clamp(18px, 3vw, 20px)"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Link>
          </div>

          {/* Title Section */}
          <div className="text-center mb-4 sm:mb-6">
            <h1
              style={{
                fontFamily: 'Anton, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(28px, 5vw, 41px)',
                lineHeight: 'clamp(35px, 6.5vw, 52px)',
                letterSpacing: '0%',
                color: 'rgba(255, 255, 255, 1)',
                textAlign: 'center',
              }}
            >
              Start Your Free Trial
            </h1>
            <p
              style={{
                fontFamily: 'Urbanist, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(14px, 2vw, 15px)',
                lineHeight: '1.5',
                color: 'rgba(161, 161, 161, 1)',
              }}
            >
              Get full access for 3 days. Cancel anytime before the trial ends.
            </p>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col md:flex-row gap-[40px] md:gap-0 relative">
            {/* Left Card - Pro Membership */}
            <div
              className="flex flex-col w-full md:w-auto rounded-2xl md:rounded-l-2xl md:rounded-r-none"
              style={{
                backgroundColor: '#161616',
                width: '100%',
                maxWidth: '504px',
                minHeight: 'auto',
                padding: 'clamp(20px, 4vw, 50px)',
              }}
            >
              {/* Header Group */}
              <div className="flex flex-col gap-4">

                {/* Most Popular Label */}
                <div
                  className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
                  style={{
                    marginTop: 'clamp(-8px, -1.5vw, -12px)'
                  }}
                >
                  <div
                    style={{
                      width: 'clamp(15px, 3vw, 30px)',
                      height: '2px',
                      backgroundColor: 'rgba(254, 154, 0, 1)',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Urbanist, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(12px, 2vw, 18px)',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      textTransform: 'uppercase',
                      color: 'rgba(254, 154, 0, 1)',
                    }}
                  >
                    MOST POPULAR
                  </span>
                </div>

                {/* Membership Name */}
                <h2
                  style={{
                    fontFamily: 'Anton, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(24px, 3.5vw, 28px)',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  Pro Membership
                </h2>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'Urbanist, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(16px, 2.25vw, 18px)',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: 'rgba(161, 161, 161, 1)',
                  }}
                >
                  Everything you need to master the art of barbering.
                </p>
              </div>

              {/* Price */}
              <div
                className="flex items-baseline gap-2 mb-6 sm:mb-8"
                style={{ marginTop: 'clamp(30px, 4vw, 50px)' }}
              >
                <span
                  style={{
                    fontFamily: 'Anton, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(36px, 6vw, 48px)',
                    lineHeight: '1',
                    color: '#FFFFFF',
                  }}
                >
                  $29
                </span>
                <span
                  style={{
                    fontFamily: 'Urbanist, sans-serif',
                    fontWeight: 400,
                    fontSize: 'clamp(16px, 2.25vw, 18px)',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: 'rgba(161, 161, 161, 1)',
                  }}
                >
                  / per month
                </span>
              </div>

              {/* Upgrade Button */}
              <button
                onClick={handleUpgrade}
                className="flex items-center justify-center hover:opacity-90 transition-all hover:shadow-lg"
                style={{
                  backgroundColor: 'rgba(254, 154, 0, 1)',
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: 'rgba(0, 0, 0, 1)',
                  width: '100%',
                  maxWidth: '404px',
                  height: 'clamp(44px, 6vw, 50px)',
                  borderRadius: '50px',
                  paddingTop: 'clamp(10px, 2vw, 13px)',
                  paddingRight: 'clamp(20px, 3vw, 24px)',
                  paddingBottom: 'clamp(10px, 2vw, 13px)',
                  paddingLeft: 'clamp(20px, 3vw, 24px)',
                  gap: '10px',
                }}
              >
                Upgrade Now
              </button>
            </div>

            {/* Vertical Divider */}
            <div
              className="hidden md:block w-px"
              style={{
                backgroundColor: 'rgba(60, 60, 60, 1)',
              }}
            />

            {/* Right Card - What's Included */}
            <div
              className="relative flex-1 flex flex-col w-full rounded-2xl md:rounded-r-2xl md:rounded-l-none"
              style={{
                backgroundColor: 'rgba(32, 32, 32, 1)',
                padding: 'clamp(24px, 4vw, 50px)',
                gap: '16px',
                maxWidth: '589px',
                width: '100%',
                minHeight: 'auto',
                overflow: 'visible',
              }}
            >
              {/* Most Popular Ribbon */}
              <img
                src="/Ribbon.png"
                alt="Most Popular"
                className="absolute z-10 w-[250px] -top-[45px] -right-[65px] md:w-[288px] md:-top-[60px] md:-right-[75px]"
                style={{
                  height: 'auto',
                  pointerEvents: 'none',
                }}
              />
              <h3
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(16px, 2.25vw, 18px)',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  color: 'rgba(255, 255, 255, 1)',
                  marginBottom: 'clamp(16px, 2vw, 24px)',
                }}
              >
                What's Included
              </h3>

              {/* Features List - Two Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4">
                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 3vw, 26px)' }}>
                  {leftFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-2.5">
                      <svg
                        width="clamp(12px, 2vw, 15px)"
                        height="clamp(12px, 2vw, 15px)"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.83626 14.5774C5.23557 14.0131 5.23557 13.0991 5.83626 12.5361L9.73381 8.87767C10.5444 8.11682 10.5448 6.88313 9.73424 6.12227L5.83626 2.46303C5.23557 1.8996 5.23557 0.985596 5.83626 0.422572C6.43695 -0.140857 7.41025 -0.140857 8.01008 0.422572L14.6124 6.6199C15.13 7.10615 15.13 7.89421 14.6124 8.38046L8.01051 14.5778C7.40982 15.1408 6.43608 15.1408 5.83626 14.5774Z"
                          fill="rgba(254, 154, 0, 1)"
                        />
                        <path
                          d="M0.450191 11.707C-0.150064 11.1435 -0.150064 10.2295 0.450191 9.6661L1.70437 8.48887C2.28645 7.94209 2.28645 7.05694 1.70437 6.51098L0.450191 5.33374C-0.150064 4.77031 -0.150064 3.85632 0.450191 3.2933H0.450627C1.05088 2.72906 2.02419 2.72906 2.62444 3.2933L6.16841 6.61985C6.68644 7.1061 6.68644 7.89416 6.16841 8.38041L2.62444 11.7074C2.02462 12.2704 1.05088 12.2704 0.450191 11.707Z"
                          fill="rgba(254, 154, 0, 1)"
                        />
                      </svg>
                      <span
                        style={{
                          fontFamily: 'Urbanist, sans-serif',
                          fontWeight: 400,
                          fontSize: 'clamp(14px, 2.25vw, 18px)',
                          lineHeight: 'clamp(18px, 2.5vw, 22px)',
                          letterSpacing: '0%',
                          color: 'rgba(161, 161, 161, 1)',
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 3vw, 26px)' }}>
                  {rightFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-2.5">
                      <svg
                        width="clamp(12px, 2vw, 15px)"
                        height="clamp(12px, 2vw, 15px)"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.83626 14.5774C5.23557 14.0131 5.23557 13.0991 5.83626 12.5361L9.73381 8.87767C10.5444 8.11682 10.5448 6.88313 9.73424 6.12227L5.83626 2.46303C5.23557 1.8996 5.23557 0.985596 5.83626 0.422572C6.43695 -0.140857 7.41025 -0.140857 8.01008 0.422572L14.6124 6.6199C15.13 7.10615 15.13 7.89421 14.6124 8.38046L8.01051 14.5778C7.40982 15.1408 6.43608 15.1408 5.83626 14.5774Z"
                          fill="rgba(254, 154, 0, 1)"
                        />
                        <path
                          d="M0.450191 11.707C-0.150064 11.1435 -0.150064 10.2295 0.450191 9.6661L1.70437 8.48887C2.28645 7.94209 2.28645 7.05694 1.70437 6.51098L0.450191 5.33374C-0.150064 4.77031 -0.150064 3.85632 0.450191 3.2933H0.450627C1.05088 2.72906 2.02419 2.72906 2.62444 3.2933L6.16841 6.61985C6.68644 7.1061 6.68644 7.89416 6.16841 8.38041L2.62444 11.7074C2.02462 12.2704 1.05088 12.2704 0.450191 11.707Z"
                          fill="rgba(254, 154, 0, 1)"
                        />
                      </svg>
                      <span
                        style={{
                          fontFamily: 'Urbanist, sans-serif',
                          fontWeight: 400,
                          fontSize: 'clamp(14px, 2.25vw, 18px)',
                          lineHeight: 'clamp(18px, 2.5vw, 22px)',
                          letterSpacing: '0%',
                          color: 'rgba(161, 161, 161, 1)',
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer - Inside Card at bottom */}
          <p
            className="text-center"
            style={{
              fontFamily: 'Urbanist, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: '24px',
              letterSpacing: '0%',
              color: 'rgba(161, 161, 161, 1)',
            }}
          >
            You won't be charged if you cancel before the 3-day trial ends.
          </p>
        </div>
      </div>

      {/* Success Modal */}
      <UpgradeSuccessModal
        isOpen={isUpgradeOpen}
        onClose={() => setIsUpgradeOpen(false)}
        title="Upgrade Successful!"
        description="You have successfully upgraded to Pro Membership."
        ctaText="Continue"
        ctaHref="/"
      />
    </div>
  );
}
