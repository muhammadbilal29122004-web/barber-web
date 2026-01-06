"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import VerificationCodeStep from "./VerificationCodeStep";
import ResetPasswordStep from "./ResetPasswordStep";
import PasswordUpdatedStep from "./PasswordUpdatedStep";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("abc123@email.com");
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 relative">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-50"></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-[#0A0A0A] rounded-2xl shadow-2xl border border-[#0A0A0A] p-8 md:p-10">
        {/* Close Button */}
        <Link
          href="/auth/login"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-[#FE9A00] transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
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
  );
}