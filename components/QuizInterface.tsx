"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import QuizResults from "./QuizResults";

interface Option {
    id: string;
    label: string;
    text: string;
}

interface Question {
    id: number;
    text: string;
    options: Option[];
    correctAnswerId: string;
}

const QUIZ_DATA: Question[] = [
    {
        id: 1,
        text: "What is the main purpose of a line-up?",
        options: [
            { id: "A", label: "A.", text: "Add volume to hair" },
            { id: "B", label: "B.", text: "Create clean and sharp edges" },
            { id: "C", label: "C.", text: "Reduce hair length" },
            { id: "D", label: "D.", text: "Blend the fade" },
        ],
        correctAnswerId: "B"
    },
    {
        id: 2,
        text: "What is the primary purpose of React hooks?",
        options: [
            { id: "A", label: "A.", text: "To create styles" },
            { id: "B", label: "B.", text: "To manage state and side effects" },
            { id: "C", label: "C.", text: "To handle routing" },
            { id: "D", label: "D.", text: "To optimize images" },
        ],
        correctAnswerId: "B"
    }
];

export default function QuizInterface() {
    const router = useRouter();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState({ min: 30, sec: 20 });
    const [isFinished, setIsFinished] = useState(false);
    const [userAnswers, setUserAnswers] = useState<Record<number, string | null>>({});
    const [startTime] = useState(Date.now());

    const currentQuestion = QUIZ_DATA[currentQuestionIndex];
    const totalQuestions = QUIZ_DATA.length;
    const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    // Timer effect
    useEffect(() => {
        if (isFinished) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.sec === 0) {
                    if (prev.min === 0) {
                        clearInterval(timer);
                        handleFinish();
                        return prev;
                    }
                    return { min: prev.min - 1, sec: 59 };
                }
                return { ...prev, sec: prev.sec - 1 };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [isFinished]);

    const handleBack = () => router.back();

    const handleConfirm = () => {
        const nextAnswers = { ...userAnswers, [currentQuestion.id]: selectedOptionId };
        setUserAnswers(nextAnswers);

        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOptionId(nextAnswers[QUIZ_DATA[currentQuestionIndex + 1].id] || null);
        } else {
            handleFinish();
        }
    };

    const handleSkip = () => {
        const nextAnswers = { ...userAnswers, [currentQuestion.id]: null };
        setUserAnswers(nextAnswers);

        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOptionId(nextAnswers[QUIZ_DATA[currentQuestionIndex + 1].id] || null);
        } else {
            handleFinish();
        }
    };

    const handleFinish = () => {
        setIsFinished(true);
    };

    const getResultsData = () => {
        let correct = 0;
        let incorrect = 0;
        const reviews = QUIZ_DATA.map(q => {
            const userAnswer = userAnswers[q.id];
            const isCorrect = userAnswer === q.correctAnswerId;
            if (userAnswer) {
                if (isCorrect) correct++;
                else incorrect++;
            }

            return {
                id: q.id,
                text: q.text,
                status: (userAnswer === null || userAnswer === undefined) ? 'skipped' : (isCorrect ? 'correct' : 'incorrect'),
                userAnswer: q.options.find(o => o.id === userAnswer)?.text,
                correctAnswer: q.options.find(o => o.id === q.correctAnswerId)?.text || ""
            } as const;
        });

        const elapsedMs = Date.now() - startTime;
        const minsTaken = Math.floor(elapsedMs / 60000);
        const secsTaken = Math.floor((elapsedMs % 60000) / 1000);

        return {
            score: correct,
            totalQuestions,
            timeTaken: `${minsTaken}min ${secsTaken}sec`,
            correctCount: correct,
            incorrectCount: incorrect,
            reviews
        };
    };

    if (isFinished) {
        const results = getResultsData();
        return (
            <QuizResults
                {...results}
                onRetake={() => {
                    setCurrentQuestionIndex(0);
                    setSelectedOptionId(null);
                    setUserAnswers({});
                    setIsFinished(false);
                    setTimeLeft({ min: 30, sec: 20 });
                }}
                onExit={() => router.push("/study-tools/quiz")}
            />
        );
    }

    return (
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            {/* Header & Timer Section */}
            <div className="flex justify-between items-start mb-12">
                <div className="flex flex-col">
                    <h1 className="text-white font-anton text-[64px] leading-tight uppercase tracking-tight">Quiz</h1>
                    <p className="text-[#A1A1A1] font-urbanist text-[18px]">Test your knowledge</p>
                </div>

                {/* Timer Box */}
                <div className="bg-[#1A1A1A] border border-[#2D2D2D] rounded-[10px] w-[110px] h-[77px] flex flex-col items-center justify-center">
                    <div className="flex items-baseline gap-1 leading-[20px] tracking-[0.04em]">
                        <span className="text-white font-anton text-[26px]">{timeLeft.min}</span>
                        <span className="text-white font-anton text-[26px]">:</span>
                        <span className="text-white font-anton text-[26px]">{timeLeft.sec.toString().padStart(2, '0')}</span>
                    </div>
                    <div className="flex justify-between w-full px-[18px]">
                        <span className="text-[#A1A1A1] font-urbanist text-[16px] font-medium leading-[20px]">min</span>
                        <span className="text-[#A1A1A1] font-urbanist text-[16px] font-medium leading-[20px]">sec</span>
                    </div>
                </div>
            </div>

            {/* Progress Section */}
            <div className="max-w-[900px] mx-auto mb-10">
                <div className="flex justify-between items-end mb-4 font-urbanist">
                    <span className="text-[#A1A1A1] text-[16px]">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
                    <span className="text-[#A1A1A1] text-[16px]">{Math.round(progressPercent)}% complete</span>
                </div>
                <div className="w-full h-[8px] bg-[#404040] rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#FE9A00] transition-all duration-500 ease-out"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
            </div>

            {/* Main Question Card */}
            <div className="w-full max-w-[900px] mx-auto bg-white/5 border border-white/10 rounded-[12px] p-[50px] mb-8 min-h-[322px] flex flex-col justify-center">
                <div className="mb-10">
                    <h2 className="text-white font-anton text-[28px] mb-4 uppercase tracking-wide">Question {currentQuestion.id}</h2>
                    <p className="text-white font-urbanist text-[20px] font-medium leading-relaxed opacity-90">
                        {currentQuestion.text}
                    </p>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                    {currentQuestion.options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => setSelectedOptionId(option.id)}
                            className={`flex items-center gap-[10px] h-[50px] py-[14px] px-[12px] rounded-[10px] border transition-all text-left font-urbanist
                ${selectedOptionId === option.id
                                    ? 'border-[#FE9A00] bg-transparent text-[#FE9A00]'
                                    : 'border-transparent bg-[#FAFAFA]/10 text-[#A1A1A1] hover:bg-[#FAFAFA]/15'
                                }`}
                        >
                            <span className={`text-[16px] font-bold ${selectedOptionId === option.id ? 'text-[#FE9A00]' : 'text-[#A1A1A1]'}`}>
                                {option.label}
                            </span>
                            <span className="text-[16px] font-medium leading-none">{option.text}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-20 max-w-[900px] mx-auto">
                <button
                    onClick={handleSkip}
                    className="flex-1 h-[60px] rounded-full border border-[#2D2D2D] bg-transparent text-[#A1A1A1] font-urbanist text-[18px] font-bold hover:bg-white/5 transition-all"
                >
                    Skip
                </button>
                <button
                    onClick={handleConfirm}
                    disabled={!selectedOptionId}
                    className={`flex-1 h-[60px] rounded-full font-urbanist text-[18px] font-bold transition-all
            ${selectedOptionId
                            ? 'border border-[#FE9A00] bg-transparent text-[#FE9A00] hover:bg-[#FE9A00]/5'
                            : 'border border-[#2D2D2D] bg-[#111111] text-[#A1A1A1] opacity-50 cursor-not-allowed'
                        }`}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}
