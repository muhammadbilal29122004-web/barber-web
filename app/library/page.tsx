import Header from "@/components/Header";
import LibraryHero from "@/components/LibraryHero";
import CourseCategories from "@/components/CourseCategories";
import ContinueReading from "@/components/ContinueReading";
import StudyTools from "@/components/StudyTools";
import Footer from "@/components/Footer";

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header activePage="library" showUserIcons={true} />
      <LibraryHero />
      <CourseCategories />
      <ContinueReading />
      <StudyTools />
      <Footer />
    </div>
  );
}

