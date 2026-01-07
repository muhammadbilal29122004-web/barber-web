"use client";

import { useState } from "react";
import Image from "next/image";
import UpgradeSuccessModal from "@/components/pricing/UpgradeSuccessModal";
import AddReviewModal from "@/components/AddReviewModal";

export default function Reviews() {
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isAddOpen, setIsAddOpen] = useState(false);

    const handleSubmitReview = (rating: number, review: string) => {
        // Here we could post to API; for now just show success
        setIsAddOpen(false);
        setIsSuccessOpen(true);
    };

    return (
        <section className="w-full text-white min-h-[634px]">
            {/* Main Header */}
            <div className="mb-10 flex items-start justify-between gap-4">
                <div className="flex-1">
                    <h2 className="text-[48px] font-semi-bold leading-tight uppercase tracking-tight mb-4 font-anton uppercase">REVIEWS</h2>

                    <div className="flex flex-col gap-1 font-urbanist">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4].map((star) => (
                                    <svg key={star} className="w-5 h-5 text-[#FF9F0A]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <svg className="w-5 h-5 text-[#333333]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <span className="text-[15px] font-medium text-gray-300">4.00 Out Of 5</span>
                        </div>
                        <p className="text-gray-400 text-[14px]">Based On 250 Reviews</p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-gray-300 text-[14px] cursor-pointer hover:text-white transition-colors font-urbanist">
                        Most Relevant
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Add Review Button (top-right) */}
                <button
                    type="button"
                    onClick={() => setIsAddOpen(true)}
                    className="mt-2 inline-flex items-center gap-2 bg-[#FF9F0A] text-black font-urbanist font-semi-bold text-[14px] px-5 py-2.5 rounded-full hover:bg-[#E68A00] transition-colors active:scale-95"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 5v14M5 12h14" />
                    </svg>
                    Add Review
                </button>
            </div>

            {/* Reviews List */}
            <div className="border-t border-[#222222] flex flex-col gap-8">
                {[1, 2].map((reviewId) => (
                    <div key={reviewId} className="pt-10 pb-2 border-b border-[#222222]">
                        <div className="flex items-center gap-1 mb-4">
                            {[1, 2, 3, 4].map((star) => (
                                <svg key={star} className="w-4 h-4 text-[#FF9F0A]" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            <svg className="w-4 h-4 text-[#333333]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>

                        <div className="flex items-center gap-3 mb-4 font-urbanist">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#222222]">
                                <Image src="/Jamesbond.png" alt="User" width={32} height={32} className="object-cover" />
                            </div>
                            <span className="text-[14px] text-gray-400">John Doe</span>
                        </div>

                        <div className="space-y-2 font-urbanist">
                            <h4 className="text-[18px] font-bold">Very Good Product</h4>
                            <p className="text-gray-500 text-[15px] leading-relaxed max-w-3xl">
                                This Supplement Delivers Explosive Energy And Noticeable Strength Gains With Every Workout. The Taste Is Surprisingly Good, And The Results Speak For Themselves After Just A Few Sessions.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Review Modal */}
            <AddReviewModal
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onSubmit={handleSubmitReview}
            />

            {/* Success Modal (re-using pricing success modal) */}
            <UpgradeSuccessModal
                isOpen={isSuccessOpen}
                onClose={() => setIsSuccessOpen(false)}
                title="Review Added!"
                description="Your review has been submitted successfully."
                ctaText="Done"
                ctaHref=""
            />
        </section>
    );
}
