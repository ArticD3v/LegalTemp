import { Search, Bell } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between bg-white py-5 px-6 -mx-6 -mt-6 mb-6">
      {/* Welcome Message */}
      <div>
        <h1 className="text-lg font-bold text-[#222] leading-7 font-roboto">
          Welcome back, Anya Sharma
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-[284px] h-[38px] px-4 border border-[#D9D9D9] rounded-lg text-xs text-[#666] bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Notification Bell with Badge */}
        <button className="relative p-2">
          <Bell className="w-7 h-7 text-[#2D2D2D]" />
          <span className="absolute top-0 right-0 bg-[#5C5B5B] text-white text-[5px] font-bold rounded-full px-1.5 py-0.5 min-w-[15px] text-center leading-tight">
            99+
          </span>
        </button>

        {/* User Avatar */}
        <div className="w-[30px] h-[30px] rounded-full bg-black overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7919051497a75a25a508fa79d09a1c0ef255c226?width=51"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
