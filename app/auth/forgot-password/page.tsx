"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularInstructors from "@/components/PopularInstructors";
import PopularTutorials from "@/components/PopularTutorials";
import PopularHaircutStyles from "@/components/PopularHaircutStyles";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import VerificationCodeStep from "./VerificationCodeStep";
import ResetPasswordStep from "./ResetPasswordStep";
import PasswordUpdatedStep from "./PasswordUpdatedStep";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("abc123@email.com");
  const [isLoading, setIsLoading] = useState(false);

  // Prevent body scroll when page is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleVerifyCode = async (code: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleResetPassword = async (password: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 1000);
  };

  const handleContinueToLogin = () => {
    router.push("/auth/login");
  };

  const handleResendCode = () => {
    console.log("Resending code to:", email);
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Home Page Background Content */}
      <div className="absolute inset-0 backdrop-blur-sm">
        <Header />
        <Hero />
        <PopularInstructors />
        <PopularTutorials />
        <PopularHaircutStyles />
        <Testimonials />
        <FAQs />
        <Footer />
      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/40"></div>

      {/* Modal Card - Centered */}
      <div className="relative min-h-screen flex items-center justify-center p-4 z-100">
        <div className="relative w-full max-w-md bg-[#0A0A0A] rounded-2xl shadow-2xl border border-[#0A0A0A] p-8 md:p-10">
          {/* Close Button */}
          <Link
            href="/auth/login"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-orange-500 transition-colors"
            aria-label="Close"
          >
             
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_upgrade_modal)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.2806 18.2194C19.5737 18.5124 19.5737 18.9876 19.2806 19.2806C18.9876 19.5737 18.5124 19.5737 18.2194 19.2806L12 13.0603L5.78062 19.2806C5.48757 19.5737 5.01243 19.5737 4.71938 19.2806C4.42632 18.9876 4.42632 18.5124 4.71938 18.2194L10.9397 12L4.71938 5.78062C4.42632 5.48757 4.42632 5.01243 4.71938 4.71938C5.01243 4.42632 5.48757 4.42632 5.78062 4.71938L12 10.9397L18.2194 4.71938C18.5124 4.42632 18.9876 4.42632 19.2806 4.71938C19.5737 5.01243 19.5737 5.48757 19.2806 5.78062L13.0603 12L19.2806 18.2194Z"
                fill="#737373"
              />
            </g>
            <defs>
              <clipPath id="clip0_upgrade_modal">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          </Link>

          {/* Step 1: Verification Code */}
          {step === 1 && (
            <VerificationCodeStep
              email={email}
              isLoading={isLoading}
              onVerify={handleVerifyCode}
              onResend={handleResendCode}
            />
          )}

          {/* Step 2: Password Reset */}
          {step === 2 && (
            <ResetPasswordStep
              isLoading={isLoading}
              onReset={handleResetPassword}
              onBack={() => setStep(1)}
            />
          )}

          {/* Step 3: Password Updated Success */}
          {step === 3 && (
            <PasswordUpdatedStep onContinue={handleContinueToLogin} />
          )}
        </div>
      </div>
    </div>
  );
}