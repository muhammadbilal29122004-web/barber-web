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
    <section className="py-12 sm:py-16 md:py-18 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10 md:mb-11 lg:mb-12">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-6 sm:w-8 h-0.5 bg-[#FE9A00]"></div>
            <h2 className="text-[18px] font-bold text-[#FE9A00] uppercase" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700, lineHeight: '100%', letterSpacing: '0%' }}>
              Haircut Styles
            </h2>
          </div>
          <h3 className="text-[50px] font-normal text-white mb-3 sm:mb-4" style={{ fontFamily: 'Anton, sans-serif', lineHeight: '120%', letterSpacing: '0%', fontWeight: 400 }}>
            Popular Haircut Styles
          </h3>
          <p className="text-[#A1A1A1] text-[16px] font-normal max-w-2xl" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}>
            Discover the lessons barbers are watching the most—updated daily
            based on real activity.
          </p>
        </div>

        {/* Haircut Style Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 lg:gap-5 max-w-7xl mx-auto">
          {haircutStyles.map((style) => (
            <Link
              key={style.id}
              href={style.link}
              className="group relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] w-full h-[350px] sm:h-[380px] lg:h-[400px]"
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
                <div className="absolute bottom-0 left-0 p-4 sm:p-5">
                  <h4 className="text-lg sm:text-xl font-semi-bold text-white mb-2 group-hover:text-[#FE9A00] transition-colors">
                    {style.title}
                  </h4>
                  <div className="flex items-center gap-2 text-white text-xs sm:text-sm">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
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
                <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5">
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.45" y="0.45" width="44.1" height="44.1" rx="22.05" stroke="#FE9A00" strokeWidth="0.9"/>
                    <path d="M24.525 17.4417L29.5833 22.5L24.525 27.5583" stroke="#FE9A00" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.4167 22.5H29.4417" stroke="#FE9A00" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
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

