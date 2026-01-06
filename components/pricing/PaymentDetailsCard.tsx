"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  cardholderName: Yup.string()
    .required("Cardholder name is required")
    .min(2, "Name must be at least 2 characters"),
  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Card number must be 16 digits"),
  expiryDate: Yup.string()
    .required("Expiry date is required")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry date must be in MM/YY format"),
  cvc: Yup.string()
    .required("CVC is required")
    .matches(/^\d{3}$/, "CVC must be 3 digits"),
});

export default function PaymentDetailsCard() {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      cardholderName: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Handle payment logic here
      console.log("Payment submitted:", {
        selectedPaymentMethod,
        ...values,
      });
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/pricing?success=true");
    },
  });

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\D/g, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    formik.setFieldValue("cardNumber", formatted);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    formik.setFieldValue("expiryDate", formatted);
  };

  const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, "").substring(0, 3);
    formik.setFieldValue("cvc", v);
  };

  const paymentMethods = [
    {
      id: "gpay",
      name: "G Pay",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
      ),
    },
    {
      id: "apple",
      name: "Pay",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01.01zm-3.67-17.5c.15-1.23 1.13-2.18 2.4-2.3.27 1.18-.72 2.27-1.81 2.61-.23-.84-.28-1.71-.59-2.31z" />
        </svg>
      ),
    },
    {
      id: "stripe",
      name: "Stripe",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l-1.385 4.193c-1.582-.765-3.292-1.11-4.25-1.11zm-.819 7.219c-2.005 0-3.957-1.102-5.499-2.141l1.385-4.192c1.154.754 2.728 1.351 4.114 1.351 2.125 0 3.308-.949 3.308-2.406 0-.898-.593-1.561-2.002-2.405-2.171-.806-3.356-1.426-3.356-2.409 0-1.187 1.032-1.806 2.824-1.806 1.764 0 3.849.457 5.312 1.051l-1.385 4.193c-1.227-.543-2.63-.849-3.927-.849-2.125 0-3.169.949-3.169 2.055 0 .898.622 1.509 1.928 2.305 2.172.806 3.356 1.426 3.356 2.409 0 1.187-1.032 1.806-2.824 1.806z" />
        </svg>
      ),
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.174 1.351 1.05 3.3.927 4.717-.016.225-.032.446-.04.663-.123 1.81-.562 3.075-1.274 3.678-.495.422-1.216.64-2.131.64h-1.084a.804.804 0 0 0-.786.658l-.04.204-.646 4.108-.027.173a.8.8 0 0 1-.785.658H9.39zm.637-4.808h1.343c2.572 0 4.577-.543 5.69-1.81 1.174-1.35 1.05-3.3.927-4.717-.016-.225-.032-.446-.041-.663-.12-1.772-.526-3.013-1.16-3.63-.556-.473-1.316-.695-2.238-.695h-3.926a.896.896 0 0 0-.885.774L6.345 16.5a.643.643 0 0 0 .368.03z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="relative bg-[#161616] rounded-xl border border-[#161616] p-6 md:p-8">
        {/* Close Button */}
        <Link
          href="/pricing"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-orange-500 transition-colors"
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

        {/* Title */}
        <h2 className="text-2xl font-semi-bold text-white mb-6">Pro Membership</h2>

        {/* Payment Method Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              type="button"
              onClick={() => setSelectedPaymentMethod(method.id)}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-colors ${
                selectedPaymentMethod === method.id
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-gray-600 bg-gray-700 hover:border-gray-500"
              }`}
            >
              <span className="text-white">{method.icon}</span>
              <span className="text-white text-sm font-medium">{method.name}</span>
            </button>
          ))}
        </div>

        {/* Payment Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Cardholder Name */}
          <div>
            <label
              htmlFor="cardholderName"
              className="block text-white text-sm font-medium mb-2"
            >
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={formik.values.cardholderName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="John Doe"
              className={`w-full bg-[#111111] border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors ${
                formik.errors.cardholderName && formik.touched.cardholderName
                  ? "border-red-500"
                  : "border-gray-600 focus:border-orange-500"
              }`}
            />
            {formik.errors.cardholderName && formik.touched.cardholderName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.cardholderName}</p>
            )}
          </div>

          {/* Card Number */}
          <div>
            <label
              htmlFor="cardNumber"
              className="block text-white text-sm font-medium mb-2"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formik.values.cardNumber}
              onChange={handleCardNumberChange}
              onBlur={formik.handleBlur}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              className={`w-full bg-[#111111] border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors ${
                formik.errors.cardNumber && formik.touched.cardNumber
                  ? "border-red-500"
                  : "border-gray-600 focus:border-orange-500"
              }`}
            />
            {formik.errors.cardNumber && formik.touched.cardNumber && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.cardNumber}</p>
            )}
          </div>

          {/* Expiry Date and CVC */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="expiryDate"
                className="block text-white text-sm font-medium mb-2"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formik.values.expiryDate}
                onChange={handleExpiryDateChange}
                onBlur={formik.handleBlur}
                placeholder="MM/YY"
                maxLength={5}
                className={`w-full bg-[#111111] border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors ${
                  formik.errors.expiryDate && formik.touched.expiryDate
                    ? "border-red-500"
                    : "border-gray-600 focus:border-orange-500"
                }`}
              />
              {formik.errors.expiryDate && formik.touched.expiryDate && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.expiryDate}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="cvc"
                className="block text-white text-sm font-medium mb-2"
              >
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                value={formik.values.cvc}
                onChange={handleCvcChange}
                onBlur={formik.handleBlur}
                placeholder="123"
                maxLength={3}
                className={`w-full bg-[#111111] border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none transition-colors ${
                  formik.errors.cvc && formik.touched.cvc
                    ? "border-red-500"
                    : "border-gray-600 focus:border-orange-500"
                }`}
              />
              {formik.errors.cvc && formik.touched.cvc && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.cvc}</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Link
              href="/pricing"
              className="flex-1 bg-gray-700 text-white font-semi-bold py-3 rounded-full hover:bg-gray-600 transition-colors text-center"
            >
              Back
            </Link>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="flex-1 bg-orange-500 text-white font-semi-bold py-3 rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formik.isSubmitting ? "Processing..." : "Pay Securely"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

