import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 z-10 py-8 lg:py-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-white block">Learn the Skills</span>
              <span className="text-white block">That Make a</span>
              <span className="text-orange-500 block">Great Barber</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
              Clear tutorials, real techniques, and expert instruction all in one
              place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/tutorials"
                className="bg-orange-500 text-white font-medium px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-center"
              >
                Start Learning
              </Link>
              <Link
                href="/tutorials"
                className="bg-gray-800 text-white font-medium px-8 py-4 rounded-lg hover:bg-gray-700 transition-colors text-center border border-gray-700"
              >
                Browse Tutorials
              </Link>
            </div>
          </div>

          {/* Right Background Image */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
              {/* Barber scene placeholder - Replace with actual image */}
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="relative w-full h-full max-w-md">
                  {/* Barber chair */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gray-800 rounded-t-2xl opacity-80"></div>
                  
                  {/* Person in chair - profile view */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    {/* Head */}
                    <div className="w-24 h-32 bg-gray-700 rounded-full relative">
                      {/* Face profile */}
                      <div className="absolute right-0 top-4 w-16 h-20 bg-gray-600 rounded-l-full"></div>
                      {/* Beard */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-12 bg-gray-800 rounded-b-full"></div>
                    </div>
                    
                    {/* Shoulders with cape */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-16 bg-black rounded-full"></div>
                  </div>
                  
                  {/* Barber's hands */}
                  <div className="absolute bottom-32 left-1/2 translate-x-8">
                    <div className="w-16 h-6 bg-gray-500 rounded-full opacity-90"></div>
                  </div>
                  <div className="absolute bottom-28 left-1/2 translate-x-12">
                    <div className="w-12 h-5 bg-gray-500 rounded-full opacity-90"></div>
                  </div>
                  
                  {/* Subtle background blur effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

