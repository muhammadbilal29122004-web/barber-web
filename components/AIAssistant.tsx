"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "My client wants a messy look on top but clean sides. What cut should I suggest?",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "That sounds like a Textured Crop with a Mid Fade. It keeps the top versatile for styling while keeping the sides sharp and modern.",
      sender: "assistant",
      timestamp: new Date(),
    },
    {
      id: "3",
      text: "Perfect. Do we have a tutorial for that?",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "4",
      text: "Yes! I found a great lesson for you",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I understand your question. Let me help you with that!",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleMaximize = () => {
    setIsMinimized(false);
    inputRef.current?.focus();
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-[#FE9A00] rounded-full shadow-2xl flex items-center justify-center hover:bg-[#E68900] transition-all duration-300 hover:scale-110"
          aria-label="Open AI Assistant"
        >
          <Image
            src="/icons/ai.png"
            alt="Chat"
            width={24}
            height={24}
            className="object-contain"
          />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-8 right-8 z-50 transition-all duration-300 max-w-[calc(100vw-2rem)] ${isMinimized
            ? "w-64 h-12"
            : "w-[395px] h-[568px]"
            }`}
        >
          <div className="bg-[#FE9A00] rounded-[26px] shadow-2xl border border-gray-300/20 flex flex-col h-full overflow-hidden">
            {/* Header - Transparent (Background provided by parent) */}
            <div className="flex items-center justify-between px-6 py-4 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-[37.5px] h-[37.5px] flex items-center justify-center">
                  <svg width="37.5" height="37.5" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 3.35786 3.35786 0 7.5 0H30C34.1421 0 37.5 3.35786 37.5 7.5V25C37.5 29.1421 34.1421 32.5 30 32.5H23.6922L19.6908 37.0731C19.4534 37.3444 19.1104 37.5 18.75 37.5C18.3896 37.5 18.0466 37.3444 17.8092 37.0731L13.8078 32.5H7.5C3.35786 32.5 0 29.1421 0 25V7.5ZM18.75 7.5C19.3336 7.5 19.8395 7.90381 19.9689 8.47281L20.6605 11.5143C20.9804 12.9211 22.0789 14.0196 23.4857 14.3395L26.5272 15.0311C27.0962 15.1605 27.5 15.6664 27.5 16.25C27.5 16.8336 27.0962 17.3395 26.5272 17.4689L23.4857 18.1605C22.0789 18.4804 20.9804 19.5789 20.6605 20.9857L19.9689 24.0272C19.8395 24.5962 19.3336 25 18.75 25C18.1664 25 17.6605 24.5962 17.5311 24.0272L16.8395 20.9857C16.5196 19.5789 15.4211 18.4804 14.0143 18.1605L10.9728 17.4689C10.4038 17.3395 10 16.8336 10 16.25C10 15.6664 10.4038 15.1605 10.9728 15.0311L14.0143 14.3395C15.4211 14.0196 16.5196 12.9211 16.8395 11.5143L17.5311 8.47281C17.6605 7.90381 18.1664 7.5 18.75 7.5Z" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-black font-urbanist font-bold text-[24px] leading-[22px] tracking-[0px]">AI Assistant</span>
              </div>
              <button
                onClick={handleClose}
                className="hover:opacity-80 transition-opacity"
                aria-label="Close"
              >
                <svg width="28.57" height="28.57" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.8856 29.2902C22.7427 29.2902 29.1713 22.8616 29.1713 15.0045C29.1713 7.14732 22.7427 0.71875 14.8856 0.71875C7.02843 0.71875 0.599854 7.14732 0.599854 15.0045C0.599854 22.8616 7.02843 29.2902 14.8856 29.2902Z" fill="black" fillOpacity="0.2" />
                  <path d="M9.17139 15H20.6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Messages Container - Dark Background with Top Radius */}
            {!isMinimized && (
              <div className="flex-1 bg-[#1D1D1D] rounded-t-[30px] flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start gap-2 ${message.sender === "user" ? "flex-row-reverse" : ""
                        }`}
                    >
                      {/* AI Icon - Only for assistant messages, before the bubble */}
                      {message.sender === "assistant" && (
                        <div className="w-[30px] h-[30px] bg-[#FE9A00] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Image
                            src="/icons/ai.png"
                            alt="AI"
                            width={15}
                            height={15}
                            className="object-contain"
                          />
                        </div>
                      )}

                      <div
                        className={`max-w-[75%] px-3 py-2.5 ${message.sender === "user"
                          ? "bg-[#FE9A00] text-black font-urbanist font-medium text-[16px] leading-[22px] rounded-[10px] rounded-tr-none"
                          : "bg-[#2C2C2C] text-white font-urbanist font-semi-bold text-[16px] leading-[22px] tracking-[0px] rounded-[10px] rounded-tl-none"
                          }`}
                      >
                        <p className="text-xs leading-relaxed whitespace-pre-wrap break-words">{message.text}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start items-start gap-2">
                      <div className="w-5 h-5 bg-[#FE9A00] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Image
                          src="/icons/ai.png"
                          alt="AI"
                          width={12}
                          height={12}
                          className="object-contain"
                        />
                      </div>
                      <div className="bg-[#2C2C2C] text-white rounded-lg px-3 py-2">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="w-[395px] mx-auto py-3 px-4 border-t border-[#404040] bg-[#1a1a1a]">
                  <form onSubmit={handleSendMessage} className="flex items-center gap-[12px]">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message here..."
                      className="flex-1 bg-transparent text-[#A1A1A1] placeholder-[#A1A1A1] font-urbanist font-normal text-[16px] leading-[22px] focus:outline-none transition-colors min-w-0"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim() || isLoading}
                      className="w-[45px] h-[45px] bg-[#FE9A00] rounded-full flex items-center justify-center hover:bg-[#E68900] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                      aria-label="Send message"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="black" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )
      }
    </>
  );
}
