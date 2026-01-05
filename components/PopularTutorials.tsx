import Link from "next/link";

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
    image: "/tutorials/low-fade.jpg",
    link: "/tutorials/low-fade-basics",
  },
  {
    id: 2,
    title: "Beard Line-Up & Detailing Guide",
    description:
      "Master precise beard shaping and clean line-ups with easy-to-follow guidance.",
    image: "/tutorials/beard-lineup.jpg",
    link: "/tutorials/beard-lineup",
  },
];

export default function PopularTutorials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-orange-500"></div>
            <h2 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
              Popular Tutorials
            </h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tutorials Picked Just for You
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Personalized lessons based on what you've watched and the skills you
            want to improve.
          </p>
        </div>

        {/* Tutorial Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.id}
              href={tutorial.link}
              className="group bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Image Container with Play Button */}
              <div className="relative h-64 bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden">
                {/* Placeholder for tutorial image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800">
                  {/* Simulated barber scene with more detail */}
                  <div className="absolute inset-0">
                    {/* Background blur effect - shelves/products */}
                    <div className="absolute top-4 right-4 w-20 h-16 bg-gray-700/50 rounded blur-sm"></div>
                    <div className="absolute top-8 right-12 w-16 h-12 bg-gray-600/50 rounded blur-sm"></div>
                    
                    {/* Main subject - person in chair */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      {/* Head */}
                      <div className="w-28 h-36 bg-gray-500 rounded-full relative">
                        {/* Face */}
                        <div className="absolute inset-2 bg-gray-400 rounded-full"></div>
                        {/* Cape/Clothing */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-44 h-24 bg-gray-800 rounded-full"></div>
                      </div>
                      
                      {/* Barber's hands/clippers - different positions for different tutorials */}
                      {tutorial.id === 1 ? (
                        <>
                          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-400 rounded-full"></div>
                          <div className="absolute top-16 left-1/2 translate-x-4 w-12 h-5 bg-gray-400 rounded-full"></div>
                        </>
                      ) : (
                        <>
                          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-400 rounded-full"></div>
                          <div className="absolute top-24 left-1/2 translate-x-6 w-10 h-4 bg-gray-400 rounded-full"></div>
                        </>
                      )}
                    </div>
                    
                    {/* Subtle lighting effects */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
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

              {/* Tutorial Info */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
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

