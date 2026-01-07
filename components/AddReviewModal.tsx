"use client";

import { useEffect, useState } from "react";

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number, review: string) => void;
}

export default function AddReviewModal({
  isOpen,
  onClose,
  onSubmit,
}: AddReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [review, setReview] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setRating(0);
      setHover(null);
      setReview("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-[480px] bg-[#1A1A1A] rounded-[20px] border border-[#444444] text-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#444444]">
          <h3 className="text-[24px] font-semibold font-urbanist leading-[100%] tracking-[-0.4px]">Give Review</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-6">
          {/* Rating */}
          <div>
            <p className="text-[12px] font-normal font-urbanist leading-[100%] tracking-[-0.12px] text-[#A1A1A1] mb-3">
              Choose Rating
            </p>
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4, 5].map((star) => {
                const active = (hover ?? rating) >= star;
                return (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                    aria-label={`Rate ${star} star`}
                  >
                    <svg
                      className={`w-10 h-10 ${active ? "text-[#FF9F0A]" : "text-[#3A3A3A]"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Textarea */}
          <div>
            <p className="w-full max-w-[430px] text-[14px] font-medium font-urbanist leading-[100%] tracking-[-0.01em] text-[#A1A1A1] mb-3">
              Write Review
            </p>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write Review"
              className="w-full min-h-[180px] rounded-[12px] bg-[#161616] border border-[#444444] px-4 py-3 text-white font-urbanist text-[16px] leading-[100%] placeholder:font-urbanist placeholder:font-normal placeholder:text-[16px] placeholder:leading-[100%] placeholder:text-[#525252] focus:outline-none focus:border-[#FF9F0A] resize-y"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-5">
          <button
            type="button"
            onClick={() => onSubmit(rating, review)}
            disabled={rating === 0 || review.trim().length === 0}
            className="w-full max-w-[430px] h-[44px] bg-[#2A2A2A] border border-[#444444] rounded-[12px] flex items-center justify-center gap-2 text-white font-urbanist font-medium text-[14px] hover:bg-[#333333] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}


