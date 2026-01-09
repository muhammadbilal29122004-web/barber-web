"use client";

import { useState, useMemo, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TutorialsHero from "@/components/tutorials/TutorialsHero";
import TutorialCard from "@/components/instructors/TutorialCard";
import SearchBar from "@/components/SearchBar";
import ViewFilter from "@/components/ViewFilter";
import Pagination from "@/components/Pagination";
import { getAllTutorials, type Tutorial } from "@/lib/data/tutorials";

// Configuration constants
const ENTRIES_PER_PAGE = 9;

// Dummy user - replace with actual user data from DB later
// For now: true = premium user, false = free user
const dummyUser = false; // Set to false to see free user experience

export default function TutorialsPage() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewFilter, setViewFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Load tutorials on mount
  useEffect(() => {
    const loadTutorials = async () => {
      setIsLoading(true);
      try {
        // TODO: Replace with real API call when ready
        const data = await getAllTutorials();
        setTutorials(data);
      } catch (error) {
        console.error("Failed to load tutorials:", error);
        // Handle error state if needed
      } finally {
        setIsLoading(false);
      }
    };

    loadTutorials();
  }, []);

  // Filter and search tutorials
  const filteredTutorials = useMemo(() => {
    let filtered = tutorials;

    // Apply search filter
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (tutorial) =>
          tutorial.title.toLowerCase().includes(lowerQuery) ||
          tutorial.description.toLowerCase().includes(lowerQuery) ||
          tutorial.author.name.toLowerCase().includes(lowerQuery)
      );
    }

    // Apply view filter (for future implementation)
    // TODO: Implement filtering logic based on viewFilter when needed
    // Example: Popular, Newest, Rating, etc.
    if (viewFilter !== "All") {
      // Add other filter logic here
    }

    return filtered;
  }, [tutorials, searchQuery, viewFilter]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredTutorials.length / ENTRIES_PER_PAGE);
  const startIndex = (currentPage - 1) * ENTRIES_PER_PAGE;
  const endIndex = startIndex + ENTRIES_PER_PAGE;
  const paginatedTutorials = filteredTutorials.slice(startIndex, endIndex);

  // Reset to page 1 when search/filter changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (value: string) => {
    setViewFilter(value);
    setCurrentPage(1);
  };

  // Determine which tutorials should be locked for free users
  // For demo: lock every other tutorial starting from the 4th one
  const shouldLockTutorial = (index: number) => {
    if (dummyUser) return false; // Premium users see all
    // Lock tutorials starting from index 3 (4th tutorial) in a pattern
    return index >= 3 && index % 2 === 1;
  };

  // Generate progress/completion data (dummy data for demo)
  const getTutorialStatus = (tutorialId: number) => {
    // Some tutorials have progress, some are completed
    const progressMap: Record<number, number> = {
      1: 80,
      2: 90,
      5: 60,
    };
    const completedIds = [3, 6];
    
    if (completedIds.includes(tutorialId)) {
      return { isCompleted: true, progress: undefined };
    }
    if (progressMap[tutorialId]) {
      return { isCompleted: false, progress: progressMap[tutorialId] };
    }
    return { isCompleted: false, progress: undefined };
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <TutorialsHero />

      {/* Main Content */}
      <section className="bg-[#0A0A0A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between">
            <div className="w-full sm:w-1/2">
              <SearchBar
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search name"
              />
            </div>
            <div className="w-full sm:w-22">
              <ViewFilter value={viewFilter} onChange={handleFilterChange} />
            </div>
          </div>

          {/* Tutorials Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Loading tutorials...</p>
            </div>
          ) : paginatedTutorials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No tutorials found.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {paginatedTutorials.map((tutorial, index) => {
                  const globalIndex = startIndex + index;
                  const isLocked = shouldLockTutorial(globalIndex);
                  const { isCompleted, progress } = getTutorialStatus(tutorial.id);
                  
                  return (
                    <TutorialCard
                      key={tutorial.id}
                      id={tutorial.id}
                      title={tutorial.title}
                      description={tutorial.description}
                      thumbnail={tutorial.thumbnail}
                      author={tutorial.author}
                      duration={tutorial.duration}
                      link={tutorial.link}
                      isLocked={isLocked}
                      progress={progress}
                      isCompleted={isCompleted}
                    />
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 0 && (
                <div className="flex items-center justify-between">
                  <div className="text-gray-400 text-sm">
                    Showing {startIndex + 1}-{Math.min(endIndex, filteredTutorials.length)} of {filteredTutorials.length} videos
                  </div>
                  <div className="flex items-center gap-2">
                    {/* Page numbers - show up to 3 pages */}
                    {Array.from({ length: Math.min(3, totalPages) }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-colors ${
                          currentPage === page
                            ? "bg-[#FE9A00] border-[#FE9A00] text-black"
                            : "border-[#2C2C2C] bg-[#161616] text-[#737373] hover:border-orange-500 hover:bg-[#1a1a1a]"
                        }`}
                        aria-label={`Page ${page}`}
                      >
                        {page}
                      </button>
                    ))}

                    {/* Next button (>>) */}
                    {totalPages > 3 && (
                      <button
                        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#2C2C2C] bg-[#161616] text-white hover:border-orange-500 hover:bg-[#1a1a1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Next page"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <svg
                          className="w-5 h-5 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

