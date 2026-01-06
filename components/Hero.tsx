import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Full Width Background Image */}
      <div className="absolute inset-0 w-full h-full -right-[50px]">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Content */}
          <div className="flex flex-col gap-6 z-10 py-8 lg:py-12 -mt-[50px]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semi-bold leading-[1.2] tracking-[4.5px]">
              <span className="text-white block mb-2">Learn the Skills</span>
              <span className="text-white block mb-2">That Make a</span>
              <span className="text-[#FE9A00] block">Great Barber</span>
            </h1>
            <p className="text-lg md:text-xl text-white max-w-lg leading-relaxed">
              Clear tutorials, real techniques, and expert instruction all in one
              place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/tutorials"
                className="bg-[#FE9A00] text-white font-medium px-8 py-4 rounded-full hover:bg-[#E68900] transition-colors text-center"
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

          {/* Right side - Background image shows through */}
          <div className="hidden lg:block relative h-full"></div>
        </div>
      </div>
    </section>
  );
}

