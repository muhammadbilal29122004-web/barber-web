import Link from "next/link";

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
    image: "/haircuts/low-fade.jpg",
    link: "/tutorials/low-fade-basics",
  },
  {
    id: 2,
    title: "Beard Styling",
    duration: "12 min",
    image: "/haircuts/beard-styling.jpg",
    link: "/tutorials/beard-styling",
  },
  {
    id: 3,
    title: "Undercut Styling",
    duration: "9 min",
    image: "/haircuts/undercut.jpg",
    link: "/tutorials/undercut-styling",
  },
  {
    id: 4,
    title: "Fade with Line",
    duration: "11 min",
    image: "/haircuts/fade-with-line.jpg",
    link: "/tutorials/fade-with-line",
  },
];

export default function PopularHaircutStyles() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-orange-500"></div>
            <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Haircut Styles
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Popular Haircut Styles
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl">
            Discover the lessons barbers are watching the most—updated daily
            based on real activity.
          </p>
        </div>

        {/* Haircut Style Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {haircutStyles.map((style) => (
            <Link
              key={style.id}
              href={style.link}
              className="group bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative"
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden">
                {/* Placeholder for haircut image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800">
                  {/* Simulated haircut scene */}
                  <div className="absolute inset-0">
                    {/* Background blur effect */}
                    <div className="absolute top-2 right-2 w-16 h-12 bg-gray-700/50 rounded blur-sm"></div>
                    
                    {/* Main subject - person getting haircut */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      {/* Head with different styles based on card */}
                      {style.id === 1 ? (
                        // Low Fade
                        <div className="w-32 h-40 bg-gray-500 rounded-full relative">
                          <div className="absolute inset-2 bg-gray-400 rounded-full"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-600 rounded-b-full"></div>
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-20 bg-gray-800 rounded-full"></div>
                        </div>
                      ) : style.id === 2 ? (
                        // Beard Styling
                        <div className="w-32 h-40 bg-gray-500 rounded-full relative">
                          <div className="absolute inset-2 bg-gray-400 rounded-full"></div>
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-16 bg-gray-700 rounded-b-full"></div>
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-20 bg-gray-800 rounded-full"></div>
                        </div>
                      ) : style.id === 3 ? (
                        // Undercut
                        <div className="w-32 h-40 bg-gray-500 rounded-full relative">
                          <div className="absolute top-2 left-2 right-2 h-20 bg-gray-300 rounded-t-full"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-600 rounded-b-full"></div>
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-20 bg-gray-800 rounded-full"></div>
                        </div>
                      ) : (
                        // Fade with Line
                        <div className="w-32 h-40 bg-gray-500 rounded-full relative">
                          <div className="absolute inset-2 bg-gray-400 rounded-full"></div>
                          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-600 rounded-b-full"></div>
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-20 bg-gray-800 rounded-full"></div>
                        </div>
                      )}
                      
                      {/* Barber's hands/tools */}
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-400 rounded-full"></div>
                    </div>
                    
                    {/* Subtle lighting effects */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 relative">
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {style.title}
                </h4>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
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

                {/* Orange Circular Button */}
                <div className="absolute bottom-5 right-5 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <svg
                    className="w-5 h-5 text-white ml-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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

