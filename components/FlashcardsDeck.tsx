"use client";

import { useMemo, useState } from "react";

type Card = {
  question: string;
  answer: {
    tapper: string[];
    fade: string[];
  };
};

export default function FlashcardsDeck() {
  const cards = useMemo<Card[]>(
    () => [
      {
        question: "Tapper vs Fade",
        answer: {
          tapper: [
            "Gradual length decrease",
            "Hair visible throughout",
            "More conservative",
            "Blends into longer hair",
          ],
          fade: [
            "Skin-tight at bottom",
            "Sharp contrast",
            "Modern, bold look",
            "Requires more",
          ],
        },
      },
      {
        question: "Low Fade",
        answer: {
          tapper: [
            "A fade that starts low",
            "Near the ears and neckline",
            "Keeping more length on sides",
          ],
          fade: [
            "A fade that starts low",
            "Near the ears and neckline",
            "Keeping more length on sides",
          ],
        },
      },
      {
        question: "High Fade",
        answer: {
          tapper: [
            "A fade that starts higher",
            "Creating sharper contrast",
            "Bolder look",
          ],
          fade: [
            "A fade that starts higher",
            "Creating sharper contrast",
            "Bolder look",
          ],
        },
      },
    ],
    [],
  );

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const total = 15; // UI shows 15 total in design

  const current = cards[index % cards.length];
  const displayIndex = (index % total) + 1;

  const goPrev = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8">
      {/* Card */}
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        className="w-full max-w-[650px] min-h-[280px] h-auto sm:h-[350px] rounded-[12px] bg-[#0A0A0A] border border-[#FE9A00] shadow-2xl transition-all relative overflow-hidden group"
        style={{ minHeight: 'clamp(280px, 50vw, 350px)' }}
      >
        {/* Subtle Orange Tint (10% Opacity Overlay) */}
        <div className="absolute inset-0 bg-[#FE9A00]/10 pointer-events-none"></div>

        {!flipped ? (
          // Question side
          <div className="relative w-full min-h-[280px] h-auto sm:h-[350px] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 py-6 sm:py-8 z-10" style={{ minHeight: 'clamp(280px, 50vw, 350px)' }}>
            <div
              className="text-white font-anton"
              style={{
                fontSize: 'clamp(24px, 5vw, 50px)',
                lineHeight: '1.1',
              }}
            >
              {current.question}
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-[#A1A1A1] font-urbanist" style={{ fontSize: 'clamp(11px, 1.5vw, 14px)' }}>
              Tap to reveal
            </div>
          </div>
        ) : (
          // Answer side - Two column layout on desktop, single column on mobile
          <div className="relative w-full min-h-[280px] h-auto sm:h-[350px] flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 z-10" style={{ minHeight: 'clamp(280px, 50vw, 350px)' }}>
            {/* Answer badge */}
            <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
              <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-[6px] font-urbanist font-medium tracking-wide bg-[#22C55E1A] text-[#22C55E]" style={{ fontSize: 'clamp(12px, 1.5vw, 14px)' }}>
                Answer
              </div>
            </div>

            {/* Two column content - responsive layout */}
            <div className="flex flex-col md:flex-row items-stretch justify-center flex-1 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {/* Tapper Column */}
              <div className="flex-1 flex flex-col items-start text-left">
                <h3 className="text-white font-urbanist font-semi-bold mb-3 sm:mb-4 leading-[100%] tracking-[0px]" style={{ fontSize: 'clamp(18px, 2.5vw, 24px)' }}>Tapper</h3>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                  {current.answer.tapper.map((item, idx) => (
                    <li key={idx} className="flex items-start text-[#A0A0A0] font-urbanist leading-snug" style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}>
                      <span className="mr-2 sm:mr-2.5 text-[#A0A0A0]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vertical Separator - hidden on mobile, shown on desktop */}
              <div className="hidden md:block w-[1px] bg-white/20 self-center flex-shrink-0" style={{ height: 'clamp(100px, 20vw, 143px)' }}></div>

              {/* Horizontal Separator - shown on mobile, hidden on desktop */}
              <div className="md:hidden w-full h-[1px] bg-white/20 my-2"></div>

              {/* Fade Column */}
              <div className="flex-1 flex flex-col items-start text-left">
                <h3 className="text-white font-urbanist font-semi-bold mb-3 sm:mb-4 leading-[100%] tracking-[0px]" style={{ fontSize: 'clamp(18px, 2.5vw, 24px)' }}>Fade</h3>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                  {current.answer.fade.map((item, idx) => (
                    <li key={idx} className="flex items-start text-[#A0A0A0] font-urbanist leading-snug" style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}>
                      <span className="mr-2 sm:mr-2.5 text-[#A0A0A0]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tap to flip back text at the bottom */}
            <div className="mt-4 sm:mt-6 md:mt-8 text-center text-[#A0A0A0] font-urbanist opacity-70" style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}>
              Tap to flip back
            </div>
          </div>
        )}
      </button>

      {/* Progress & Navigation */}
      <div className="mt-4 sm:mt-5 flex flex-row items-center gap-2 sm:gap-3 md:gap-[12px] text-gray-400 font-urbanist" style={{ height: 'clamp(18px, 3vw, 20px)' }}>
        <button
          type="button"
          onClick={goPrev}
          className="flex items-center justify-center hover:text-white transition-colors"
          aria-label="Previous"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-center whitespace-nowrap text-gray-400 font-urbanist" style={{ fontSize: 'clamp(12px, 1.5vw, 14px)' }}>
          {displayIndex} of {total}
        </div>
        <button
          type="button"
          onClick={goNext}
          className="flex items-center justify-center hover:text-white transition-colors"
          aria-label="Next"
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Actions */}
      <div className="mt-6 sm:mt-8 w-full max-w-[650px] flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-[10px]">
        <button
          type="button"
          onClick={() => setFlipped(false)}
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
          Review Again
        </button>
        <button
          type="button"
          onClick={() => {
            if (!flipped) {
              setFlipped(true);
            } else {
              goNext();
            }
          }}
          className="flex-1 rounded-[50px] border border-[#FF9F0A] bg-transparent text-[#FF9F0A] font-urbanist hover:bg-[#FF9F0A]/10 transition-colors"
          style={{
            paddingTop: 'clamp(10px, 2vw, 13px)',
            paddingRight: 'clamp(16px, 3vw, 24px)',
            paddingBottom: 'clamp(10px, 2vw, 13px)',
            paddingLeft: 'clamp(16px, 3vw, 24px)',
            height: 'clamp(44px, 6vw, 50px)',
            fontSize: 'clamp(12px, 1.5vw, 14px)'
          }}
        >
          Know It
        </button>
      </div>
    </div>
  );
}


