import Link from "next/link";

interface StudyTool {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const studyTools: StudyTool[] = [
  {
    id: 1,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Flashcards",
    description: "Memorize key concepts with interactive flashcard decks.",
    buttonText: "Start Deck",
    buttonLink: "/study-tools/flashcards",
  },
  {
    id: 2,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Quiz",
    description: "Test your knowledge and track your progress.",
    buttonText: "Take Test",
    buttonLink: "/study-tools/quiz",
  },
];

export default function StudyTools() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semi-bold text-white mb-12">
          Study Tools
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {studyTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-[#FE9A00] rounded-full flex items-center justify-center text-white mb-4">
                {tool.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semi-bold text-white mb-2">
                {tool.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6">
                {tool.description}
              </p>

              {/* Button */}
              <Link
                href={tool.buttonLink}
                className="block w-full text-center border-2 border-[#FE9A00] text-[#FE9A00] font-medium py-3 rounded-lg hover:bg-[#FE9A00] hover:text-white transition-colors"
              >
                {tool.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

