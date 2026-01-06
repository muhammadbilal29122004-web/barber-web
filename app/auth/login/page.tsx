"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle login logic here
    console.log("Login attempt:", { email, password });
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // router.push("/");
    }, 1000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Handle social login logic here
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Login Card */}
      <div className="relative w-full max-w-[690px] min-h-[600px] sm:min-h-[650px] md:min-h-[771px] bg-[#0F0F0F] rounded-2xl shadow-2xl border border-[#262626] p-6 sm:p-8 md:p-10 flex flex-col">
        {/* Close Button */}
        <Link
          href="/"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 flex items-center justify-center text-white hover:text-[#FF9900] transition-colors z-10"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
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
        </Link>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <svg
                className="w-8 h-8 text-[#FF9900]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Sun icon with rays */}
                <circle cx="12" cy="12" r="4" fill="currentColor" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5.64 5.64l1.41 1.41M16.95 16.95l1.41 1.41M5.64 18.36l1.41-1.41M16.95 7.05l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[#FF9900] text-xl font-semi-bold">Logoipsum</span>
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-semi-bold text-white text-center mb-2">Login</h1>
        <p className="text-gray-300 text-sm sm:text-base text-center mb-6 sm:mb-8">
          Continue your journey to mastery.
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-[#9A9A9A] text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Write your email"
              className="w-full bg-[#1A1A1A] border border-[#262626] rounded-lg px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#FF9900] transition-colors"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-[#9A9A9A] text-sm font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Write your password"
                className="w-full bg-[#1A1A1A] border border-[#262626] rounded-lg px-4 py-2.5 sm:py-3 pr-12 text-white text-sm sm:text-base placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#FF9900] transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <Link
              href="/auth/forgot-password"
              className="text-[#FF9900] text-sm hover:opacity-80 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#FF9900] text-white font-semi-bold py-2.5 sm:py-3 rounded-full hover:bg-[#E68900] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Separator */}
        <div className="relative my-6 sm:my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#262626]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[#0F0F0F] text-gray-300">or</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {/* Google */}
          <button
            onClick={() => handleSocialLogin("google")}
            className="flex items-center justify-center gap-1 sm:gap-2 bg-[#1A1A1A] hover:bg-[#262626] text-white py-2.5 sm:py-3 rounded-full transition-colors border border-[#262626]"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">Google</span>
          </button>

          {/* Apple */}
          <button
            onClick={() => handleSocialLogin("apple")}
            className="flex items-center justify-center gap-1 sm:gap-2 bg-[#1A1A1A] hover:bg-[#262626] text-white py-2.5 sm:py-3 rounded-full transition-colors border border-[#262626]"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01.01zm-3.67-17.5c.15-1.23 1.13-2.18 2.4-2.3.27 1.18-.72 2.27-1.81 2.61-.23-.84-.28-1.71-.59-2.31z" />
            </svg>
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">Apple</span>
          </button>

          {/* Facebook */}
          <button
            onClick={() => handleSocialLogin("facebook")}
            className="flex items-center justify-center gap-1 sm:gap-2 bg-[#1A1A1A] hover:bg-[#262626] text-white py-2.5 sm:py-3 rounded-full transition-colors border border-[#262626]"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-semi-bold">f</span>
            </div>
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">Facebook</span>
          </button>
        </div>

        {/* Sign Up Prompt */}
        <div className="mt-auto text-center pt-4 sm:pt-6">
          <span className="text-gray-300 text-sm sm:text-base">Don't have an account? </span>
          <Link
            href="/auth/signUp"
            className="text-[#FF9900] hover:opacity-80 transition-colors font-medium underline text-sm sm:text-base"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

