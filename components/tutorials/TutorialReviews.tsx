"use client";

import { useState } from "react";
import Image from "next/image";
import type { Review } from "@/lib/data/tutorials";

interface TutorialReviewsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

export default function TutorialReviews({ reviews, averageRating, totalReviews }: TutorialReviewsProps) {
  const [sortBy, setSortBy] = useState("Most Relevant");

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-3xl font-semi-bold text-white">Reviews</h2>
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

      {/* Overall Rating */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6 text-[#FE9A00]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
                          className={`w-4 h-4 ${
                            star <= review.rating ? "text-[#FE9A00]" : "text-gray-600"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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

