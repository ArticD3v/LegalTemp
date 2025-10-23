import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Bell, Search, ChevronLeft, Maximize2 } from "lucide-react";

export default function ContractEdit() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const contractId = searchParams.get("id");
  const isNew = searchParams.get("new") === "true";
  
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      {/* Top Header */}
      <div className="bg-white h-[70px] flex items-center justify-between px-6 border-b border-[#E3E3E3]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/5c6b0f2ca98a846827a105f0bee2693d1ecdad6d?width=80" 
            alt="Logo" 
            className="w-10 h-10"
          />
          <span className="text-[#222] text-xl font-bold italic font-roboto">
            Lokachakra Legal
          </span>
        </div>

        {/* Search, Notification, Avatar */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-[284px] h-[37px] px-4 pr-10 border border-[#D9D9D9] rounded-lg text-xs text-[#666] bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666]" />
          </div>

          {/* Notification Bell */}
          <div className="relative">
            <Bell className="w-7 h-7 text-[#2D2D2D]" />
            <div className="absolute -top-1 -right-1 bg-[#5C5B5B] rounded-full w-[15px] h-[15px] flex items-center justify-center">
              <span className="text-white text-[5px] font-bold font-cinzel">99+</span>
            </div>
          </div>

          {/* User Avatar */}
          <div className="w-[30px] h-[30px] rounded-full bg-black overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/f6eab5d413ddd2b24fbb6c7295c5737c2661adc2?width=52" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white h-[70px] flex items-center px-12 gap-12 border-b border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9]">
        <button className="text-2xl text-black font-roboto hover:text-purple-600 transition-colors">
          Edit
        </button>
        <button className="text-2xl text-black font-roboto hover:text-purple-600 transition-colors">
          Sign with DID
        </button>
        <button className="text-2xl text-black font-roboto hover:text-purple-600 transition-colors">
          Export as PDF
        </button>
        <button className="text-2xl text-black font-roboto hover:text-purple-600 transition-colors">
          Share Link
        </button>
      </div>

      {/* Breadcrumb and Last Synced */}
      <div className="bg-white h-[70px] flex items-center justify-between px-6 border-b border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9]">
        {/* Go Back & Contracts */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate("/contracts")}
            className="flex items-center gap-2 text-black hover:text-purple-600 transition-colors"
          >
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/ad8243fa2daf22821282fe64a9afda442d6ed101?width=120" 
              alt="Go Back" 
              className="w-[60px] h-[50px]"
            />
          </button>
          <span className="text-lg font-semibold text-black font-inter">Contracts</span>
        </div>

        {/* Last Synced */}
        <span className="text-xl text-black/50 font-roboto">
          Last synced, 2025-06-01 10:00 AM
        </span>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 p-6">
        {/* Left Side - Document Viewer */}
        <div className="flex-1 max-w-[872px]">
          <div className="bg-white rounded-[10px] p-6">
            {/* Page Navigation */}
            <div className="bg-[#D7D7D7] rounded-[10px] h-[43px] flex items-center mb-6">
              <div className="flex-1 bg-[rgba(195,195,195,0.43)] rounded-l-[10px] h-full flex items-center px-4">
                <span className="text-xs text-black font-roboto">Page {currentPage} of {totalPages}</span>
              </div>
              <div className="bg-[rgba(195,195,195,0.43)] rounded-r-[10px] h-full flex items-center gap-3 px-4">
                <span className="text-sm text-black font-roboto">Button</span>
                <Maximize2 className="w-[13px] h-[13px] text-black" />
              </div>
            </div>

            {/* Document Image */}
            <div className="border border-black/35 rounded-[10px] overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/9f7bb041b6b08d2aefc893a5140bfe57456220fb?width=1484" 
                alt="Contract Document" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Metadata & AI Insights */}
        <div className="w-[516px] space-y-6">
          {/* Metadata Panel */}
          <div className="bg-white rounded-[10px] p-6">
            <h3 className="text-2xl font-bold text-black font-roboto mb-6">Metadata Panel</h3>
            
            <div className="space-y-4">
              <div className="pb-4 border-b border-[#DFDFDF]">
                <p className="text-lg text-black/60 font-roboto">Title: Merger Agreement_v1</p>
              </div>
              
              <div className="pb-4 border-b border-[#DFDFDF] flex items-center justify-between">
                <p className="text-lg text-black/60 font-roboto">Parties: Acma Corp vs Belta LLC</p>
              </div>
              
              <div className="pb-4 border-b border-[#DFDFDF] flex items-center justify-between">
                <p className="text-lg text-black/60 font-roboto">Jurisdiction</p>
                <p className="text-base text-black/60 font-roboto">Deleware</p>
              </div>
              
              <div className="pb-4 border-b border-[#DFDFDF] flex items-center justify-between">
                <p className="text-lg text-black/60 font-roboto">Last Updated</p>
                <p className="text-base text-black/60 font-roboto">01-oct-2025,11:00 AM</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-lg text-black/60 font-roboto"></p>
                <p className="text-base text-black/60 font-roboto">$58.000</p>
              </div>
            </div>
          </div>

          {/* AI Insights Panel */}
          <div className="bg-white rounded-[10px] p-6">
            <h3 className="text-2xl font-bold text-black font-roboto mb-6">AI Insights</h3>
            
            <div className="space-y-4">
              <p className="text-lg text-black/60 font-roboto">
                Potential Gap: Clause 2 lacks Liability
              </p>
              <p className="text-lg text-black/60 font-roboto">
                Duplicate Clause Found: Sections 4/9
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="fixed bottom-0 left-0 right-0 h-[78px] bg-white border-t border-[#CFCFCF] shadow-[0_4px_20px_0_#F5F6F9]"></div>

      {/* Scrollbar */}
      <div className="fixed right-6 top-[226px] w-5 h-[764px] bg-[#F1F1F1] rounded">
        <div className="relative h-full">
          <ChevronLeft className="absolute top-1.5 left-1.5 w-[7px] h-[7px] text-[#A3A3A3] rotate-90" />
          <div className="absolute top-[14px] left-[3px] w-[13px] h-[25px] bg-[#B4B4B4] rounded"></div>
          <ChevronLeft className="absolute bottom-1.5 left-1.5 w-[7px] h-[7px] text-[#505050] -rotate-90" />
        </div>
      </div>

      {/* Close Button */}
      {/* <button 
        onClick={() => navigate("/contracts")}
        className="fixed top-[30px] right-[48px] w-[18px] h-[18px] z-50 hover:opacity-70 transition-opacity"
      >
        <svg className="w-full h-full" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.642141 1.6346C0.28738 1.27981 0.28738 0.704586 0.642142 0.349798C0.996903 -0.00499037 1.57208 -0.00499062 1.92685 0.349798L9.63507 8.05861C9.98983 8.4134 9.98983 8.98862 9.63507 9.34341C9.28031 9.6982 8.70513 9.6982 8.35037 9.34341L0.642141 1.6346Z" fill="#2D2D2D"/>
          <path d="M0.642141 8.3654C0.28738 8.72019 0.28738 9.29541 0.642142 9.6502C0.996903 10.005 1.57208 10.005 1.92685 9.6502L9.63507 1.94139C9.98983 1.5866 9.98983 1.01138 9.63507 0.656594C9.28031 0.301806 8.70513 0.301806 8.35037 0.656594L0.642141 8.3654Z" fill="#2D2D2D"/>
        </svg>
      </button> */}
    </div>
  );
}
