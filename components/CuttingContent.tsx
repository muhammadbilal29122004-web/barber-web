"use client";

import Image from "next/image";
import Link from "next/link";

export default function CuttingContent() {
    return (
        <div className="w-full flex flex-col items-start">
            <div className="mb-4">
                <h1 className="text-[32px] md:text-[36px] font-semi-bold text-white mb-2">Cutting</h1>
                <div className="w-10 h-[2px] bg-[#FF9F0A]"></div>
            </div>

            <div className="space-y-6 mt-2 text-[#A0A0A0] text-[18px] leading-[1.6] font-normal">
                <p className="text-[18px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className="text-[18px]">
                    Sed ut pipsiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

                {/* Scaled-Down Quote Block */}
                <div className="bg-[#1A1510]/60 border-l-[2px] border-[#FF9F0A] p-4 md:p-5 my-4">
                    <p className="text-white text-[18px] font-semi-bold leading-snug mb-3">
                        "Design is not just what it looks like and feels like. Design is how it works."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-[3px] bg-[#FF9F0A] opacity-60"></div>
                        <p className="text-[#FF9F0A] font-medium text-[18px]">Steve Jobs</p>
                    </div>
                </div>

                <p className="text-[18px]">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>

                <div className="pt-2">
                    <h2 className="text-[24px] font-semi-bold text-white mb-4">Key Concepts</h2>
                    <ul className="space-y-3">
                        {[
                            "Understanding the fundamentals of design principles",
                            "Learning to use professional tools effectively",
                            "Developing your creative workflow and process",
                            "Building a strong foundation for advanced techniques"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                                <span className="text-[#FF9F0A] mt-1 text-[18px]">·</span>
                                <span className="text-[18px] text-[#A0A0A0] opacity-90 leading-[1.6]">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="text-[18px]">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>
            </div>
        </div>
    );
}
