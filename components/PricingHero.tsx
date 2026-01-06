export default function PricingHero() {
  return (
    <section className="relative bg-gray-900 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-4 z-10 py-8 lg:py-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
              Pricing
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
              Unlock premium tutorials, advanced study tools, and unlimited AI support.
            </p>
          </div>

          {/* Right Background Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
              {/* Barber scene placeholder - Replace with actual image */}
              <div className="absolute inset-0 flex items-end justify-center">
                <div className="relative w-full h-full max-w-md">
                  {/* Background brick texture effect */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-4 gap-1 h-full">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="bg-gray-700 rounded-sm"></div>
                      ))}
                    </div>
                  </div>

                  {/* Person - barber with glasses and apron */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    {/* Head with glasses */}
                    <div className="w-32 h-40 bg-gray-700 rounded-full relative mb-4">
                      {/* Face */}
                      <div className="absolute inset-x-4 top-6 w-24 h-28 bg-gray-600 rounded-full"></div>
                      {/* Glasses */}
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-2">
                        <div className="w-10 h-10 bg-gray-500 rounded-full border-2 border-gray-400"></div>
                        <div className="w-10 h-10 bg-gray-500 rounded-full border-2 border-gray-400"></div>
                      </div>
                      {/* Smile */}
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-8 bg-gray-500 rounded-full"></div>
                    </div>
                    
                    {/* Torso with apron */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-32 bg-white rounded-t-3xl">
                      {/* Apron strings */}
                      <div className="absolute -top-8 left-1/4 w-2 h-8 bg-white rounded-full"></div>
                      <div className="absolute -top-8 right-1/4 w-2 h-8 bg-white rounded-full"></div>
                      {/* Apron pocket */}
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-16 bg-gray-200 rounded-lg"></div>
                    </div>
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
