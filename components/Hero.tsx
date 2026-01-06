import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Full Width Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/heroimage.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 z-10 py-8 lg:py-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-white block">Learn the Skills</span>
              <span className="text-white block">That Make a</span>
              <span className="text-orange-500 block">Great Barber</span>
            </h1>
            <p className="text-lg md:text-xl text-white max-w-lg leading-relaxed">
              Clear tutorials, real techniques, and expert instruction all in one
              place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/tutorials"
                className="bg-orange-500 text-white font-medium px-8 py-4 rounded-full hover:bg-orange-600 transition-colors text-center"
              >
                Start Learning
              </Link>
              <Link
                href="/tutorials"
                className="bg-gray-800 text-white font-medium px-8 py-4 rounded-full hover:bg-gray-700 transition-colors text-center border border-gray-700"
              >
                Browse Tutorials
              </Link>
            </div>
          </div>

          {/* Right side - empty but maintains grid layout */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}

