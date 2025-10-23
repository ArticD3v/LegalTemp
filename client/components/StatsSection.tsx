interface StatCardProps {
  title: string;
  value: string;
  className?: string;
}

function StatCard({ title, value, className = "" }: StatCardProps) {
  return (
    <div className={`bg-white rounded-xl p-4 shadow-sm ${className}`}>
      <div className="space-y-1">
        <p className="text-gray-500 text-base leading-6">{title}</p>
        <p className="text-[#7E22CE] text-4xl font-bold leading-10">{value}</p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Open Invoices" value="10" />
      <StatCard title="Pending Audits" value="3" />
      <StatCard title="Compliance Alerts" value="2" />
      <StatCard title="Active Policies" value="4" />
    </section>
  );
}
