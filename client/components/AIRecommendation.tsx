import { RotateCcw, ArrowRight } from "lucide-react";

export default function AIRecommendation() {
  return (
    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">AI Recommendation</h3>
        <button className="p-1 hover:bg-purple-100 rounded">
          <RotateCcw className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-base leading-6 mb-4">
        Based on your recent activity and market trends, we suggest focusing on:
      </p>

      {/* Recommendation */}
      <h4 className="text-2xl font-bold text-[#C026D3] leading-8 mb-6">
        Audit Management
      </h4>

      {/* Why Link */}
      <button className="flex items-center gap-2 text-gray-700 font-semibold text-base hover:text-purple-600 transition-colors">
        <span>Why?</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
