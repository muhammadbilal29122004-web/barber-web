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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_flashcards)">
          <path d="M3 18.9987C4.36817 18.2088 5.92017 17.793 7.5 17.793C9.07983 17.793 10.6318 18.2088 12 18.9987C13.3682 18.2088 14.9202 17.793 16.5 17.793C18.0798 17.793 19.6318 18.2088 21 18.9987" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 5.99874C4.36817 5.20883 5.92017 4.79297 7.5 4.79297C9.07983 4.79297 10.6318 5.20883 12 5.99874C13.3682 5.20883 14.9202 4.79297 16.5 4.79297C18.0798 4.79297 19.6318 5.20883 21 5.99874" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 6V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 6V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_flashcards">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Flashcards",
    description: "Memorize key concepts with interactive flashcard decks.",
    buttonText: "Start Deck",
    buttonLink: "/library/flashcards",
  },
  {
    id: 2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_quiz)">
          <path d="M19 5V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 6H8.01" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 18H16.01" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 9V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_quiz">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
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
              className="bg-[#161616]  hover:bg-[#202020] rounded-lg p-6 border border-gray-700"
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
              <p className="text-[#A1A1A1] text-lg font-medium leading-none tracking-[-0.02em] mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                {tool.description}
              </p>

              {/* Button */}
              <Link
                href={tool.buttonLink}
                className="block w-full text-center border-2 border-[#FE9A00] text-[#FE9A00] font-medium py-3 rounded-full hover:bg-[#FE9A00] hover:text-white transition-colors"
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

