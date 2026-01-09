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
        <section className="w-full text-white min-h-[634px] px-4 sm:px-6 md:px-8 lg:px-[100px] py-6 sm:py-8 md:py-10" style={{ marginTop: 'clamp(40px, 8vw, 100px)' }}>
            {/* Main Header */}
            <div className="mb-6 sm:mb-8 md:mb-10 flex flex-col sm:flex-row items-start sm:items-start justify-between gap-4 sm:gap-4">
                <div className="flex-1 w-full">
                    <h2 
                      className="mb-3 sm:mb-4 uppercase"
                      style={{ 
                        fontFamily: 'Anton, sans-serif', 
                        fontWeight: 400, 
                        fontSize: 'clamp(28px, 5vw, 50px)', 
                        lineHeight: '120%', 
                        letterSpacing: '0%',
                        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(193, 193, 193, 1) 50%, rgba(255, 255, 255, 1) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      REVIEWS
                    </h2>

                    <div className="flex flex-col gap-1 sm:gap-1 font-urbanist">
                        <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                            <div className="flex items-center gap-0.5 sm:gap-1">
                                {[1, 2, 3, 4].map((star) => (
                                    <svg key={star} style={{ width: 'clamp(18px, 2.5vw, 24px)', height: 'clamp(18px, 2.5vw, 24px)' }} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24.4353 2.98438L28.1019 10.3177C28.6019 11.3385 29.9353 12.3177 31.0603 12.5052L37.7061 13.6094C41.9561 14.3177 42.9561 17.401 39.8936 20.4427L34.7269 25.6094C33.8519 26.4844 33.3728 28.1719 33.6436 29.3802L35.1228 35.776C36.2894 40.8385 33.6019 42.7969 29.1228 40.151L22.8936 36.4635C21.7686 35.7969 19.9144 35.7969 18.7686 36.4635L12.5394 40.151C8.08111 42.7969 5.37278 40.8177 6.53944 35.776L8.01861 29.3802C8.28944 28.1719 7.81028 26.4844 6.93528 25.6094L1.76861 20.4427C-1.27306 17.401 -0.29389 14.3177 3.95611 13.6094L10.6019 12.5052C11.7061 12.3177 13.0394 11.3385 13.5394 10.3177L17.2061 2.98438C19.2061 -0.994792 22.4561 -0.994792 24.4353 2.98438Z" fill="#FDC700"/>
                                    </svg>
                                ))}
                                <svg style={{ width: 'clamp(18px, 2.5vw, 24px)', height: 'clamp(18px, 2.5vw, 24px)' }} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.4353 2.98438L28.1019 10.3177C28.6019 11.3385 29.9353 12.3177 31.0603 12.5052L37.7061 13.6094C41.9561 14.3177 42.9561 17.401 39.8936 20.4427L34.7269 25.6094C33.8519 26.4844 33.3728 28.1719 33.6436 29.3802L35.1228 35.776C36.2894 40.8385 33.6019 42.7969 29.1228 40.151L22.8936 36.4635C21.7686 35.7969 19.9144 35.7969 18.7686 36.4635L12.5394 40.151C8.08111 42.7969 5.37278 40.8177 6.53944 35.776L8.01861 29.3802C8.28944 28.1719 7.81028 26.4844 6.93528 25.6094L1.76861 20.4427C-1.27306 17.401 -0.29389 14.3177 3.95611 13.6094L10.6019 12.5052C11.7061 12.3177 13.0394 11.3385 13.5394 10.3177L17.2061 2.98438C19.2061 -0.994792 22.4561 -0.994792 24.4353 2.98438Z" fill="#333333"/>
                                </svg>
                            </div>
                            <span 
                              style={{ 
                                fontFamily: 'Urbanist, sans-serif', 
                                fontWeight: 400, 
                                fontSize: 'clamp(14px, 2vw, 18px)', 
                                lineHeight: '24px', 
                                letterSpacing: '0%',
                                color: 'rgba(255, 255, 255, 1)'
                              }}
                            >
                              4.00 Out Of 5
                            </span>
                        </div>
                        <p 
                          style={{ 
                            fontFamily: 'Urbanist, sans-serif', 
                            fontWeight: 400, 
                            fontSize: 'clamp(14px, 2vw, 18px)', 
                            lineHeight: '24px', 
                            letterSpacing: '0%',
                            color: 'rgba(255, 255, 255, 1)'
                          }}
                        >
                          Based On 250 Reviews
                        </p>
                    </div>

                    <div className="mt-4 sm:mt-6 flex items-center gap-2 text-gray-300 cursor-pointer hover:text-white transition-colors font-urbanist" style={{ fontSize: 'clamp(12px, 1.5vw, 14px)' }}>
                        Most Relevant
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Add Review Button (top-right) */}
                <button
                    type="button"
                    onClick={() => setIsAddOpen(true)}
                    className="w-full sm:w-auto mt-0 sm:mt-2 inline-flex items-center justify-center gap-2 bg-[#FF9F0A] text-black font-urbanist font-semi-bold rounded-full hover:bg-[#E68A00] transition-colors active:scale-95 px-4 sm:px-5 py-2 sm:py-2.5"
                    style={{ fontSize: 'clamp(12px, 1.5vw, 14px)' }}
                >
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 5v14M5 12h14" />
                    </svg>
                    Add Review
                </button>
            </div>

            {/* Reviews List */}
            <div className="border-t border-[#222222] flex flex-col gap-6 sm:gap-8">
                {[1, 2].map((reviewId) => (
                    <div key={reviewId} className="pt-6 sm:pt-8 md:pt-10 pb-2 border-b border-[#222222]">
                        <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4 flex-wrap">
                            {[1, 2, 3, 4].map((star) => (
                                <svg key={star} style={{ width: 'clamp(18px, 2.5vw, 24px)', height: 'clamp(18px, 2.5vw, 24px)' }} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.4353 2.98438L28.1019 10.3177C28.6019 11.3385 29.9353 12.3177 31.0603 12.5052L37.7061 13.6094C41.9561 14.3177 42.9561 17.401 39.8936 20.4427L34.7269 25.6094C33.8519 26.4844 33.3728 28.1719 33.6436 29.3802L35.1228 35.776C36.2894 40.8385 33.6019 42.7969 29.1228 40.151L22.8936 36.4635C21.7686 35.7969 19.9144 35.7969 18.7686 36.4635L12.5394 40.151C8.08111 42.7969 5.37278 40.8177 6.53944 35.776L8.01861 29.3802C8.28944 28.1719 7.81028 26.4844 6.93528 25.6094L1.76861 20.4427C-1.27306 17.401 -0.29389 14.3177 3.95611 13.6094L10.6019 12.5052C11.7061 12.3177 13.0394 11.3385 13.5394 10.3177L17.2061 2.98438C19.2061 -0.994792 22.4561 -0.994792 24.4353 2.98438Z" fill="#FDC700"/>
                                </svg>
                            ))}
                            <svg style={{ width: 'clamp(18px, 2.5vw, 24px)', height: 'clamp(18px, 2.5vw, 24px)' }} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.4353 2.98438L28.1019 10.3177C28.6019 11.3385 29.9353 12.3177 31.0603 12.5052L37.7061 13.6094C41.9561 14.3177 42.9561 17.401 39.8936 20.4427L34.7269 25.6094C33.8519 26.4844 33.3728 28.1719 33.6436 29.3802L35.1228 35.776C36.2894 40.8385 33.6019 42.7969 29.1228 40.151L22.8936 36.4635C21.7686 35.7969 19.9144 35.7969 18.7686 36.4635L12.5394 40.151C8.08111 42.7969 5.37278 40.8177 6.53944 35.776L8.01861 29.3802C8.28944 28.1719 7.81028 26.4844 6.93528 25.6094L1.76861 20.4427C-1.27306 17.401 -0.29389 14.3177 3.95611 13.6094L10.6019 12.5052C11.7061 12.3177 13.0394 11.3385 13.5394 10.3177L17.2061 2.98438C19.2061 -0.994792 22.4561 -0.994792 24.4353 2.98438Z" fill="#333333"/>
                            </svg>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 font-urbanist">
                            <div 
                              className="overflow-hidden bg-[#222222] flex-shrink-0"
                              style={{
                                width: 'clamp(32px, 4vw, 40px)',
                                height: 'clamp(32px, 4vw, 40px)',
                                borderRadius: '50%'
                              }}
                            >
                                <Image src="/Jamesbond.png" alt="User" width={40} height={40} className="object-cover w-full h-full" />
                            </div>
                            <span 
                              style={{ 
                                fontFamily: 'Urbanist, sans-serif', 
                                fontWeight: 400, 
                                fontSize: 'clamp(14px, 2vw, 16px)', 
                                lineHeight: '24px', 
                                letterSpacing: '0%',
                                color: 'rgba(161, 161, 161, 1)'
                              }}
                            >
                              John Doe
                            </span>
                        </div>

                        <div className="space-y-1.5 sm:space-y-2 font-urbanist">
                            <h4 
                              style={{ 
                                fontFamily: 'Urbanist, sans-serif', 
                                fontWeight: 400, 
                                fontSize: 'clamp(16px, 2vw, 18px)', 
                                lineHeight: '24px', 
                                letterSpacing: '-4%',
                                color: 'rgba(255, 255, 255, 1)'
                              }}
                            >
                              Very Good Product
                            </h4>
                            <p 
                              className="max-w-3xl"
                              style={{ 
                                fontFamily: 'Urbanist, sans-serif', 
                                fontWeight: 400, 
                                fontSize: 'clamp(14px, 2vw, 18px)', 
                                lineHeight: '24px', 
                                letterSpacing: '0%',
                                color: 'rgba(161, 161, 161, 1)',
                                opacity: 0.6
                              }}
                            >
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
