"use client";

import { useState } from "react";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number, review: string) => void;
}

export default function ReviewModal({ isOpen, onClose, onSubmit }: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (rating > 0 && review.trim()) {
      onSubmit(rating, review);
      setRating(0);
      setReview("");
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop with blur */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-[#161616] rounded-lg border border-[#2C2C2C] w-full max-w-md p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title */}
          <h2 className="text-2xl font-semi-bold text-white mb-6">Give Review</h2>

          {/* Rating Section */}
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-3">Choose Rating</label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="focus:outline-none transition-transform hover:scale-110"
                  aria-label={`Rate ${star} stars`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.4353 2.98438L28.1019 10.3177C28.6019 11.3385 29.9353 12.3177 31.0603 12.5052L37.7061 13.6094C41.9561 14.3177 42.9561 17.401 39.8936 20.4427L34.7269 25.6094C33.8519 26.4844 33.3728 28.1719 33.6436 29.3802L35.1228 35.776C36.2894 40.8385 33.6019 42.7969 29.1228 40.151L22.8936 36.4635C21.7686 35.7969 19.9144 35.7969 18.7686 36.4635L12.5394 40.151C8.08111 42.7969 5.37278 40.8177 6.53944 35.776L8.01861 29.3802C8.28944 28.1719 7.81028 26.4844 6.93528 25.6094L1.76861 20.4427C-1.27306 17.401 -0.29389 14.3177 3.95611 13.6094L10.6019 12.5052C11.7061 12.3177 13.0394 11.3385 13.5394 10.3177L17.2061 2.98438C19.2061 -0.994792 22.4561 -0.994792 24.4353 2.98438Z"
                      fill={star <= rating ? "#FDC700" : "#3A3A3A"}
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Review Text Area */}
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-3">Share Review</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write Review"
              className="w-full h-32 bg-[#0A0A0A] border border-[#2C2C2C] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={rating === 0 || !review.trim()}
            className="w-full bg-[#2A2A2A] border border-[#2C2C2C] rounded-lg px-4 py-3 text-white font-medium hover:border-orange-500 hover:bg-[#161616] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-[#2C2C2C] disabled:hover:bg-[#0A0A0A]"
          >
            Submit Review
          </button>
        </div>
      </div>
    </>
  );
}

