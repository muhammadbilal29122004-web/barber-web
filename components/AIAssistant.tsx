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
          className={`fixed bottom-4 right-4 z-50 transition-all duration-300 max-w-[calc(100vw-2rem)] ${
            isMinimized
              ? "w-64 h-12"
              : "w-[300px] h-[450px]"
          }`}
        >
          <div className="bg-[#1a1a1a] rounded-lg shadow-2xl border border-gray-300/20 flex flex-col h-full overflow-hidden">
            {/* Header - Orange Background */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#FE9A00] rounded-t-lg">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#FE9A00] rounded-full flex items-center justify-center ring-2 ring-white/20">
                  <Image
                    src="/icons/ai.png"
                    alt="AI Assistant"
                    width={16}
                    height={16}
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <span className="text-white font-semi-bold">AI Assistant</span>
              </div>
              <div className="flex items-center gap-1.5">
                {isMinimized ? (
                  <button
                    onClick={handleMaximize}
                    className="w-5 h-5 flex items-center justify-center text-white hover:text-gray-200 transition-colors"
                    aria-label="Maximize"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={handleMinimize}
                    className="w-5 h-5 bg-[#FE9A00] rounded-full flex items-center justify-center border border-white/30 hover:bg-[#E68900] transition-colors"
                    aria-label="Minimize"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="white"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="w-5 h-5 flex items-center justify-center text-white hover:text-gray-200 transition-colors"
                  aria-label="Close"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Container */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[#0A0A0A]">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start gap-1.5 ${
                        message.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {/* AI Icon - Only for assistant messages, before the bubble */}
                      {message.sender === "assistant" && (
                        <div className="w-5 h-5 bg-[#FE9A00] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Image
                            src="/icons/ai.png"
                            alt="AI"
                            width={12}
                            height={12}
                            className="object-contain"
                          />
                        </div>
                      )}
                      
                      <div
                        className={`max-w-[75%] rounded-lg px-3 py-2.5 ${
                          message.sender === "user"
                            ? "bg-[#FE9A00] text-white"
                            : "bg-[#2C2C2C] text-white"
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
                <div className="p-3 border-t border-[#2C2C2C] bg-[#1a1a1a]">
                  <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message here..."
                      className="flex-1 bg-gray-200 rounded-lg px-3 py-2 text-xs text-gray-900 placeholder-gray-500 focus:outline-none transition-colors min-w-0"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={!inputValue.trim() || isLoading}
                      className="w-9 h-9 bg-[#FE9A00] rounded-full flex items-center justify-center hover:bg-[#E68900] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                      aria-label="Send message"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_send_icon)">
                          <path
                            d="M1.57579 0.890625C0.393601 0.890625 -0.368118 2.14898 0.183367 3.19711L2.2004 7.02398L8.96751 7.80094L2.2004 8.58094L0.183367 12.4078C-0.368118 13.4559 0.390554 14.7143 1.57579 14.7143C1.78907 14.7143 2.00235 14.6716 2.2004 14.5863L14.6865 9.19336C15.9052 8.66625 15.9052 6.93867 14.6865 6.41156L2.2004 1.01859C2.00235 0.933281 1.78907 0.890625 1.57579 0.890625Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_send_icon">
                            <rect width="15.6" height="15.6" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
