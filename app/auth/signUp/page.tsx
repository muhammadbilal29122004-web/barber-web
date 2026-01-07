"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    //check again
    // check repo check
    if (!agreeToTerms) {
      alert("Please agree to the terms & conditions");
      return;
    }

    setIsLoading(true);
    // Handle signup logic here
    console.log("Signup attempt:", {
      firstName,
      secondName,
      email,
      password,
    });
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // router.push("/");
    }, 1000);
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`Sign up with ${provider}`);
    // Handle social signup logic here
  };

  return (
    <div className="h-screen bg-[#0F0F0F] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
      {/* Sign Up Card */}
      <div className="relative w-full max-w-[690px] bg-[#0A0A0A] rounded-[40px] shadow-2xl border border-[#262626] p-[50px] flex flex-col gap-[39px] overflow-y-auto" style={{ height: 'fit-content', minHeight: '909px' }}>
        {/* Close Button */}
        <Link
          href="/"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 flex items-center justify-center text-white hover:text-[#FF9900] transition-colors z-10"
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
        <div className="flex justify-center mb-4 sm:mb-5">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M22.224 35.2376C23.0882 35.4762 23.9985 35.6047 24.9385 35.6047C25.8161 35.6047 26.6687 35.4935 27.4812 35.2847L23.537 50L18.6216 48.6835L22.224 35.2376Z" fill="#FE9A00"/>
                <path d="M36.1816 47.3506L31.2645 48.6672L27.6657 35.2358C29.4169 34.7505 30.9782 33.807 32.2139 32.5448L36.1816 47.3506Z" fill="#FE9A00"/>
                <path d="M17.5817 32.4599C18.7922 33.7254 20.3261 34.6794 22.0504 35.1888L11.2648 45.9744L7.66602 42.3756L17.5817 32.4599Z" fill="#FE9A00"/>
                <path d="M45.8044 38.7352L42.2038 42.334L32.3134 32.4418C33.5343 31.1592 34.4237 29.5579 34.8452 27.776L45.8044 38.7352Z" fill="#FE9A00"/>
                <path d="M15.03 27.7633C15.4425 29.5178 16.3106 31.0975 17.5004 32.3712L2.64938 36.3498L1.33283 31.4345L15.03 27.7633Z" fill="#FE9A00"/>
                <path d="M31.3657 1.31655L27.6765 15.0843L38.5652 4.1956L42.164 7.79442L32.0982 17.8602L47.1806 13.8202L48.4972 18.7355L34.7475 22.4193L49.83 26.4612L48.5135 31.3784L34.8597 27.7199C35.0295 26.9825 35.12 26.214 35.1201 25.425C35.1201 19.8032 30.5621 15.2455 24.9403 15.2452C19.3183 15.2452 14.7606 19.803 14.7606 25.425C14.7606 26.2191 14.8508 26.9926 15.0228 27.7344L0 23.7088L1.31655 18.7916L15.0662 22.4754L4.02561 11.4348L7.62442 7.83601L17.6903 17.9018L13.6502 2.81937L18.5655 1.50282L22.3072 15.4622L26.4486 0L31.3657 1.31655Z" fill="#FE9A00"/>
              </svg>
            </div>
            <span className="text-[#FE9A00] text-[22px] font-semi-bold leading-[26.76px]" style={{ width: '147.46px', height: '26.76px' }}>Logoipsum</span>
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-semi-bold text-white text-center mb-1 sm:mb-2">
          Create Your Account
        </h1>
        <p className="text-gray-300 text-xs sm:text-sm text-center mb-4 sm:mb-5">
          Sign up to track your progress and unlock the full library.
        </p>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 flex-1">
          {/* First Name and Second Name - Side by Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-[#9A9A9A] text-xs sm:text-sm font-medium mb-1.5"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Write your first name"
                className="w-full bg-[#161616] border border-[#262626] rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white text-sm placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#FF9900] transition-colors"
                required
              />
            </div>
            <div>
              <label
                htmlFor="secondName"
                className="block text-[#9A9A9A] text-xs sm:text-sm font-medium mb-1.5"
              >
                Second Name
              </label>
              <input
                type="text"
                id="secondName"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
                placeholder="Write your second name"
                className="w-full bg-[#161616] border border-[#262626] rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white text-sm placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#FF9900] transition-colors"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-[#9A9A9A] text-xs sm:text-sm font-medium mb-1.5"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Write your email"
              className="w-full bg-[#1A1A1A] border border-[#262626] rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-white text-sm placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#FF9900] transition-colors"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-[#9A9A9A] text-xs sm:text-sm font-medium mb-1.5"
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
                className="w-full bg-[#1A1A1A] border border-[#262626] rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-10 sm:pr-12 text-white text-sm placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#FF9900] transition-colors"
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

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-[#9A9A9A] text-xs sm:text-sm font-medium mb-1.5"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full bg-[#161616] border border-[#262626] rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-10 sm:pr-12 text-white text-sm placeholder:text-[#6F6F6F] focus:outline-none focus:border-[#FF9900] transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? (
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

          {/* Terms & Conditions Checkbox */}
          <div className="flex items-start gap-2 sm:gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="mt-0.5 w-4 h-4 text-[#FF9900] bg-[#161616] border-[#262626] rounded focus:ring-[#FF9900] focus:ring-2"
              required
            />
            <label htmlFor="terms" className="text-gray-300 text-xs sm:text-sm leading-tight">
              I agree with our{" "}
              <Link
                href="/terms"
                className="text-[#FF9900] underline hover:opacity-80 transition-colors"
              >
                terms & conditions
              </Link>
            </label>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#FF9900] text-white font-semi-bold py-2 sm:py-2.5 rounded-full hover:bg-[#E68900] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Separator */}
        <div className="relative my-4 sm:my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#262626]"></div>
          </div>
          <div className="relative flex justify-center text-xs sm:text-sm">
            <span className="px-3 sm:px-4 bg-[#0A0A0A] text-gray-300">or</span>
          </div>
        </div>

        {/* Social Sign Up Buttons */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          {/* Google */}
          <button
            onClick={() => handleSocialSignup("google")}
            className="flex items-center justify-center gap-1 sm:gap-2 bg-[#2D2D2D] hover:bg-[#353535] text-white py-2.5 sm:py-3 rounded-full transition-colors border border-[#262626]"
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
            onClick={() => handleSocialSignup("apple")}
            className="flex items-center justify-center gap-1 sm:gap-2 bg-[#2D2D2D] hover:bg-[#353535] text-white py-2.5 sm:py-3 rounded-full transition-colors border border-[#262626]"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01.01zm-3.67-17.5c.15-1.23 1.13-2.18 2.4-2.3.27 1.18-.72 2.27-1.81 2.61-.23-.84-.28-1.71-.59-2.31z" />
            </svg>
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">Apple</span>
          </button>

          {/* Facebook */}
          <button
            onClick={() => handleSocialSignup("facebook")}
            className="flex items-center justify-center gap-1 sm:gap-2 bg-[#2D2D2D] hover:bg-[#353535] text-white py-2.5 sm:py-3 rounded-full transition-colors border border-[#262626]"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-semi-bold">f</span>
            </div>
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">Facebook</span>
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center pt-3 sm:pt-4">
          <span className="text-gray-300 text-xs sm:text-sm">Already have an account? </span>
          <Link
            href="/auth/login"
            className="text-[#FF9900] hover:opacity-80 transition-colors font-medium underline text-xs sm:text-sm"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

