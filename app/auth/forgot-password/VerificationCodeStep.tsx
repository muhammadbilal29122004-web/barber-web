"use client";

import { useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface VerificationCodeStepProps {
  email: string;
  isLoading: boolean;
  onVerify: (code: string) => void;
  onResend: () => void;
}

// Validation will be handled manually since we use an array for code inputs

export default function VerificationCodeStep({
  email,
  isLoading,
  onVerify,
  onResend,
}: VerificationCodeStepProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const formik = useFormik({
    initialValues: {
      code: ["", "", "", ""],
    },
    validate: (values) => {
      const codeString = values.code.join("");
      const errors: { code?: string } = {};
      
      if (codeString.length !== 4) {
        errors.code = "Please enter the complete 4-digit code";
      } else if (!/^\d+$/.test(codeString)) {
        errors.code = "Code must contain only numbers";
      }
      
      return Object.keys(errors).length > 0 ? errors : {};
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      const codeString = values.code.join("");
      onVerify(codeString);
    },
  });

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newCode = [...formik.values.code];
    newCode[index] = value;
    formik.setFieldValue("code", newCode);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Clear error when user types
    if (formik.errors.code) {
      formik.setFieldError("code", "");
    }
  };

  const handleCodeKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !formik.values.code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleCodePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 4);
    const newCode = ["", "", "", ""];
    pastedData.split("").forEach((char, index) => {
      if (index < 4 && /^\d$/.test(char)) {
        newCode[index] = char;
      }
    });
    formik.setFieldValue("code", newCode);
    const nextEmptyIndex = newCode.findIndex((val) => !val);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[3]?.focus();
    }
  };

  const handleResend = () => {
    formik.setFieldValue("code", ["", "", "", ""]);
    formik.setFieldError("code", "");
    inputRefs.current[0]?.focus();
    onResend();
  };

  return (
    <>
      {/* Title */}
      <h1 className="text-3xl font-bold text-white text-center mb-2">
        Verification Code
      </h1>
      <p className="text-gray-300 text-center mb-8">
        We've sent a 4-digit code to your email: {email}
      </p>

      {/* Verification Code Form */}
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Code Input Fields */}
        <div className="flex justify-center gap-3">
          {formik.values.code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleCodeKeyDown(index, e)}
              onPaste={index === 0 ? handleCodePaste : undefined}
              className={`w-12 h-12 md:w-14 md:h-14 text-center text-xl font-semibold bg-gray-700 border rounded-lg text-white focus:outline-none transition-colors ${
                formik.errors.code
                  ? "border-red-500"
                  : "border-gray-600 focus:border-[#FE9A00]"
              }`}
            />
          ))}
        </div>
        {formik.errors.code && (
          <p className="text-red-500 text-sm text-center">{formik.errors.code}</p>
        )}

        {/* Confirm Button */}
        <button
          type="submit"
          disabled={isLoading || formik.values.code.join("").length !== 4}
          className="w-full bg-[#FE9A00] text-white font-semibold py-3 rounded-lg hover:bg-[#E68900] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Verifying..." : "Confirm"}
        </button>

        {/* Resend Code Link */}
        <div className="text-center">
          <span className="text-gray-300 text-sm">
            Didn't receive a code?{" "}
          </span>
          <button
            type="button"
            onClick={handleResend}
            className="text-[#FE9A00] text-sm hover:text-[#E68900] transition-colors"
          >
            Resend Code
          </button>
        </div>
      </form>
    </>
  );
}