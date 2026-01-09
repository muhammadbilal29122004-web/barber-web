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
      <div className="bg-white/5 rounded-[12px] border border-white/10 shadow-2xl flex flex-col justify-between" style={{ padding: 'clamp(20px, 5vw, 50px)', minHeight: 'clamp(500px, 70vh, 644px)' }}>
        <div>
          {/* Title Section */}
          <div className="mb-6 sm:mb-8 md:mb-10 text-center sm:text-left">
            <h1 className="font-anton leading-tight text-white mb-2 sm:mb-2 tracking-wide uppercase" style={{ fontSize: 'clamp(32px, 6vw, 56px)' }}>
              Quiz Overview
            </h1>
            <p className="text-white font-urbanist font-normal leading-[100%] tracking-[0px] max-w-[455px] mx-auto sm:mx-0" style={{ fontSize: 'clamp(16px, 2.5vw, 20px)' }}>
              Review the details below before you begin.
            </p>
          </div>

          {/* Quiz Metrics - 3 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
            {/* Questions Card */}
            <div className="bg-[#1A1A1A] rounded-[10px] border border-[#222222] flex flex-col items-center justify-center text-center" style={{ padding: 'clamp(12px, 2vw, 16px)', minHeight: 'clamp(100px, 15vw, 127px)', gap: 'clamp(12px, 2.5vw, 18px)' }}>
              <svg className="text-[#FF9F0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: 'clamp(20px, 3vw, 24px)', height: 'clamp(20px, 3vw, 24px)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div className="flex flex-col gap-1">
                <span className="text-[#A1A1A1] font-urbanist font-medium uppercase tracking-wider" style={{ fontSize: 'clamp(12px, 1.5vw, 14px)' }}>Questions</span>
                <p 
                  style={{ 
                    fontFamily: 'Anton, sans-serif', 
                    fontWeight: 400, 
                    fontSize: 'clamp(22px, 3vw, 28px)', 
                    lineHeight: '100%', 
                    letterSpacing: '1px',
                    color: 'rgba(255, 255, 255, 1)',
                    textAlign: 'center'
                  }}
                >
                  5
                </p>
              </div>
            </div>

            {/* Time Limit Card */}
            <div className="bg-[#1A1A1A] rounded-[10px] border border-[#222222] flex flex-col items-center justify-center text-center" style={{ padding: 'clamp(12px, 2vw, 16px)', minHeight: 'clamp(100px, 15vw, 127px)', gap: 'clamp(12px, 2.5vw, 18px)' }}>
              <svg className="text-[#FF9F0A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: 'clamp(20px, 3vw, 24px)', height: 'clamp(20px, 3vw, 24px)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex flex-col gap-1">
                <span className="text-[#A1A1A1] font-urbanist font-medium uppercase tracking-wider" style={{ fontSize: 'clamp(12px, 1.5vw, 14px)' }}>Time Limit</span>
                <p 
                  style={{ 
                    fontFamily: 'Anton, sans-serif', 
                    fontWeight: 400, 
                    fontSize: 'clamp(22px, 3vw, 28px)', 
                    lineHeight: '100%', 
                    letterSpacing: '1px',
                    color: 'rgba(255, 255, 255, 1)',
                    textAlign: 'center'
                  }}
                >
                  10m
                </p>
              </div>
            </div>

            {/* Score Card */}
            <div className="bg-[#1A1A1A] rounded-[10px] border border-[#222222] flex flex-col items-center justify-center text-center" style={{ padding: 'clamp(12px, 2vw, 16px)', minHeight: 'clamp(100px, 15vw, 127px)', gap: 'clamp(12px, 2.5vw, 18px)' }}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'clamp(20px, 3vw, 24px)', height: 'clamp(20px, 3vw, 24px)' }}>
                <path d="M15.4768 12.8896L16.9918 21.4156C17.0087 21.516 16.9946 21.6192 16.9514 21.7114C16.9081 21.8036 16.8377 21.8803 16.7497 21.9314C16.6616 21.9825 16.56 22.0055 16.4586 21.9974C16.3571 21.9892 16.2605 21.9502 16.1818 21.8856L12.6018 19.1986C12.4289 19.0695 12.219 18.9998 12.0033 18.9998C11.7875 18.9998 11.5776 19.0695 11.4048 19.1986L7.81875 21.8846C7.74007 21.9491 7.64361 21.988 7.54225 21.9962C7.44088 22.0044 7.33942 21.9815 7.25141 21.9305C7.16341 21.8796 7.09303 21.803 7.04967 21.711C7.00631 21.619 6.99204 21.516 7.00875 21.4156L8.52275 12.8896" stroke="#FE9A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z" stroke="#FE9A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-col gap-1">
                <span className="text-[#A1A1A1] font-urbanist font-medium uppercase tracking-wider" style={{ fontSize: 'clamp(12px, 1.5vw, 14px)' }}>Score</span>
                <p 
                  style={{ 
                    fontFamily: 'Anton, sans-serif', 
                    fontWeight: 400, 
                    fontSize: 'clamp(22px, 3vw, 28px)', 
                    lineHeight: '100%', 
                    letterSpacing: '1px',
                    color: 'rgba(255, 255, 255, 1)',
                    textAlign: 'center'
                  }}
                >
                  5
                </p>
              </div>
            </div>
          </div>

          {/* Instructions Box */}
          <div className="w-full max-w-[800px] mx-auto bg-[#151515] rounded-[10px] border border-[#222222] mb-8 sm:mb-10 md:mb-12" style={{ padding: 'clamp(12px, 2vw, 17px)', paddingBottom: '1px', minHeight: 'clamp(150px, 25vw, 180px)' }}>
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0" style={{ width: 'clamp(16px, 2.5vw, 20px)', height: 'clamp(16px, 2.5vw, 20px)' }}>
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
              <h2 
                style={{ 
                  fontFamily: 'Urbanist, sans-serif', 
                  fontWeight: 400, 
                  fontSize: 'clamp(14px, 2vw, 16px)', 
                  lineHeight: '24px', 
                  letterSpacing: '0px',
                  color: 'rgba(161, 161, 161, 1)'
                }}
              >
                Instructions
              </h2>
            </div>
            <ul className="space-y-0.5 sm:space-y-1 font-urbanist">
              {[
                "Answer all questions within the given time",
                "Each question has only one correct answer",
                "You can review your results after completing the quiz",
                "Take your time and read each question carefully"
              ].map((instruction, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-white/40">•</span>
                  <span 
                    style={{ 
                      fontFamily: 'Urbanist, sans-serif', 
                      fontWeight: 400, 
                      fontSize: 'clamp(14px, 2vw, 16px)', 
                      lineHeight: '100%', 
                      letterSpacing: '0px',
                      color: 'rgba(255, 255, 255, 1)'
                    }}
                  >
                    {instruction}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-[10px]">
          <button
            onClick={handleBack}
            className="flex-1 rounded-[50px] border border-[#2D2D2D] bg-transparent text-gray-300 font-urbanist hover:bg-white/5 transition-colors"
            style={{
              paddingTop: 'clamp(10px, 2vw, 13px)',
              paddingRight: 'clamp(16px, 3vw, 24px)',
              paddingBottom: 'clamp(10px, 2vw, 13px)',
              paddingLeft: 'clamp(16px, 3vw, 24px)',
              height: 'clamp(44px, 6vw, 50px)',
              fontSize: 'clamp(12px, 1.5vw, 14px)'
            }}
          >
            Back
          </button>
          <button
            onClick={handleStartQuiz}
            className="flex-1 rounded-[50px] bg-[#FF9F0A] text-black font-urbanist font-bold hover:bg-[#E68A00] transition-colors"
            style={{
              paddingTop: 'clamp(10px, 2vw, 13px)',
              paddingRight: 'clamp(16px, 3vw, 24px)',
              paddingBottom: 'clamp(10px, 2vw, 13px)',
              paddingLeft: 'clamp(16px, 3vw, 24px)',
              height: 'clamp(44px, 6vw, 50px)',
              fontSize: 'clamp(12px, 1.5vw, 14px)'
            }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

