"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReviewModal from "@/components/ReviewModal";
import TutorialReviews from "@/components/tutorials/TutorialReviews";
import { getTutorialById, getTutorialReviews, calculateAverageRating, type Tutorial, type Review } from "@/lib/data/tutorials";

export default function TutorialDetailPage() {
  const params = useParams();
  const tutorialId = Number(params.id);

  const [tutorial, setTutorial] = useState<Tutorial | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [tutorialData, reviewsData] = await Promise.all([
          getTutorialById(tutorialId),
          getTutorialReviews(tutorialId),
        ]);

        setTutorial(tutorialData);
        setReviews(reviewsData);
      } catch (error) {
        console.error("Failed to load tutorial data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (tutorialId) {
      loadData();
    }
  }, [tutorialId]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A]">
        <Header activePage="tutorials" showUserIcons={true} />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-400">Loading tutorial...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-[#0A0A0A]">
        <Header activePage="tutorials" showUserIcons={true} />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-400">Tutorial not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const averageRating = calculateAverageRating(reviews);
  // For demo purposes, show 250 reviews (as per design)
  // In production, this would come from the API
  const totalReviews = 250;

  const handleReviewSubmit = (rating: number, reviewText: string) => {
    // TODO: Submit review to API
    console.log("Review submitted:", { rating, reviewText });
    // For now, just close the modal
  };

  return (
    <div className={`min-h-screen bg-[#0A0A0A] ${isReviewModalOpen ? "overflow-hidden" : ""}`}>
      <div className={isReviewModalOpen ? "blur-sm pointer-events-none" : ""}>
        <Header activePage="tutorials" showUserIcons={true} />

      {/* Main Content */}
      <section className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Link
              href="/tutorials"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              Tutorials
            </Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-white">{tutorial.title}</span>
          </div>

          {/* Video Player Section - Matching Figma Design */}
          <div className="mb-8">
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden group">
              {/* Thumbnail Image */}
              <Image
                src={tutorial.thumbnail}
                alt={tutorial.title}
                fill
                className="object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                <button 
                  onClick={() => setIsReviewModalOpen(true)}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  aria-label="Play video"
                >
                  <svg
                    className="w-10 h-10 text-gray-900 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Video Controls Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent px-4 py-2.5 z-20">
                {/* Progress Bar */}
                <div className="mb-2.5">
                  <div className="w-full h-1.5 bg-gray-700/50 rounded-full relative">
                    <div 
                      className="h-full bg-[#FE9A00] rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-[#FE9A00] shadow-md"
                      style={{ left: "50%", transform: "translate(-50%, -50%)" }}
                    ></div>
                  </div>
                </div>

                {/* Controls Row */}
                <div className="flex items-center gap-3 text-white text-sm">
                  <span>0:47 / 25:00</span>
                  <div className="flex-1"></div>
                  <button className="hover:text-orange-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Actual Video Player - COMMENTED OUT UNTIL REAL VIDEO IS AVAILABLE */}
              {/* 
              {tutorial.videoUrl && (
                <video
                  src={tutorial.videoUrl}
                  className="absolute inset-0 w-full h-full object-cover"
                  controls={false}
                />
              )}
              */}
            </div>
          </div>

          {/* Tutorial Info Section */}
          <div className="mb-12">
            {/* Title and Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h1 className="text-3xl md:text-4xl font-semi-bold text-white">
                {tutorial.title}
              </h1>
              <div className="flex items-center gap-4">
                {/* Duration */}
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">{tutorial.duration}</span>
                </div>
                {/* Save/Star Button */}
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`transition-colors ${
                    isFavorited ? "text-orange-500" : "text-gray-400 hover:text-orange-500"
                  }`}
                >
                  <svg className="w-6 h-6" fill={isFavorited ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </button>
                {/* Share Button */}
                <button
                  onClick={() => {
                    // TODO: Implement share functionality
                    if (navigator.share) {
                      navigator.share({
                        title: tutorial.title,
                        text: tutorial.description,
                        url: window.location.href,
                      });
                    }
                  }}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="Share tutorial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed max-w-3xl">
              {tutorial.fullDescription || tutorial.description}
            </p>

            {/* Instructor Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={tutorial.author.avatar}
                    alt={tutorial.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Instructor</span>
                  <p className="text-white font-medium">{tutorial.author.name}</p>
                </div>
              </div>
              <Link
                href={`/instructors/${tutorial.instructorId || 1}`}
                className="text-orange-500 hover:text-orange-400 transition-colors text-sm font-medium"
              >
                View Profile
              </Link>
            </div>
          </div>

          {/* Reviews Section */}
          <TutorialReviews
            reviews={reviews}
            averageRating={averageRating}
            totalReviews={totalReviews}
          />
        </div>
      </section>

        <Footer />
      </div>

      {/* Review Modal */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmit={handleReviewSubmit}
      />
    </div>
  );
}

