import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizInterface from "@/components/QuizInterface";

export default function QuizTakePage() {
    return (
        <div className="min-h-screen bg-black">
            <Header activePage="library" showUserIcons={true} />

            <div className="pt-24 pb-16">
                <QuizInterface />
            </div>

            <Footer />
        </div>
    );
}
