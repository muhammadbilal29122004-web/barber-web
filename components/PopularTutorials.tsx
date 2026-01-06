import Link from "next/link";
import Image from "next/image";

interface Tutorial {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Low Fade Basics - Step-by-Step",
    description:
      "Learn how to create a clean low fade using simple, beginner-friendly techniques.",
    image: "/6.jpg",
    link: "/tutorials/low-fade-basics",
  },
  {
    id: 2,
    title: "Beard Line-Up & Detailing Guide",
    description:
      "Master precise beard shaping and clean line-ups with easy-to-follow guidance.",
    image: "/7.jpg",
    link: "/tutorials/beard-lineup",
  },
];

export default function PopularTutorials() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#FE9A00]"></div>
            <h2 className="text-sm font-semibold text-[#FE9A00] uppercase tracking-wider">
              Popular Tutorials
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-semi-bold text-white mb-4">
            Tutorials Picked Just for You
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Personalized lessons based on what you've watched and the skills you
            want to improve.
          </p>
        </div>

        {/* Tutorial Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-[1330px] mx-auto">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.id}
              href={tutorial.link}
              className="group rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col w-full"
            >
              {/* Image Container with Play Button - Extends to yellow line */}
              <div className="relative w-full h-[350px] overflow-hidden">
                <Image
                  src={tutorial.image}
                  alt={tutorial.title}
                  fill
                  className="object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg
                      className="w-8 h-8 text-gray-900 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Gray Background Text Section - Below yellow line */}
              <div className="bg-gray-800 p-6">
                <h4 className="text-xl font-semi-bold text-white mb-2 group-hover:text-[#FE9A00] transition-colors">
                  {tutorial.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {tutorial.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

