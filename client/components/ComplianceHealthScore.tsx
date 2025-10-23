export default function ComplianceHealthScore() {
  const complianceScore = 85;
  
  return (
    <section className="bg-[rgba(243,243,248,0.75)] rounded-md p-6">
      <h2 className="text-lg font-bold text-black mb-4">Compliance Health Score</h2>
      
      <div className="bg-white rounded-md p-4 shadow-sm">
        {/* Score Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[#666] text-xs">Compliance Score</span>
          <span className="text-[#D94A00] text-sm font-semibold">{complianceScore}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-[#D9D9D9] rounded-full h-2 mb-4">
          <div 
            className="h-2 rounded-full bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00]" 
            style={{ width: `${complianceScore}%` }}
          ></div>
        </div>
        
        {/* AI Insights */}
        <p className="text-[#666] text-xs leading-4">
          AI Insights: Your compliance health is strong, with minor areas for improvement in data privacy.
        </p>
      </div>
    </section>
  );
}
