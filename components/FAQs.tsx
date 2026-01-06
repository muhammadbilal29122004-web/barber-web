"use client";

import { useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is Barber Learning Center?",
    answer:
      "Barber Learning Center is an online platform where barbers can learn haircut techniques, business skills, and branding through videos, guides, and quizzes.",
  },
  {
    id: 2,
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. There are no long-term commitments, and you'll continue to have access until the end of your current billing period.",
  },
  {
    id: 3,
    question: "Do I need prior experience to join?",
    answer:
      "No prior experience is required! Our platform offers courses for all skill levels, from complete beginners to advanced barbers looking to refine their techniques.",
  },
  {
    id: 4,
    question: "How much does it cost?",
    answer:
      "We offer flexible pricing plans to suit different needs. You can choose from monthly or annual subscriptions, with special discounts for annual plans. Check our pricing page for current rates.",
  },
  {
    id: 5,
    question: "Are there certificates?",
    answer:
      "Yes! Upon completing courses, you'll receive digital certificates that you can download and share. These certificates demonstrate your commitment to professional development.",
  },
  {
    id: 6,
    question: "How do I access the lessons?",
    answer:
      "Once you sign up, you can access all lessons through your dashboard. Lessons are available 24/7, and you can watch them on any device - desktop, tablet, or mobile.",
  },
  {
    id: 7,
    question: "Who teaches the courses?",
    answer:
      "Our courses are taught by experienced professional barbers with years of industry experience. Each instructor brings unique expertise and real-world knowledge to help you succeed.",
  },
];

export default function FAQs() {
  const [openId, setOpenId] = useState<number | null>(1); // First item open by default

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // Split FAQs into two columns
  const leftColumnFAQs = faqs.filter((_, index) => index % 2 === 0);
  const rightColumnFAQs = faqs.filter((_, index) => index % 2 === 1);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#FE9A00]"></div>
            <h2 className="text-sm font-semibold text-[#FE9A00] uppercase tracking-wider">
              FAQs
            </h2>
            <div className="w-8 h-0.5 bg-[#FE9A00]"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-semi-bold text-white mb-4">
            Your Questions, Answered
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get answers to your questions about courses, subscriptions, and
            learning.
          </p>
        </div>

        {/* FAQ Items Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumnFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-gray-800 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-gray-700"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-white font-semi-bold text-lg flex-1">
                      {faq.question}
                    </h4>
                    <button
                      className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-white transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      aria-label={isOpen ? "Collapse" : "Expand"}
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
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumnFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-gray-800 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-gray-700"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-white font-semi-bold text-lg flex-1">
                      {faq.question}
                    </h4>
                    <button
                      className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-white transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      aria-label={isOpen ? "Collapse" : "Expand"}
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
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

