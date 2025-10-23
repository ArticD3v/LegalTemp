interface StatCardProps {
  title: string;
  value: string;
  gradientFrom: string;
  gradientTo: string;
  className?: string;
}

function StatCard({ title, value, gradientFrom, gradientTo, className = "" }: StatCardProps) {
  return (
    <div className={`bg-white rounded-md p-4 shadow-sm ${className}`}>
      <div className="flex items-center gap-4">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl font-bold"
          style={{ backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
        >
          {value}
        </div>
        <div className="flex-1">
          <p className="text-[#666] text-sm font-medium leading-4">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default function QuickOverview() {
  return (
    <section className="bg-[rgba(243,243,248,0.75)] rounded-md p-6">
      <h2 className="text-lg font-bold text-[#222] mb-6">Quick Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Contracts" value="100" gradientFrom="#9B2CFD" gradientTo="#FF7A00" />
        <StatCard title="Disputes" value="100" gradientFrom="#9B2CFD" gradientTo="#FF7A00" />
        <StatCard title="Advocacy Tasks" value="100" gradientFrom="#9B2CFD" gradientTo="#FF7A00" />
        <StatCard title="Training Progress" value="100" gradientFrom="#9B2CFD" gradientTo="#FF7A00" />
      </div>
    </section>
  );
}
