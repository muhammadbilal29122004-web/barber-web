import Image from "next/image";

export default function PricingHero() {
  return (
    <section className="relative pt-16">
      {/* Full Width Background Image */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/pricing.png"
          alt="Pricing hero"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-4 z-10">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semi-bold text-white">
                  Pricing
                </h1>
                <p className="text-lg md:text-xl text-white max-w-lg leading-relaxed">
                  Unlock premium tutorials, advanced study tools, and unlimited AI support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

