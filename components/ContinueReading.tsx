import Link from "next/link";

interface ReadingItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  progress: number;
}

const readingItems: ReadingItem[] = [
  {
    id: 1,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Business",
    description: "Pricing, operations, growth",
    progress: 60,
  },
  {
    id: 2,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Content Creation",
    description: "Videos, photos, social media",
    progress: 60,
  },
  {
    id: 3,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Client Growth",
    description: "Retention, marketing, referrals",
    progress: 60,
  },
];

export default function ContinueReading() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semi-bold text-white mb-4">
            Continue Reading
          </h2>
          <p className="text-gray-400 text-lg">
            Pick up where you left off.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {readingItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#161616]  hover:bg-[#202020] rounded-lg p-6 border border-gray-700"
            > 
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#FE9A00] rounded-full flex items-center justify-center text-black flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semi-bold text-white">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {item.description}
              </p>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-sm">
                    {item.progress}% Completed
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-[#FE9A00] h-2 rounded-full transition-all"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Continue Reading Button */}
              <Link
                href={`/library/${item.title.toLowerCase().replace(' ', '-')}`}
                className="block w-full text-center border-2 border-[#FE9A00] text-[#FE9A00] font-medium py-3 rounded-lg hover:bg-[#FE9A00] hover:text-white transition-colors"
              >
                Continue Reading
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

