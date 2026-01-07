"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function QuizOverview() {
  const router = useRouter();

  const handleStartQuiz = () => {
    // Navigate to quiz page (you can update this route later)
    router.push("/study-tools/quiz/take");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="w-full max-w-[900px] mx-auto p-4 sm:p-6 md:p-8">
      {/* Main Container */}
      <div className="bg-white/5 rounded-[12px] p-[50px] border border-white/10 shadow-2xl min-h-[644px] flex flex-col justify-between">
        <div>
          {/* Title Section */}
          <div className="mb-10 text-center sm:text-left">
            <h1 className="text-[48px] sm:text-[56px] font-anton leading-tight text-white mb-2 tracking-wide uppercase">
              Quiz Overview
            </h1>
            <p className="text-white font-urbanist text-[20px] font-normal leading-[100%] tracking-[0px] max-w-[455px] mx-auto sm:mx-0">
              Review the details below before you begin.
            </p>
          </div>

          {/* Quiz Metrics - 3 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
            {/* Questions Card */}
            <div className="bg-[#1A1A1A] rounded-[10px] p-[16px] h-[127px] flex flex-col items-center justify-center text-center border border-[#222222]" style={{ gap: '18px' }}>
              <svg className="w-6 h-6 text-[#FF9F0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div className="flex flex-col gap-1">
                <span className="text-[#A1A1A1] font-urbanist text-[14px] font-medium uppercase tracking-wider">Questions</span>
                <p className="text-white font-anton text-[28px] leading-[100%]">5</p>
              </div>
            </div>

            {/* Time Limit Card */}
            <div className="bg-[#1A1A1A] rounded-[10px] p-[16px] h-[127px] flex flex-col items-center justify-center text-center border border-[#222222]" style={{ gap: '18px' }}>
              <svg className="w-6 h-6 text-[#FF9F0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex flex-col gap-1">
                <span className="text-[#A1A1A1] font-urbanist text-[14px] font-medium uppercase tracking-wider">Time Limit</span>
                <p className="text-white font-anton text-[28px] leading-[100%]">10m</p>
              </div>
            </div>

            {/* Score Card */}
            <div className="bg-[#1A1A1A] rounded-[10px] p-[16px] h-[127px] flex flex-col items-center justify-center text-center border border-[#222222]" style={{ gap: '18px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4768 12.8896L16.9918 21.4156C17.0087 21.516 16.9946 21.6192 16.9514 21.7114C16.9081 21.8036 16.8377 21.8803 16.7497 21.9314C16.6616 21.9825 16.56 22.0055 16.4586 21.9974C16.3571 21.9892 16.2605 21.9502 16.1818 21.8856L12.6018 19.1986C12.4289 19.0695 12.219 18.9998 12.0033 18.9998C11.7875 18.9998 11.5776 19.0695 11.4048 19.1986L7.81875 21.8846C7.74007 21.9491 7.64361 21.988 7.54225 21.9962C7.44088 22.0044 7.33942 21.9815 7.25141 21.9305C7.16341 21.8796 7.09303 21.803 7.04967 21.711C7.00631 21.619 6.99204 21.516 7.00875 21.4156L8.52275 12.8896" stroke="#FE9A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z" stroke="#FE9A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-col gap-1">
                <span className="text-[#A1A1A1] font-urbanist text-[14px] font-medium uppercase tracking-wider">Score</span>
                <p className="text-white font-anton text-[28px] leading-[100%]">5</p>
              </div>
            </div>
          </div>

          {/* Instructions Box */}
          <div className="w-full max-w-[800px] h-[180px] mx-auto bg-[#151515] rounded-[10px] pt-[17px] pr-[17px] pb-[1px] pl-[17px] border border-[#222222] mb-12">
            <div className="flex items-center gap-3 mb-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <g clipPath="url(#clip0_181_1792)">
                  <path d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z" stroke="#FE9A00" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 13.3333V10" stroke="#FE9A00" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 6.66699H10.0083" stroke="#FE9A00" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_181_1792">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h2 className="text-white font-urbanist text-[16px] font-medium opacity-60">Instructions</h2>
            </div>
            <ul className="space-y-1 font-urbanist">
              {[
                "Answer all questions within the given time",
                "Each question has only one correct answer",
                "You can review your results after completing the quiz",
                "Take your time and read each question carefully"
              ].map((instruction, i) => (
                <li key={i} className="flex items-start gap-2 text-[#A1A1A1] text-[14px]">
                  <span className="text-white/40">•</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row gap-[10px]">
          <button
            onClick={handleBack}
            className="flex-1 h-[50px] rounded-[50px] border border-[#2D2D2D] bg-transparent text-gray-300 font-urbanist text-sm hover:bg-white/5 transition-colors"
            style={{
              paddingTop: '13px',
              paddingRight: '24px',
              paddingBottom: '13px',
              paddingLeft: '24px',
            }}
          >
            Back
          </button>
          <button
            onClick={handleStartQuiz}
            className="flex-1 h-[50px] rounded-[50px] bg-[#FF9F0A] text-black font-urbanist text-sm font-bold hover:bg-[#E68A00] transition-colors"
            style={{
              paddingTop: '13px',
              paddingRight: '24px',
              paddingBottom: '13px',
              paddingLeft: '24px',
            }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

