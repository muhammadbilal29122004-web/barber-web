"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UpgradeSuccessModal from "@/components/pricing/UpgradeSuccessModal";

export default function EnterCardDetails() {
  const router = useRouter();
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccessOpen(true);
  };

  return (
    <>
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center p-4 sm:p-6 md:p-8" style={{ overflow: 'visible' }}>
      <div
        className="mx-auto flex flex-col w-full"
        style={{
          backgroundColor: 'rgba(10, 10, 10, 1)',
          border: '1px solid rgba(38, 38, 38, 1)',
          borderRadius: 'clamp(20px, 4vw, 40px)',
          maxWidth: '1000px',
          width: '100%',
          minHeight: 'auto',
          padding: 'clamp(20px, 4vw, 50px)',
          gap: 'clamp(20px, 3vw, 39px)',
          overflow: 'visible',
        }}
      >
        {/* Top Section - Back, Logo */}
        <div className="relative flex items-center justify-between mb-[50px]">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white hover:text-[#FE9A00] transition-colors"
          >
            <svg
              width="24"
              height="24"
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
              style={{
                fontFamily: 'Urbanist, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '20px',
                letterSpacing: '0%',
                color: 'rgba(161, 161, 161, 1)',
              }}
            >
              Back
            </span>
          </button>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[8px]">
            <Link href="/" className="flex items-center gap-2">
              <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#FE9A00',
                }}
              >
                Logoipsum
              </span>
            </Link>
          </div>

          {/* Close Button */}
          <Link href="/" className="text-[rgba(161,161,161,1)] hover:text-white transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Title Section */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <h1
            style={{
              fontFamily: 'Anton, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(24px, 5vw, 48px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: 'rgba(255, 255, 255, 1)',
              marginBottom: '12px',
            }}
          >
            Enter Card Details
          </h1>
          <p
            style={{
              fontFamily: 'Urbanist, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: '20px',
              letterSpacing: '0%',
              color: 'rgba(161, 161, 161, 1)',
            }}
          >
            Your card will not be charged during the 3-day free trial.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6" style={{ overflow: 'visible' }}>
          {/* Subscription Summary Card */}
          <div
            className="w-full flex flex-col sm:flex-row justify-between items-center relative"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: 'clamp(20px, 4vw, 50px)',
              maxWidth: '900px',
              width: '100%',
              minHeight: 'auto',
              gap: 'clamp(15px, 2vw, 30px)',
              overflow: 'visible',
            }}
          >

            <div className="text-center sm:text-left">
              <h3
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(18px, 2.5vw, 20px)',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  color: 'rgba(255, 255, 255, 1)',
                  marginBottom: '8px',
                }}
              >
                Pro Membership
              </h3>
              <p
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  color: 'rgba(161, 161, 161, 1)',
                }}
              >
                Monthly subscription
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p
                style={{
                  fontFamily: 'Anton, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(24px, 4vw, 32px)',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: 'rgba(255, 255, 255, 1)',
                  marginBottom: '4px',
                }}
              >
                $29
              </p>
              <p
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  color: 'rgba(161, 161, 161, 1)',
                }}
              >
                /month
              </p>
            </div>
            {/* Most Popular Ribbon */}
            <img 
              src="/Ribbon.png" 
              alt="Most Popular" 
              style={{ 
                position: 'absolute',
                top: '0',
                right: '0',
                width: 'clamp(100px, 15vw, 148px)',
                height: 'auto',
                zIndex: 100,
                display: 'block',
              }} 
            />
          </div>
        </div>

        {/* Payment Details Card */}
        <div
          className="relative w-full flex flex-col"
          style={{
            backgroundColor: 'rgba(22, 22, 22, 1)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: 'clamp(24px, 4vw, 48px)',
            maxWidth: '900px',
            width: '100%',
            minHeight: 'auto',
            gap: 'clamp(24px, 3vw, 32px)',
          }}
        >
          {/* Close Button */}
          <Link
            href="/"
            className="absolute top-4 right-4 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
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

          <h2
            style={{
              fontFamily: 'Urbanist, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(18px, 2.5vw, 20px)',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: 'rgba(255, 255, 255, 1)',
              marginBottom: 'clamp(16px, 2vw, 24px)',
            }}
          >
            Pro Membership
          </h2>

          {/* Payment Method Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
            {/* Google Pay */}
            <button
              type="button"
              className="flex items-center justify-center transition-colors hover:opacity-90"
              style={{
                backgroundColor: 'rgba(45, 45, 45, 1)',
                borderRadius: '52px',
                height: '50px',
                padding: '6px 12px',
                gap: '8px',
                width: '100%',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span style={{
                fontFamily: 'Urbanist, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                color: 'white',
              }}>Pay</span>
            </button>

            {/* Apple Pay */}
            <button
              type="button"
              className="flex items-center justify-center transition-colors hover:opacity-90"
              style={{
                backgroundColor: 'rgba(45, 45, 45, 1)',
                borderRadius: '52px',
                height: '50px',
                padding: '6px 12px',
                gap: '8px',
                width: '100%',
              }}
            >
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01.01zm-3.67-17.5c.15-1.23 1.13-2.18 2.4-2.3.27 1.18-.72 2.27-1.81 2.61-.23-.84-.28-1.71-.59-2.31z" />
              </svg>
              <span style={{
                fontFamily: 'Urbanist, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                color: 'white',
              }}>Pay</span>
            </button>

            {/* Stripe */}
            <button
              type="button"
              className="flex items-center justify-center transition-colors hover:opacity-90"
              style={{
                backgroundColor: 'rgba(45, 45, 45, 1)',
                borderRadius: '52px',
                height: '50px',
                padding: '6px 12px',
                gap: '8px',
                width: '100%',
              }}
            >
              <div className="w-6 h-6 bg-[#635BFF] rounded-full flex items-center justify-center text-[14px] font-bold text-white shrink-0">S</div>
              <span style={{
                fontFamily: 'Urbanist, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                color: 'white',
              }}>Stripe</span>
            </button>

            {/* PayPal */}
            <button
              type="button"
              className="flex items-center justify-center transition-colors hover:opacity-90"
              style={{
                backgroundColor: 'rgba(45, 45, 45, 1)',
                borderRadius: '52px',
                height: '50px',
                padding: '6px 12px',
                gap: '8px',
                width: '100%',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#003087">
                <path d="M7.05 23.85c-.32.06-.6-.17-.65-.49l-1.6-10.15c-.05-.33.18-.63.51-.68.32-.05.6.18.65.5l1.6 10.15c.05.32-.18.63-.51.67zm4.07-11.48c.05.32-.18.63-.51.68-.32.05-.6-.18-.65-.49l-1.6-10.15c-.05-.33.18-.63.51-.68.32-.05.6.18.65.5l1.6 10.15zm7.38-6.07c-1.35-.21-4.71-.53-6.42-.53-2.12 0-3.32 1.05-3.67 3.32-.23 1.48.24 2.87 1.41 3.65.54.36.75.9.52 2.4l-.24 1.54c-.11.7.35 1.34 1.05 1.45.71.11 1.36-.36 1.47-1.06l.24-1.56c.41-2.67 3.03-3.23 4.19-3.06 1.34.21 2.42-.71 2.63-2.07.22-1.41-.65-2.69-2.18-2.93z" />
              </svg>
              <span style={{
                fontFamily: 'Urbanist, sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '-1%',
                color: 'white',
              }}>PayPal</span>
            </button>
          </div>

          {/* Card Details Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Cardholder Name */}
            <div>
              <label
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: 'rgba(161, 161, 161, 1)',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Cardholder Name
              </label>
              <input
                type="text"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                placeholder="John Doe"
                className="w-full text-white placeholder:text-[#525252] focus:outline-none focus:border-[#FF9900] transition-colors"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '16px 25px',
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
                required
              />
            </div>

            {/* Card Number */}
            <div>
              <label
                style={{
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: 'rgba(161, 161, 161, 1)',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Card Number
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
                className="w-full text-white placeholder:text-[#525252] focus:outline-none focus:border-[#FF9900] transition-colors"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '16px 25px',
                  fontFamily: 'Urbanist, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
                required
              />
            </div>

            {/* Expiry Date and CVC */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  style={{
                    fontFamily: 'Urbanist, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: 'rgba(161, 161, 161, 1)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY"
                  className="w-full text-white placeholder:text-[#525252] focus:outline-none focus:border-[#FF9900] transition-colors"
                  style={{
                    backgroundColor: 'rgba(17, 17, 17, 1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '16px 25px',
                    fontFamily: 'Urbanist, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }}
                  required
                />
              </div>
              <div>
                <label
                  style={{
                    fontFamily: 'Urbanist, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: 'rgba(161, 161, 161, 1)',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  CVC
                </label>
                <input
                  type="text"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  placeholder="123"
                  className="w-full text-white placeholder:text-[#525252] focus:outline-none focus:border-[#FF9900] transition-colors"
                  style={{
                    backgroundColor: 'rgba(17, 17, 17, 1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '16px 25px',
                    fontFamily: 'Urbanist, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                  }}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-full hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: 'rgba(254, 154, 0, 1)',
                fontFamily: 'Urbanist, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: 'rgba(0, 0, 0, 1)',
                padding: '13px 24px',
                marginTop: '8px',
              }}
            >
              Subscribe
            </button>
          </form>

          {/* Bottom Disclaimer */}
          <p
            className="text-center mt-6"
            style={{
              fontFamily: 'Urbanist, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '20px',
              letterSpacing: '0%',
              color: 'rgba(161, 161, 161, 1)',
            }}
          >
            Cancel anytime before the trial ends to avoid being charged.
          </p>
        </div>
      </div>
    </div>

      {/* Success Modal */}
      <UpgradeSuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Payment Successful!"
        description="Your Pro Membership subscription has been activated."
        ctaText="Continue"
        ctaHref="/"
      />
    </>
  );
}

