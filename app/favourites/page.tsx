import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FavouritesHero from "@/components/favourite/FavouritesHero";
import FavouriteCourseCard from "@/components/favourite/FavouriteCourseCard";
import TutorialCard from "@/components/instructors/TutorialCard";
import InstructorCard from "@/components/instructors/InstructorCard";

// Sample data - replace with real data from API later
const favouriteCourses = [
  {
    id: 1,
    title: "Low Fade Basics - Shop-by-Shop",
    description: "Learn how to master the art of creating a clean, elegant, and sharp low fade.",
    image: "/8.jpg",
    link: "/courses/low-fade-basics",
  },
  {
    id: 2,
    title: "Low Fade Basics - Shop-by-Shop",
    description: "Learn how to master the art of creating a clean, elegant, and sharp low fade.",
    image: "/9.jpg",
    link: "/courses/low-fade-basics-2",
  },
  {
    id: 3,
    title: "Beard Line-Up & Detailing Guide",
    description: "Learn how to master the art of creating a clean, elegant, and sharp low fade.",
    image: "/10.jpg",
    link: "/courses/beard-lineup",
  },
];

const favouriteTutorials = [
  {
    id: 1,
    title: "Scissor Over Comb Techniques",
    description: "Master the art of scissor over comb techniques for precision cutting.",
    thumbnail: "/6.jpg",
    author: {
      name: "John Smith",
      avatar: "/1.jpg",
    },
    duration: "12 min",
    views: "2.5K",
    link: "/tutorials/scissor-over-comb",
  },
  {
    id: 2,
    title: "Modern Pompadour Styling",
    description: "Learn how to create modern pompadour styles with professional techniques.",
    thumbnail: "/7.jpg",
    author: {
      name: "Kenny McCooy",
      avatar: "/2.jpg",
    },
    duration: "15 min",
    views: "3.1K",
    link: "/tutorials/modern-pompadour",
  },
  {
    id: 3,
    title: "Clipper Maintenance and Care",
    description: "Essential tips for maintaining and caring for your clippers.",
    thumbnail: "/8.jpg",
    author: {
      name: "Adam McCooy",
      avatar: "/3.jpg",
    },
    duration: "10 min",
    views: "1.8K",
    link: "/tutorials/clipper-maintenance",
  },
  {
    id: 4,
    title: "Scissor Over Comb Techniques",
    description: "Master the art of scissor over comb techniques for precision cutting.",
    thumbnail: "/6.jpg",
    author: {
      name: "John Smith",
      avatar: "/1.jpg",
    },
    duration: "12 min",
    views: "2.5K",
    link: "/tutorials/scissor-over-comb-2",
  },
  {
    id: 5,
    title: "Modern Pompadour Styling",
    description: "Learn how to create modern pompadour styles with professional techniques.",
    thumbnail: "/7.jpg",
    author: {
      name: "Kenny McCooy",
      avatar: "/2.jpg",
    },
    duration: "15 min",
    views: "3.1K",
    link: "/tutorials/modern-pompadour-2",
  },
  {
    id: 6,
    title: "Clipper Maintenance and Care",
    description: "Essential tips for maintaining and caring for your clippers.",
    thumbnail: "/8.jpg",
    author: {
      name: "Adam McCooy",
      avatar: "/3.jpg",
    },
    duration: "10 min",
    views: "1.8K",
    link: "/tutorials/clipper-maintenance-2",
  },
];

const favouriteInstructors = [
  {
    id: 1,
    name: "Frank Castle",
    skills: ["Fades", "Beard Grooming", "Clipper Cuts"],
    image: "/1.jpg",
  },
  {
    id: 2,
    name: "Frank Castle",
    skills: ["Fades", "Beard Grooming", "Clipper Cuts"],
    image: "/2.jpg",
  },
  {
    id: 3,
    name: "Frank Castle",
    skills: ["Fades", "Beard Grooming", "Clipper Cuts"],
    image: "/3.jpg",
  },
];

export default function FavouritesPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <FavouritesHero />

      {/* Favourites Courses Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semi-bold text-white mb-8 sm:mb-12">
            Favourites Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {favouriteCourses.map((course) => (
              <FavouriteCourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                link={course.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Favourites Tutorials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semi-bold text-white mb-8 sm:mb-12">
            Favourites Tutorials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {favouriteTutorials.map((tutorial) => (
              <TutorialCard
                key={tutorial.id}
                id={tutorial.id}
                title={tutorial.title}
                description={tutorial.description}
                thumbnail={tutorial.thumbnail}
                author={tutorial.author}
                duration={tutorial.duration}
                link={tutorial.link}
                isLocked={false}
                progress={undefined}
                isCompleted={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Favourites Instructors Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semi-bold text-white mb-8 sm:mb-12">
            Favourites Instructors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {favouriteInstructors.map((instructor) => (
              <InstructorCard
                key={instructor.id}
                id={instructor.id}
                name={instructor.name}
                skills={instructor.skills}
                image={instructor.image}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

