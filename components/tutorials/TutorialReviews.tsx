"use client";

import { useState } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import type { Review } from "@/lib/data/tutorials";

interface TutorialReviewsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  onAddReview?: () => void;
}

export default function TutorialReviews({ reviews, averageRating, totalReviews, onAddReview }: TutorialReviewsProps) {
  const [sortBy, setSortBy] = useState("Most Relevant");

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-3xl font-semi-bold text-white">Reviews</h2>
        <div className="flex items-center gap-3">
          {onAddReview && (
            <PrimaryButton onClick={onAddReview} className="px-6 py-2">
              Add review
            </PrimaryButton>
          )}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-[#161616] border border-[#2C2C2C] rounded-lg px-4 py-2 pr-10 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
            >
              <option value="Most Relevant" className="bg-[#161616]">Most Relevant</option>
              <option value="Newest" className="bg-[#161616]">Newest</option>
              <option value="Oldest" className="bg-[#161616]">Oldest</option>
              <option value="Highest Rating" className="bg-[#161616]">Highest Rating</option>
              <option value="Lowest Rating" className="bg-[#161616]">Lowest Rating</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Overall Rating */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                width="24"
                height="24"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7289 1.4325L13.4889 4.9525C13.7289 5.4425 14.3689 5.9125 14.9089 6.0025L18.0989 6.5325C20.1389 6.8725 20.6189 8.3525 19.1489 9.8125L16.6689 12.2925C16.2489 12.7125 16.0189 13.5225 16.1489 14.1025L16.8589 17.1725C17.4189 19.6025 16.1289 20.5425 13.9789 19.2725L10.9889 17.5025C10.4489 17.1825 9.55893 17.1825 9.00893 17.5025L6.01893 19.2725C3.87893 20.5425 2.57893 19.5925 3.13893 17.1725L3.84893 14.1025C3.97893 13.5225 3.74893 12.7125 3.32893 12.2925L0.848932 9.8125C-0.611068 8.3525 -0.141067 6.8725 1.89893 6.5325L5.08893 6.0025C5.61893 5.9125 6.25893 5.4425 6.49893 4.9525L8.25893 1.4325C9.21893 -0.4775 10.7789 -0.4775 11.7289 1.4325Z"
                  fill="#FDC700"
                />
              </svg>
            ))}
          </div>
          <span className="text-white font-medium text-lg">
            {averageRating} Out Of 5
          </span>
        </div>
        <p className="text-gray-400 text-sm">
          Based On {totalReviews} Reviews
        </p>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-[#161616] rounded-lg border border-[#2C2C2C] p-6">
            <div className="flex items-start gap-4">
              {/* User Avatar */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                <Image
                  src={review.userAvatar}
                  alt={review.userName}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Review Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-white font-medium mb-1">{review.userName}</h3>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7289 1.4325L13.4889 4.9525C13.7289 5.4425 14.3689 5.9125 14.9089 6.0025L18.0989 6.5325C20.1389 6.8725 20.6189 8.3525 19.1489 9.8125L16.6689 12.2925C16.2489 12.7125 16.0189 13.5225 16.1489 14.1025L16.8589 17.1725C17.4189 19.6025 16.1289 20.5425 13.9789 19.2725L10.9889 17.5025C10.4489 17.1825 9.55893 17.1825 9.00893 17.5025L6.01893 19.2725C3.87893 20.5425 2.57893 19.5925 3.13893 17.1725L3.84893 14.1025C3.97893 13.5225 3.74893 12.7125 3.32893 12.2925L0.848932 9.8125C-0.611068 8.3525 -0.141067 6.8725 1.89893 6.5325L5.08893 6.0025C5.61893 5.9125 6.25893 5.4425 6.49893 4.9525L8.25893 1.4325C9.21893 -0.4775 10.7789 -0.4775 11.7289 1.4325Z"
                            fill={star <= review.rating ? "#FDC700" : "#3A3A3A"}
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <h4 className="text-white font-medium mb-2">{review.title}</h4>
                <p className="text-gray-300 leading-relaxed">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

