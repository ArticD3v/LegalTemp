interface FeedItemProps {
  title: string;
  description: string;
  color: string;
}

function FeedItem({ title, description, color }: FeedItemProps) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="min-w-0 pr-3">
        <h4 className="text-[#222] text-sm font-semibold leading-4 mb-1 truncate">{title}</h4>
        <p className="text-[#666] text-xs leading-4 truncate">{description}</p>
      </div>
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
    </div>
  );
}

const feedItems = [
  {
    title: "Contract Review Completed",
    description: "Due in 3 days",
    color: "#D94A4A",
  },
  {
    title: "Term Sheet Drafted",
    description: "Beta Ventures Round A - 4h ago",
    color: "#D98A3A",
  },
  {
    title: "Contract Review Completed",
    description: "Alpha Inc. Acquisition - 3h ago",
    color: "#D94A4A",
  },
];

export default function RealtimeFeed() {
  return (
    <section className="bg-[rgba(243,243,248,0.75)] rounded-md p-4">
      <h2 className="text-lg font-bold text-black mb-4">Real-time Feed</h2>

      <div className="bg-white rounded-md p-4 shadow-sm">
        <div className="divide-y divide-gray-100">
          {feedItems.map((item, index) => (
            <FeedItem
              key={index}
              title={item.title}
              description={item.description}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
