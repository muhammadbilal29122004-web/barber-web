import Link from "next/link";
import Image from "next/image";

interface HaircutStyle {
  id: number;
  title: string;
  duration: string;
  image: string;
  link: string;
}

const haircutStyles: HaircutStyle[] = [
  {
    id: 1,
    title: "Low Fade Basics",
    duration: "8 min",
    image: "/8.jpg",
    link: "/tutorials/low-fade-basics",
  },
  {
    id: 2,
    title: "Beard Styling",
    duration: "12 min",
    image: "/9.jpg",
    link: "/tutorials/beard-styling",
  },
  {
    id: 3,
    title: "Undercut Styling",
    duration: "9 min",
    image: "/10.jpg",
    link: "/tutorials/undercut-styling",
  },
  {
    id: 4,
    title: "Fade with Line",
    duration: "11 min",
    image: "/11.jpg",
    link: "/tutorials/fade-with-line",
  },
];

export default function PopularHaircutStyles() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-[#FE9A00]"></div>
            <h2 className="text-sm font-semibold text-[#FE9A00] uppercase tracking-wider">
              Haircut Styles
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-semi-bold text-white mb-4">
            Popular Haircut Styles
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl">
            Discover the lessons barbers are watching the most—updated daily
            based on real activity.
          </p>
        </div>

        {/* Haircut Style Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-7xl mx-auto">
          {haircutStyles.map((style) => (
            <Link
              key={style.id}
              href={style.link}
              className="group relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] w-full h-[400px]"
            >
              {/* Image Container - Full Card */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Text Overlays - Bottom Left */}
                <div className="absolute bottom-0 left-0 p-5">
                  <h4 className="text-xl font-semi-bold text-white mb-2 group-hover:text-[#FE9A00] transition-colors">
                    {style.title}
                  </h4>
                  <div className="flex items-center gap-2 text-white text-sm">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{style.duration}</span>
                  </div>
                </div>

                {/* Orange Circular Button - Bottom Right */}
                <div className="absolute bottom-5 right-5 w-12 h-12 border-2 border-[#FE9A00] rounded-full flex items-center justify-center group-hover:border-[#E68900] transition-colors">
                  <svg
                    className="w-6 h-6 text-[#FE9A00] ml-0.5 group-hover:text-[#E68900] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

