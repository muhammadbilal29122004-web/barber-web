import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularInstructors from "@/components/PopularInstructors";
import PopularTutorials from "@/components/PopularTutorials";
import PopularHaircutStyles from "@/components/PopularHaircutStyles";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <PopularInstructors />
      <PopularTutorials />
      <PopularHaircutStyles />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  );
}
