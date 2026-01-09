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
          <h3 
            style={{ 
              fontFamily: 'Urbanist, sans-serif', 
              fontWeight: 600, 
              fontSize: '24px', 
              lineHeight: '100%', 
              letterSpacing: '-0.4px',
              color: 'rgba(255, 255, 255, 1)'
            }}
          >
            Give Review
          </h3>
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
            <div className="flex items-center gap-1">
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
                    {active ? (
                      <svg width="50" height="50" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.4353 2.98438L28.1019 10.3177C28.6019 11.3385 29.9353 12.3177 31.0603 12.5052L37.7061 13.6094C41.9561 14.3177 42.9561 17.401 39.8936 20.4427L34.7269 25.6094C33.8519 26.4844 33.3728 28.1719 33.6436 29.3802L35.1228 35.776C36.2894 40.8385 33.6019 42.7969 29.1228 40.151L22.8936 36.4635C21.7686 35.7969 19.9144 35.7969 18.7686 36.4635L12.5394 40.151C8.08111 42.7969 5.37278 40.8177 6.53944 35.776L8.01861 29.3802C8.28944 28.1719 7.81028 26.4844 6.93528 25.6094L1.76861 20.4427C-1.27306 17.401 -0.29389 14.3177 3.95611 13.6094L10.6019 12.5052C11.7061 12.3177 13.0394 11.3385 13.5394 10.3177L17.2061 2.98438C19.2061 -0.994792 22.4561 -0.994792 24.4353 2.98438Z" fill="#FDC700"/>
                      </svg>
                    ) : (
                      <svg width="50" height="50" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.4353 2.98438L28.1019 10.3177C28.6019 11.3385 29.9353 12.3177 31.0603 12.5052L37.7061 13.6094C41.9561 14.3177 42.9561 17.401 39.8936 20.4427L34.7269 25.6094C33.8519 26.4844 33.3728 28.1719 33.6436 29.3802L35.1228 35.776C36.2894 40.8385 33.6019 42.7969 29.1228 40.151L22.8936 36.4635C21.7686 35.7969 19.9144 35.7969 18.7686 36.4635L12.5394 40.151C8.08111 42.7969 5.37278 40.8177 6.53944 35.776L8.01861 29.3802C8.28944 28.1719 7.81028 26.4844 6.93528 25.6094L1.76861 20.4427C-1.27306 17.401 -0.29389 14.3177 3.95611 13.6094L10.6019 12.5052C11.7061 12.3177 13.0394 11.3385 13.5394 10.3177L17.2061 2.98438C19.2061 -0.994792 22.4561 -0.994792 24.4353 2.98438Z" fill="#333333"/>
                      </svg>
                    )}
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
            className="w-full max-w-[430px] h-[44px] bg-[#2A2A2A] border border-[#444444] rounded-[12px] flex items-center justify-center gap-2 hover:bg-[#333333] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              fontFamily: 'Urbanist, sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0px',
              color: 'rgba(255, 255, 255, 1)',
              textAlign: 'center'
            }}
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}


