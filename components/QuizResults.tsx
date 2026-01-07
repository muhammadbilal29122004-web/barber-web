"use client";

import { useRouter } from "next/navigation";
import { Anton, Urbanist } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const urbanist = Urbanist({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

interface AnswerReview {
    id: number;
    text: string;
    status: 'correct' | 'incorrect' | 'skipped';
    userAnswer?: string;
    correctAnswer: string;
}

interface QuizResultsProps {
    score: number;
    totalQuestions: number;
    timeTaken: string;
    correctCount: number;
    incorrectCount: number;
    reviews: AnswerReview[];
    onRetake: () => void;
    onExit: () => void;
}

export default function QuizResults({
    score,
    totalQuestions,
    timeTaken,
    correctCount,
    incorrectCount,
    reviews,
    onRetake,
    onExit
}: QuizResultsProps) {
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    return (
        <div className={`w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 ${urbanist.className}`}>
            {/* Header */}
            <div className="flex flex-col mb-12">
                <div className="flex items-center gap-2 mb-4 text-[16px] leading-[22px] font-urbanist font-normal">
                    <span className="text-[#A1A1A1]">Library</span>
                    <span className="text-[#A1A1A1]/40">/</span>
                    <span className="text-[#A1A1A1]">Quiz</span>
                    <span className="text-[#A1A1A1]/40">/</span>
                    <span className="text-[#D4D4D4]">Quiz Results</span>
                </div>
                <h1 className={`${anton.className} text-[50px] leading-[60px] uppercase tracking-tight bg-gradient-to-b from-white via-[#C1C1C1] to-white bg-clip-text text-transparent`}>Quiz Results</h1>
                <p className="text-[#D4D4D4] font-urbanist text-[16px] leading-[22px] font-normal">Outstanding performance! Here's how you did.</p>
            </div>

            {/* Results Card */}
            <div className="w-full max-w-[900px] mx-auto bg-white/5 border border-white/10 rounded-[12px] p-[50px] mb-20 relative overflow-hidden flex flex-col gap-[50px]">
                {/* Score Circle Section */}
                <div className="flex flex-col items-center relative z-10">
                    <div className="relative w-[179px] h-[179px] flex items-center justify-center">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-[#00C755]/20 blur-[60px] rounded-full"></div>

                        {/* SVG Progress Circle */}
                        <svg className="w-full h-full -rotate-90 relative z-10">
                            <circle
                                cx="89.5"
                                cy="89.5"
                                r="84"
                                stroke="rgba(255, 255, 255, 0.05)"
                                strokeWidth="10"
                                fill="transparent"
                            />
                            <circle
                                cx="89.5"
                                cy="89.5"
                                r="84"
                                stroke="#00C755"
                                strokeWidth="10"
                                fill="transparent"
                                strokeDasharray={527.79}
                                strokeDashoffset={527.79 * (1 - percentage / 100)}
                                strokeLinecap="round"
                                className="transition-all duration-1000 ease-out"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                            <span className={`${anton.className} text-white text-[48px] leading-none`}>{percentage}%</span>
                        </div>
                    </div>
                    <div className="mt-[30px] flex flex-col items-center gap-[1px]">
                        <p className="text-[#A1A1A1] font-urbanist text-[16px] leading-[16px]">Time Taken</p>
                        <p className="text-white text-[18px] leading-[24px] font-urbanist font-normal">{timeTaken}</p>
                    </div>
                </div>

                {/* Metric Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Correct */}
                    <div className="bg-[#00C950]/5 border border-[#00C950]/30 rounded-[10px] p-[16px] h-[127px] flex flex-col items-center justify-center text-center transition-colors">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 -mt-[2px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#00C950" strokeWidth="1.5" />
                                <path d="M8 12L11 15L16 9" stroke="#00C950" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className={`${anton.className} text-white text-[32px] leading-tight`}>{correctCount}</span>
                        <span className="text-[#A1A1A1] font-urbanist text-[14px]">Correct</span>
                    </div>

                    {/* Incorrect */}
                    <div className="bg-[#FB2C36]/5 border border-[#FB2C36]/30 rounded-[10px] p-[16px] h-[127px] flex flex-col items-center justify-center text-center transition-colors gap-1">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center -mt-[2px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="#FB2C36" strokeWidth="1.5" />
                                <path d="M15 9L9 15M9 9L15 15" stroke="#FB2C36" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className={`${anton.className} text-white text-[32px] leading-tight`}>{incorrectCount}</span>
                        <span className="text-[#A1A1A1] font-urbanist text-[14px]">Incorrect</span>
                    </div>

                    {/* Score */}
                    <div className="bg-[#2B7FFF]/5 border border-[#2B7FFF]/30 rounded-[10px] p-[16px] h-[127px] flex flex-col items-center justify-center text-center transition-colors gap-1">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center -mt-[2px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4768 12.8896L16.9918 21.4156C17.0087 21.516 16.9946 21.6192 16.9514 21.7114C16.9081 21.8036 16.8377 21.8803 16.7497 21.9314C16.6616 21.9825 16.56 22.0055 16.4586 21.9974C16.3571 21.9892 16.2605 21.9502 16.1818 21.8856L12.6018 19.1986C12.4289 19.0695 12.219 18.9998 12.0033 18.9998C11.7875 18.9998 11.5776 19.0695 11.4048 19.1986L7.81875 21.8846C7.74007 21.9491 7.64361 21.988 7.54225 21.9962C7.44088 22.0044 7.33942 21.9815 7.25141 21.9305C7.16341 21.8796 7.09303 21.803 7.04967 21.711C7.00631 21.619 6.99204 21.516 7.00875 21.4156L8.52275 12.8896" stroke="#2B7FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z" stroke="#2B7FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className={`${anton.className} text-white text-[32px] leading-tight`}>{score}</span>
                        <span className="text-[#A1A1A1] font-urbanist text-[14px]">Score</span>
                    </div>
                </div>

                {/* Answer Review Section */}
                <div>
                    <p className="text-[#A1A1A1] font-urbanist text-[16px] mb-6">Answer Review</p>
                    <div className="space-y-4">
                        {reviews.map((review, index) => {
                            const isCorrect = review.status === 'correct';
                            const isSkipped = review.status === 'skipped';
                            const isIncorrect = review.status === 'incorrect';

                            return (
                                <div key={index} className="bg-white/5 border border-white/10 rounded-[10px] p-[16px] min-h-[123px] flex items-start gap-[18px]">
                                    {/* Status Icon */}
                                    <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center flex-shrink-0 mt-[2px] ${isCorrect ? 'bg-[#00A63E]/20' :
                                        isSkipped ? '' : // Background inside SVG
                                            'bg-[#E7000B]/20'
                                        }`}>
                                        {isCorrect ? (
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00A63E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9 12L11 14L15 10" stroke="#00A63E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        ) : isSkipped ? (
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white" fillOpacity="0.2" />
                                                <g clipPath="url(#clip0_181_1283)">
                                                    <path d="M16.0003 24.3337C20.6027 24.3337 24.3337 20.6027 24.3337 16.0003C24.3337 11.398 20.6027 7.66699 16.0003 7.66699C11.398 7.66699 7.66699 11.398 7.66699 16.0003C7.66699 20.6027 11.398 24.3337 16.0003 24.3337Z" stroke="#D4D4D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12.667 16H19.3337" stroke="#D4D4D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_181_1283">
                                                        <rect width="20" height="20" fill="white" transform="translate(6 6)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        ) : (
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.08333 17.4167C13.6857 17.4167 17.4167 13.6857 17.4167 9.08333C17.4167 4.48096 13.6857 0.75 9.08333 0.75C4.48096 0.75 0.75 4.48096 0.75 9.08333C0.75 13.6857 4.48096 17.4167 9.08333 17.4167Z" stroke="#E7000B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 7L7 12M7 7L12 12" stroke="#E7000B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </div>

                                    <div className="flex-1 flex flex-col justify-center gap-1">
                                        <div className="flex items-center gap-1 text-[16px] leading-[16px] font-urbanist font-normal">
                                            <span className="text-[#A1A1A1]">Question{review.id}</span>
                                            <span className="text-[#A1A1A1]">·</span>
                                            <span className={`${isCorrect ? 'text-[#00A63E]' :
                                                isSkipped ? 'text-[#525252]' :
                                                    'text-[#E7000B]'
                                                }`}>
                                                {isCorrect ? 'Correct' : isSkipped ? 'Skipped' : 'Incorrect'}
                                            </span>
                                        </div>
                                        <p className="text-white text-[18px] font-urbanist font-normal leading-none">{review.text}</p>
                                        <div className="text-[16px] font-urbanist">
                                            <span className="text-[#A1A1A1] mr-2">Correct answer:</span>
                                            <span className="text-[#00A63E] font-normal">{review.correctAnswer}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Action Buttons Section */}
                <div className="flex flex-col sm:flex-row gap-5">
                    <button
                        onClick={onRetake}
                        className="flex-1 h-[60px] rounded-full border border-[#2D2D2D] bg-transparent text-[#A1A1A1] font-urbanist font-bold text-[18px] hover:bg-white/5 transition-all"
                    >
                        Retake Quiz
                    </button>
                    <button
                        onClick={onExit}
                        className="flex-1 h-[60px] rounded-full relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FE9A00] to-[#E68A00] rounded-full blur-[10px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="absolute inset-0 bg-[#0A0A0A] rounded-full m-[1px]"></div>
                        <div className="absolute inset-0 border border-[#FE9A00] rounded-full"></div>
                        <span className="relative z-10 text-[#FE9A00] font-urbanist font-bold text-[18px]">Exit Quiz</span>
                    </button>
                </div>
            </div>
        </div >
    );
}
