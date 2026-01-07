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
    <div className="w-full flex flex-col items-center">
      {/* Card */}
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        className="w-[650px] h-[350px] rounded-[12px] bg-[#0A0A0A] border border-[#FE9A00] shadow-2xl transition-all relative overflow-hidden group"
      >
        {/* Subtle Orange Tint (10% Opacity Overlay) */}
        <div className="absolute inset-0 bg-[#FE9A00]/10 pointer-events-none"></div>

        {!flipped ? (
          // Question side
          <div className="relative w-full h-[350px] flex flex-col items-center justify-center text-center px-6 sm:px-10 z-10">
            <div
              className="text-white font-anton"
              style={{
                fontSize: '50px',
                lineHeight: '1.1',
              }}
            >
              {current.question}
            </div>
            <div className="mt-8 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#A1A1A1] font-urbanist text-sm">
              Tap to reveal
            </div>
          </div>
        ) : (
          // Answer side - Two column layout
          <div className="relative w-full h-[350px] flex flex-col px-12 py-8 z-10">
            {/* Answer badge */}
            <div className="flex justify-center mb-6">
              <div className="px-4 py-1.5 rounded-[6px] font-urbanist text-[14px] font-medium tracking-wide bg-[#22C55E1A] text-[#22C55E]">
                Answer
              </div>
            </div>

            {/* Two column content */}
            <div className="flex flex-row items-stretch justify-center flex-1 gap-12">
              {/* Tapper Column */}
              <div className="flex-1 flex flex-col items-start text-left">
                <h3 className="text-white font-urbanist font-semi-bold text-[24px] mb-4 leading-[100%] tracking-[0px]">Tapper</h3>
                <ul className="space-y-2.5">
                  {current.answer.tapper.map((item, idx) => (
                    <li key={idx} className="flex items-start text-[#A0A0A0] font-urbanist text-[18px] leading-snug">
                      <span className="mr-2.5 text-[#A0A0A0]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vertical Separator */}
              <div className="w-[1px] h-[143px] bg-white/20 self-center flex-shrink-0"></div>

              {/* Fade Column */}
              <div className="flex-1 flex flex-col items-start text-left">
                <h3 className="text-white font-urbanist font-semi-bold text-[24px] mb-4 leading-[100%] tracking-[0px]">Fade</h3>
                <ul className="space-y-2.5">
                  {current.answer.fade.map((item, idx) => (
                    <li key={idx} className="flex items-start text-[#A0A0A0] font-urbanist text-[18px] leading-snug">
                      <span className="mr-2.5 text-[#A0A0A0]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tap to flip back text at the bottom */}
            <div className="mt-8 text-center text-[#A0A0A0] font-urbanist text-[18px] opacity-70">
              Tap to flip back
            </div>
          </div>
        )}
      </button>

      {/* Progress & Navigation */}
      <div className="mt-5 flex flex-row items-center gap-[12px] text-gray-400 font-urbanist" style={{ height: '20px' }}>
        <button
          type="button"
          onClick={goPrev}
          className="flex items-center justify-center hover:text-white transition-colors"
          aria-label="Previous"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-center whitespace-nowrap text-gray-400 font-urbanist text-sm">
          {displayIndex} of {total}
        </div>
        <button
          type="button"
          onClick={goNext}
          className="flex items-center justify-center hover:text-white transition-colors"
          aria-label="Next"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Actions */}
      <div className="mt-8 w-full max-w-[650px] flex flex-row items-center justify-center gap-[10px]">
        <button
          type="button"
          onClick={() => setFlipped(false)}
          className="flex-1 h-[50px] rounded-[50px] border border-[#2D2D2D] bg-transparent text-gray-300 font-urbanist text-sm hover:bg-white/5 transition-colors"
          style={{
            paddingTop: '13px',
            paddingRight: '24px',
            paddingBottom: '13px',
            paddingLeft: '24px',
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
          className="flex-1 h-[50px] rounded-[50px] border border-[#FF9F0A] bg-transparent text-[#FF9F0A] font-urbanist text-sm hover:bg-[#FF9F0A]/10 transition-colors"
          style={{
            paddingTop: '13px',
            paddingRight: '24px',
            paddingBottom: '13px',
            paddingLeft: '24px',
          }}
        >
          Know It
        </button>
      </div>
    </div>
  );
}


