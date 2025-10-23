interface GamificationCardProps {
  title: string;
  value: string;
  valueColor?: string;
}

function GamificationCard({ title, value, valueColor = "#D94A4A" }: GamificationCardProps) {
  return (
    <div className="bg-[#E6D6FF] rounded-md p-3 flex justify-between items-center">
      <span className="text-[#D94A4A] text-sm font-semibold">{title}</span>
      <span 
        className="text-sm font-semibold"
        style={{ color: valueColor }}
      >
        {value}
      </span>
    </div>
  );
}

export default function Gamification() {
  return (
    <section className="bg-[#F3F3F8] rounded-md p-4">
      <h2 className="text-lg font-bold text-black mb-4">Gamification</h2>
      
      <div className="space-y-4">
        <GamificationCard 
          title="Legal Tokens" 
          value="1500"
          valueColor="#D94A4A"
        />
        <GamificationCard 
          title="Leaderboard Rank" 
          value="#3"
          valueColor="#9B2CFD"
        />
      </div>
    </section>
  );
}
