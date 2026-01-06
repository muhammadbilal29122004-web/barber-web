"use client";

import { useState, useMemo, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstructorsHero from "@/components/instructors/InstructorsHero";
import InstructorCard from "@/components/instructors/InstructorCard";
import SearchBar from "@/components/SearchBar";
import ViewFilter from "@/components/ViewFilter";
import Pagination from "@/components/Pagination";
import { getAllInstructors, type Instructor } from "@/lib/data/instructors";

// Configuration constants
const ENTRIES_PER_PAGE = 12;

export default function InstructorsPage() {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewFilter, setViewFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Load instructors on mount
  useEffect(() => {
    const loadInstructors = async () => {
      setIsLoading(true);
      try {
        // TODO: Replace with real API call when ready
        const data = await getAllInstructors();
        setInstructors(data);
      } catch (error) {
        console.error("Failed to load instructors:", error);
        // Handle error state if needed
      } finally {
        setIsLoading(false);
      }
    };

    loadInstructors();
  }, []);

  // Filter and search instructors
  const filteredInstructors = useMemo(() => {
    // If no search query, return all instructors
    if (!searchQuery.trim()) {
      return instructors;
    }

    // Apply search filter
    // TODO: Replace with server-side search API call when ready
    const lowerQuery = searchQuery.toLowerCase();
    return instructors.filter(
      (instructor) =>
        instructor.name.toLowerCase().includes(lowerQuery) ||
        instructor.skills.some((skill) => skill.toLowerCase().includes(lowerQuery))
    );
  }, [instructors, searchQuery]);

  // Apply view filter (for future implementation)
  const viewFilteredInstructors = useMemo(() => {
    // TODO: Implement filtering logic based on viewFilter when needed
    // Example: Popular, Newest, Rating, etc.
    if (viewFilter === "All") {
      return filteredInstructors;
    }
    
    // Add other filter logic here
    return filteredInstructors;
  }, [filteredInstructors, viewFilter]);

  // Calculate pagination
  const totalPages = Math.ceil(viewFilteredInstructors.length / ENTRIES_PER_PAGE);
  const startIndex = (currentPage - 1) * ENTRIES_PER_PAGE;
  const endIndex = startIndex + ENTRIES_PER_PAGE;
  const paginatedInstructors = viewFilteredInstructors.slice(startIndex, endIndex);

  // Reset to page 1 when search/filter changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (value: string) => {
    setViewFilter(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <InstructorsHero />

      {/* Main Content */}
      <section className="bg-[#0A0A0A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <SearchBar
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="w-full sm:w-48">
              <ViewFilter value={viewFilter} onChange={handleFilterChange} />
            </div>
          </div>

          {/* Instructors Grid */}
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Loading instructors...</p>
            </div>
          ) : paginatedInstructors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No instructors found.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {paginatedInstructors.map((instructor) => (
                  <InstructorCard
                    key={instructor.id}
                    id={instructor.id}
                    name={instructor.name}
                    skills={instructor.skills}
                    image={instructor.image}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalEntries={viewFilteredInstructors.length}
                  entriesPerPage={ENTRIES_PER_PAGE}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

