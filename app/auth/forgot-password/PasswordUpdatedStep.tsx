"use client";

import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";

interface PasswordUpdatedStepProps {
  onContinue: () => void;
}

export default function PasswordUpdatedStep({
  onContinue,
}: PasswordUpdatedStepProps) {
  return (
    <>
      {/* Success Icon */}
      <div className="flex justify-center mb-6">
      <div className="relative w-20 h-20 flex items-center justify-center">
            <Image
              src="/success.png"
              alt="Success"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-semi-bold text-white text-center mb-2">
        Password Updated!
      </h1>
      <p className="text-gray-300 text-center mb-8">
        You can now log in using your new password.
      </p>

      {/* Continue to Login Button */}
      <PrimaryButton
        onClick={onContinue}
        fullWidth
        className=" rounded-full hover:bg-[#E68900]"
      >
        Continue to Login
      </PrimaryButton>
    </>
  );
}
