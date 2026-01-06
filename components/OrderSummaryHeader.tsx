import Link from "next/link";

export default function OrderSummaryHeader() {
  return (
    <div className="bg-gray-900 pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Link href="/pricing" className="hover:text-orange-500 transition-colors">
              Pricing
            </Link>
            <span>/</span>
            <span className="text-gray-300">Order Summary</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white">Order Summary</h1>
      </div>
    </div>
  );
}
