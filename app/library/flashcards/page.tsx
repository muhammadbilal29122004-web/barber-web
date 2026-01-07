import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlashcardsDeck from "@/components/FlashcardsDeck";

export default function FlashcardsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header activePage="library" showUserIcons={true} />

      <div className="pt-20 sm:pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6">
            <nav className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
              <Link href="/library" className="hover:text-[#FF9F0A] transition-colors">
                Library
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-white font-urbanist font-semi-bold">Flashcards</span>
            </nav>
          </div>

          {/* Title */}
          <h1 
            className="text-black font-anton uppercase mb-10"
            style={{
              fontSize: '50px',
              fontWeight: 400,
              lineHeight: '120%',
              letterSpacing: '0%',
              WebkitTextStroke: '1px white',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #C1C1C1 50%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            FLASHCARDS
          </h1>

          {/* Deck */}
          <FlashcardsDeck />
        </div>
      </div>

      <Footer />
    </div>
  );
}


