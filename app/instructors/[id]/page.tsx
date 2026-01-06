"use client";

import { useState, useMemo, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TutorialCard from "@/components/instructors/TutorialCard";
import SearchBar from "@/components/SearchBar";
import ViewFilter from "@/components/ViewFilter";
import Pagination from "@/components/Pagination";
import { getInstructorById, type Instructor } from "@/lib/data/instructors";
import { getTutorialsByInstructor, type Tutorial } from "@/lib/data/tutorials";

// Configuration constants
const ENTRIES_PER_PAGE = 6;

export default function InstructorDetailPage() {
  const params = useParams();
  const instructorId = Number(params.id);

  const [instructor, setInstructor] = useState<Instructor | null>(null);
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorited, setIsFavorited] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Load instructor and tutorials on mount
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // TODO: Replace with real API calls when ready
        const [instructorData, tutorialsData] = await Promise.all([
          getInstructorById(instructorId),
          getTutorialsByInstructor(instructorId),
        ]);

        setInstructor(instructorData);
        setTutorials(tutorialsData);
      } catch (error) {
        console.error("Failed to load instructor data:", error);
        // Handle error state if needed
      } finally {
        setIsLoading(false);
      }
    };

    if (instructorId) {
      loadData();
    }
  }, [instructorId]);

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
    // TODO: Implement filtering logic based on filterValue when needed
    // Example: Popular, Newest, Rating, etc.
    if (filterValue !== "All") {
      // Add other filter logic here
    }

    return filtered;
  }, [tutorials, searchQuery, filterValue]);

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
    setFilterValue(value);
    setCurrentPage(1);
  };

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    // TODO: Add API call to save favorite when real data is integrated
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A]">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-400">Loading instructor profile...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!instructor) {
    return (
      <div className="min-h-screen bg-[#0A0A0A]">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-400">Instructor not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Calculate experience and tutorial count (dummy data for now)
  const experience = "15 Years Experience";
  const tutorialCount = `${filteredTutorials.length} Tutorials`;

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />

      {/* Main Content */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/instructors"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              Instructors
            </Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-white">{instructor.name}</span>
          </div>

          {/* Instructor Profile Section */}
          <div className="bg-[#161616] rounded-2xl border border-[#2C2C2C] p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              {/* Profile Picture */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#2C2C2C]">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Instructor Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {instructor.name}
                    </h1>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <span>{experience}</span>
                      <span>•</span>
                      <span>{tutorialCount}</span>
                    </div>
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={handleFavoriteClick}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <svg
                      className={`w-5 h-5 ${
                        isFavorited ? "fill-orange-500" : ""
                      }`}
                      fill={isFavorited ? "currentColor" : "none"}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <span className="font-semibold">Save</span>
                  </button>
                </div>

                {/* About Section */}
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white mb-3">About</h2>
                  <p className="text-gray-300 leading-relaxed">
                    With over 15 years of experience, {instructor.name} specializes in classic and
                    modern Fade techniques. He&apos;s trained hundreds of barbers and is known for
                    his precision and attention to detail.
                  </p>
                </div>

                {/* Specializations */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">Specializations</h2>
                  <div className="flex flex-wrap gap-2">
                    {instructor.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#202020] text-white rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tutorials Section */}
          <div>
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-white mb-8">
              Tutorials By {instructor.name}
            </h2>

            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex-1">
                <SearchBar value={searchQuery} onChange={handleSearchChange} />
              </div>
              <div className="w-full sm:w-48">
                <ViewFilter
                  value={filterValue}
                  onChange={handleFilterChange}
                  options={["All", "Popular", "Newest", "Rating"]}
                />
              </div>
            </div>

            {/* Tutorials Grid */}
            {paginatedTutorials.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400">No tutorials found.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {paginatedTutorials.map((tutorial) => (
                    <TutorialCard
                      key={tutorial.id}
                      id={tutorial.id}
                      title={tutorial.title}
                      description={tutorial.description}
                      thumbnail={tutorial.thumbnail}
                      author={tutorial.author}
                      duration={tutorial.duration}
                      link={tutorial.link}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 0 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalEntries={filteredTutorials.length}
                    entriesPerPage={ENTRIES_PER_PAGE}
                    onPageChange={setCurrentPage}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

