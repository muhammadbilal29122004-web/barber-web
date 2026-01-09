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
        <div className="min-h-screen flex items-center">
          {/* Left Content */}
          <div className="relative lg:absolute z-10 w-full px-4 sm:px-6 md:px-8 lg:px-[100px] py-12 sm:py-16 md:py-20 lg:py-0" style={{ 
            top: 'clamp(120px, 15vw, 198.5px)',
            maxWidth: 'clamp(100%, 90vw, 640px)'
          }}>
            <div className="flex flex-col" style={{ gap: 'clamp(24px, 4vw, 40px)' }}>
              <h1 className="font-normal tracking-[0%]" style={{ 
                fontFamily: 'Anton, sans-serif', 
                fontWeight: 400,
                fontSize: 'clamp(36px, 8vw, 90px)',
                lineHeight: 'clamp(42px, 9vw, 100px)'
              }}>
                <span className="text-white block">Learn the Skills</span>
                <span className="text-white block">That Make a</span>
                <span className="text-[#FE9A00] block">Great Barber</span>
              </h1>
              <p className="text-[#D4D4D4] font-medium max-w-2xl" style={{ 
                fontFamily: 'Urbanist, sans-serif', 
                fontWeight: 500, 
                letterSpacing: '0%',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                lineHeight: 'clamp(24px, 3.5vw, 30px)'
              }}>
                Clear tutorials, real techniques, and expert instruction all in one
                place.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5">
                <Link
                  href="/tutorials"
                  className="bg-[#FE9A00] text-black rounded-full hover:bg-[#E68900] transition-colors text-center shadow-lg flex items-center justify-center"
                  style={{ 
                    fontFamily: 'Urbanist, sans-serif', 
                    fontWeight: 500, 
                    lineHeight: '100%', 
                    letterSpacing: '0%',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    padding: 'clamp(12px, 2vw, 16px) clamp(24px, 3vw, 40px)'
                  }}
                >
                  Start Learning
                </Link>
                <Link
                  href="/tutorials"
                  className="bg-[#2D2D2D] text-[#A1A1A1] rounded-full hover:bg-gray-700 transition-colors text-center border border-gray-700 shadow-lg flex items-center justify-center"
                  style={{ 
                    fontFamily: 'Urbanist, sans-serif', 
                    fontWeight: 500, 
                    lineHeight: '100%', 
                    textAlign: 'center', 
                    letterSpacing: '0%',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    padding: 'clamp(12px, 2vw, 16px) clamp(24px, 3vw, 40px)'
                  }}
                >
                  Browse Tutorials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

