import Link from "next/link";
import Image from "next/image";

export default function LibraryHero() {
  return (
    <section className="relative w-full flex items-center pt-16" style={{ height: '500px' }}>
      {/* Background Image with specific size */}
      <div className="absolute inset-0 w-full h-[500px] -right-[50px]">
        <Image
          src="/Libraryheroimage.png"
          alt="Library Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-[500px]">
          {/* Left Content */}
          <div className="flex flex-col gap-4 z-10 py-8 lg:py-12 -mt-[50px]">
            <h1 className="text-[90px] font-normal leading-[100px] tracking-normal text-white">
              Library
            </h1>
            <p className="text-lg md:text-xl text-white max-w-lg leading-relaxed">
              Explore course materials, study tools. <br /> and step-by-step guides.
            </p>
          </div>

          {/* Right side - Background image shows through */}
          <div className="hidden lg:block relative h-full"></div>
        </div>
      </div>
    </section>
  );
}

