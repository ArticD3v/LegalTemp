import { Home, FileText, Scale, Megaphone, GraduationCap, Shield, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: FileText, label: "Contracts", path: "/contracts" },
  { icon: Scale, label: "Disputes", path: "/disputes" },
  { icon: Megaphone, label: "Advocacy", path: "/advocacy" },
  { icon: GraduationCap, label: "Training", path: "/training" },
  { icon: Shield, label: "Policy", path: "/policy" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-full w-[240px] bg-white border-r border-[#EAEAEA] flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-[#EAEAEA]">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/da945ce7fde37e111f3344f8fc30675474dc8b3b?width=80"
            alt="Lokachakra Logo"
            className="w-10 h-10 flex-shrink-0"
          />
          <h1 className="text-[16px] sm:text-[18px] font-bold text-[#222] whitespace-nowrap leading-none truncate" title="Lokachakra Legal">Lokachakra Legal</h1>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00] text-white"
                      : "text-[#666] hover:bg-gray-50"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
