import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizOverview from "@/components/QuizOverview";

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header activePage="library" showUserIcons={true} />
      
      <div className="pt-20 sm:pt-24 pb-16">
        <QuizOverview />
      </div>

      <Footer />
    </div>
  );
}

