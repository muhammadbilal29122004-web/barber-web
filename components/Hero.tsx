import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-0">
      {/* Full Width Background Image - starts from top to show behind navbar */}
      <div className="absolute top-0 left-0 right-0 w-full h-screen z-0">
        <Image
          src="/heroimage.png"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full">
        <div className="min-h-screen">
          {/* Left Content */}
          <div
            className="flex flex-col z-10"
            style={{
              position: 'absolute',
              top: '198.5px',
              left: '100px',
              width: '640px',
              gap: '40px'
            }}
          >
            <h1 className="text-[90px] font-normal leading-[100px] tracking-[0%]" style={{ fontFamily: 'Anton, sans-serif', fontWeight: 400 }}>
              <span className="text-white block">Learn the Skills</span>
              <span className="text-white block">That Make a</span>
              <span className="text-[#FE9A00] block">Great Barber</span>
            </h1>
            <p className="text-[#D4D4D4] text-[20px] font-medium max-w-2xl leading-[30px]" style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, letterSpacing: '0%' }}>
              Clear tutorials, real techniques, and expert instruction all in one
              place.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5">
              <Link
                href="/tutorials"
                className="bg-[#FE9A00] text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-4 rounded-full hover:bg-[#E68900] transition-colors text-center shadow-lg text-[16px]"
                style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: '100%', letterSpacing: '0%' }}
              >
                Start Learning
              </Link>
              <Link
                href="/tutorials"
                className="bg-[#2D2D2D] text-[#A1A1A1] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-4 rounded-full hover:bg-gray-700 transition-colors text-center border border-gray-700 shadow-lg text-[16px]"
                style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 500, lineHeight: '100%', textAlign: `center`, letterSpacing: '0%' }}
              >
                Browse Tutorials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

