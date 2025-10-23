interface StatusBadgeProps {
  status: string;
  type: 'in-review' | 'drafting' | 'pending' | 'in-progress' | 'completed';
}

function StatusBadge({ status, type }: StatusBadgeProps) {
  const getStatusStyles = (type: string) => {
    switch (type) {
      case 'in-review':
        return 'bg-[#C7D9FF] text-[#3A6EE8]';
      case 'drafting':
        return 'bg-[#FFF3B8] text-[#BFAE3A]';
      case 'pending':
        return 'bg-[#E6E6E6] text-[#666]';
      case 'in-progress':
        return 'bg-[#E6D6FF] text-[#7A3AD9]';
      case 'completed':
        return 'bg-[#D6FFDB] text-[#3A8A3A]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${getStatusStyles(type)}`}>
      {status}
    </span>
  );
}

interface RiskBadgeProps {
  risk: string;
  level: 'high' | 'medium' | 'low' | 'none';
}

function RiskBadge({ risk, level }: RiskBadgeProps) {
  const getRiskStyles = (level: string) => {
    switch (level) {
      case 'high':
        return 'bg-[#FFD6D6] text-[#D94A4A]';
      case 'medium':
        return 'bg-[#FFDBB8] text-[#D98A3A]';
      case 'low':
        return 'bg-[#D6FFDB] text-[#3A8A3A]';
      default:
        return 'text-[#999]';
    }
  };

  if (level === 'none') {
    return <span className="text-[#999] text-sm">N/A</span>;
  }

  return (
    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${getRiskStyles(level)}`}>
      {risk}
    </span>
  );
}

const matters = [
  {
    title: "Contract Review - Alpha Inc. Acquisition",
    status: "In Review",
    statusType: "in-review" as const,
    risk: "High",
    riskLevel: "high" as const,
    action: "View"
  },
  {
    title: "Fundraising - Beta Ventures Round A",
    status: "Drafting",
    statusType: "drafting" as const,
    risk: "Medium",
    riskLevel: "medium" as const,
    action: "Edit"
  },
  {
    title: "Dispute - Gamma Corp. IP Infringement",
    status: "Pending",
    statusType: "pending" as const,
    risk: "Low",
    riskLevel: "low" as const,
    action: "Details"
  },
  {
    title: "Advocacy - Delta Group Regulatory Compliance",
    status: "In Progress",
    statusType: "in-progress" as const,
    risk: "High",
    riskLevel: "high" as const,
    action: "Manage"
  },
  {
    title: "Training - Legal Tech Certification",
    status: "Completed",
    statusType: "completed" as const,
    risk: "N/A",
    riskLevel: "none" as const,
    action: "View"
  }
];

export default function LegalKanbanBoard() {
  return (
    <section className="bg-[rgba(243,243,248,0.75)] rounded-md p-6">
      <h2 className="text-lg font-bold text-black mb-4">Legal Task Kanban Board</h2>

      <div className="bg-white rounded-md border border-[#EAEAEA] overflow-hidden">
        {/* Table Header */}
        <div className="bg-white border-b border-[#EAEAEA] px-4 py-2">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-1">
              <span className="text-[#555] text-xs font-semibold">No.</span>
            </div>
            <div className="col-span-4">
              <span className="text-[#555] text-xs font-semibold">MATTER</span>
            </div>
            <div className="col-span-3">
              <span className="text-[#555] text-xs font-semibold">STATUS</span>
            </div>
            <div className="col-span-2">
              <span className="text-[#555] text-xs font-semibold">RISK</span>
            </div>
            <div className="col-span-2">
              <span className="text-[#555] text-xs font-semibold">ACTIONS</span>
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="bg-white">
          {matters.map((matter, index) => (
            <div key={index} className="border-b border-[#EAEAEA] last:border-b-0 px-4 py-3">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1">
                  <span className="text-[#999] text-xs font-semibold">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="col-span-4">
                  <span className="text-[#333] text-sm">{matter.title}</span>
                </div>
                <div className="col-span-3">
                  <StatusBadge status={matter.status} type={matter.statusType} />
                </div>
                <div className="col-span-2">
                  <RiskBadge risk={matter.risk} level={matter.riskLevel} />
                </div>
                <div className="col-span-2">
                  <button className="text-[#9B2CFD] text-sm hover:underline">
                    {matter.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination and Footer */}
        <div className="flex items-center justify-between px-4 py-3 bg-white">
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-xs rounded-md bg-[#F0F0F0] text-[#555]">PREV</button>
            {[1,2,3,4].map((n) => (
              <button
                key={n}
                className={`w-8 h-8 text-xs rounded-md border ${n===2 ? 'bg-[#333] text-white' : 'bg-white text-[#555] border-[#EAEAEA]'}`}
              >
                {n}
              </button>
            ))}
            <button className="px-3 py-1 text-xs rounded-md bg-[#F0F0F0] text-[#555]">NEXT</button>
          </div>
          <span className="text-[10px] tracking-wider text-[#999]">NUMBER OF PAGE 04</span>
        </div>
      </div>
    </section>
  );
}
