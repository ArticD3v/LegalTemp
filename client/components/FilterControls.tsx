import { ChevronDown } from "lucide-react";

interface FilterDropdownProps {
  label: string;
}

function FilterDropdown({ label }: FilterDropdownProps) {
  return (
    <div className="relative flex-1">
      <div className="w-full flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg bg-white">
        <span className="text-black text-base">{label}</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
}

export default function FilterControls() {
  return (
    <section className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-1">
        <FilterDropdown label="Industry: All" />
        <FilterDropdown label="Role: All" />
      </div>

      <button className="px-12 py-3 bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold text-base rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto">
        Apply
      </button>
    </section>
  );
}
