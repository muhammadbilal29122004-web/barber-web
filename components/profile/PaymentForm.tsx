"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PaymentMethod {
  id: string;
  type: "mastercard" | "visa";
  lastFour: string;
  isPrimary: boolean;
}

export default function PaymentForm() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    { id: "1", type: "mastercard", lastFour: "2028", isPrimary: true },
    { id: "2", type: "visa", lastFour: "2028", isPrimary: false },
  ]);

  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".payment-menu-container")) {
        setOpenMenuId(null);
      }
    };

    if (openMenuId) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenuId]);

  const toggleMenu = (id: string) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleSetPrimary = (id: string) => {
    setPaymentMethods((prev) =>
      prev.map((method) => ({
        ...method,
        isPrimary: method.id === id,
      }))
    );
    setOpenMenuId(null);
  };

  const handleEdit = (id: string) => {
    // Handle edit logic
    console.log("Edit payment method:", id);
    setOpenMenuId(null);
  };

  const handleRemove = (id: string) => {
    setPaymentMethods((prev) => prev.filter((method) => method.id !== id));
    setOpenMenuId(null);
  };

  const handleAddPaymentMethod = () => {
    // Handle add payment method logic
    console.log("Add payment method");
  };

  return (
    <div className="bg-[#1a1a1a] rounded-lg p-8">
      <h2 className="text-white text-lg font-medium mb-6">Payment methods</h2>

      <div className="space-y-4 mb-6">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between p-4 bg-[#2a2a2a] rounded-lg"
          >
            <div className="flex items-center gap-4 flex-1">
              {/* Card Logo */}
              <div className="shrink-0">
                {method.type === "mastercard" ? (
                  <Image
                    src="/icons/card.png"
                    alt="Mastercard"
                    width={36}
                    height={36}
                    className="rounded"
                  />
                ) : (
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rounded"
                  >
                    <rect
                      width="36"
                      height="36"
                      rx="6"
                      fill="white"
                      fillOpacity="0.1"
                    />
                    <g clipPath={`url(#clip0_visa_${method.id})`}>
                      <path
                        d="M22.2374 13.4141C20.2493 13.4141 18.4726 14.4445 18.4726 16.3484C18.4726 18.5318 21.6236 18.6826 21.6236 19.7795C21.6236 20.2413 21.0944 20.6548 20.1904 20.6548C18.9074 20.6548 17.9486 20.0771 17.9486 20.0771L17.5383 21.9983C17.5383 21.9983 18.6429 22.4863 20.1094 22.4863C22.283 22.4863 23.9934 21.4052 23.9934 19.4688C23.9934 17.1616 20.8293 17.0153 20.8293 15.9972C20.8293 15.6354 21.2638 15.239 22.1652 15.239C23.1822 15.239 24.012 15.6591 24.012 15.6591L24.4136 13.8036C24.4136 13.8036 23.5107 13.4141 22.2374 13.4141ZM4.04815 13.5541L4 13.8342C4 13.8342 4.83641 13.9873 5.58972 14.2926C6.55966 14.6428 6.62878 14.8466 6.79212 15.4797L8.57218 22.3419H10.9584L14.6346 13.5541H12.2538L9.89169 19.5289L8.9278 14.4644C8.8394 13.8848 8.39163 13.5541 7.84354 13.5541H4.04815ZM15.5919 13.5541L13.7243 22.3418H15.9945L17.8556 13.5541H15.5919V13.5541ZM28.2538 13.5541C27.7064 13.5541 27.4164 13.8472 27.2035 14.3594L23.8774 22.3418H26.2582L26.7188 21.0114H29.6192L29.8994 22.3418H32L30.1674 13.5541H28.2538ZM28.5635 15.9283L29.2691 19.2259H27.3785L28.5635 15.9283Z"
                        fill="#3C57D8"
                      />
                    </g>
                    <defs>
                      <clipPath id={`clip0_visa_${method.id}`}>
                        <rect
                          width="28"
                          height="9.0944"
                          fill="white"
                          transform="translate(4 13.4023)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                )}
              </div>

              {/* Card Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-white font-medium capitalize">
                    {method.type}
                  </span>
                  {method.isPrimary && (
                    <span className="bg-[#FE9A00] text-white text-xs font-medium px-2 py-1 rounded-full">
                      Primary
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">ending in {method.lastFour}</p>
              </div>
            </div>

            {/* Ellipsis Menu */}
            <div className="relative payment-menu-container">
              <button
                type="button"
                onClick={() => toggleMenu(method.id)}
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="Payment method options"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {openMenuId === method.id && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-[#2a2a2a] border border-gray-700 rounded-lg shadow-lg z-10 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => handleEdit(method.id)}
                    className="w-full text-left px-4 py-2 text-white hover:bg-[#3a3a3a] transition-colors text-sm"
                  >
                    Edit
                  </button>
                  {!method.isPrimary && (
                    <button
                      type="button"
                      onClick={() => handleSetPrimary(method.id)}
                      className="w-full text-left px-4 py-2 text-white hover:bg-[#3a3a3a] transition-colors text-sm"
                    >
                      Set as Primary
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleRemove(method.id)}
                    className="w-full text-left px-4 py-2 text-white hover:bg-[#3a3a3a] transition-colors text-sm"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add Payment Method Button */}
      <button
        type="button"
        onClick={handleAddPaymentMethod}
        className="px-6 py-3 border border-[#FE9A00] text-[#FE9A00] rounded-full hover:bg-[#2a2a2a] hover:bg-opacity-10 transition-colors "
      >
        Add Payment Method
      </button>
    </div>
  );
}

