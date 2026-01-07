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
                    className={`w-8 h-8 ${
                      star <= rating
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-600 fill-none"
                    }`}
                    fill={star <= rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
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

