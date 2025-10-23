interface ToolCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText?: string;
}

function ToolCard({
  icon,
  title,
  description,
  buttonText = "Start Now",
}: ToolCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center text-center">
      {/* Icon Background */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-amber-500 flex items-center justify-center mb-6">
        <i className={`${icon} text-white text-3xl`}></i>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 leading-7 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-base leading-6 mb-6">{description}</p>

      {/* Button */}
      <button className="px-12 py-3 bg-gradient-to-r from-purple-800 to-orange-600 text-white font-semibold text-base rounded-lg hover:opacity-90 transition-opacity">
        {buttonText}
      </button>
    </div>
  );
}

export default function ToolsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ToolCard
        icon="fas fa-calculator"
        title="Legal Accounting"
        description="Manage your legal finances with precision."
      />
      <ToolCard
        icon="fas fa-search"
        title="Audit Management"
        description="Streamline audit processes for efficiency."
      />
      <ToolCard
        icon="fas fa-bullhorn"
        title="Regulatory Advocacy"
        description="Influence policies and shape regulations."
      />
      <ToolCard
        icon="fas fa-shield-alt"
        title="Compliance Monitoring"
        description="Stay ahead of regulatory changes."
      />
    </div>
  );
}
