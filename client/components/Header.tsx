import { Search, HelpCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 h-auto sm:h-14 pt-6">
      {/* Company Logo and Name */}
      <div className="flex items-center gap-4">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5c6b0f2ca98a846827a105f0bee2693d1ecdad6d?width=80"
          alt="Lokachakra Logo"
          className="w-10 h-10"
        />
        <h1 className="text-2xl font-bold text-gray-800 leading-8">
          Lokachakra
        </h1>
      </div>

      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 w-full sm:w-auto">
        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search legal tools.."
            className="w-full pl-12 pr-4 py-2 border border-gray-200 rounded-lg text-base text-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Help Icon */}
        <button className="p-1">
          <HelpCircle className="w-6 h-6 text-gray-400" />
        </button>

        {/* User Score */}
        <div className="flex items-center gap-2 ml-auto sm:ml-0">
          <span className="text-lg font-bold text-orange-500">150</span>
          <i className="fas fa-fire text-orange-400 text-base"></i>
        </div>
      </div>
    </header>
  );
}
