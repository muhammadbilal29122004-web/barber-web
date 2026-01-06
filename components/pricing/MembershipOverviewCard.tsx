export default function MembershipOverviewCard() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <div className="bg-[#161616] rounded-xl border border-[#161616] p-6">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div>
            <h3 className="text-xl font-semi-bold text-white mb-1">Pro Membership</h3>
            <p className="text-gray-400">Monthly subscription</p>
          </div>

          {/* Right Side */}
          <div className="text-right">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semi-bold text-white">$29</span>
              <span className="text-gray-400">/month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

