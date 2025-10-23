import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import ContractViewModal from "../components/ContractViewModal";
import { Button } from "../components/ui/button";
import { Plus, Users, Download, Search, ChevronDown } from "lucide-react";

interface Contract {
  id: number;
  no: string;
  name: string;
  type: string;
  client: string;
  status: string;
  date: string;
}

const mockContracts: Contract[] = [
  { id: 1, no: "01", name: "Contract A", type: "M&A", client: "Client X", status: "Draft", date: "01/01/2025" },
  { id: 2, no: "01", name: "Contract A", type: "M&A", client: "Client X", status: "Draft", date: "01/01/2025" },
  { id: 3, no: "01", name: "Contract A", type: "M&A", client: "Client X", status: "Draft", date: "01/01/2025" },
  { id: 4, no: "01", name: "Contract A", type: "M&A", client: "Client X", status: "Draft", date: "01/01/2025" },
  { id: 5, no: "01", name: "Contract A", type: "M&A", client: "Client X", status: "Draft", date: "01/01/2025" },
  { id: 6, no: "01", name: "Contract A", type: "M&A", client: "Client X", status: "Draft", date: "01/01/2025" },
  { id: 7, no: "01", name: "Contract A", type: "M&A", client: "Client X", status: "Draft", date: "01/01/2025" },
  { id: 8, no: "01", name: "Contract A", type: "M&A", client: "Client X", status: "Draft", date: "01/01/2025" },
  { id: 9, no: "01", name: "Contract A", type: "M&A", client: "Client X", status: "Draft", date: "01/01/2025" },
  { id: 10, no: "01", name: "Contract A", type: "M&A", client: "Client X", status: "Draft", date: "01/01/2025" },
  { id: 11, no: "01", name: "Contract A", type: "M&A", client: "Client X", status: "Draft", date: "01/01/2025" },
];

export default function Contracts() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [clientFilter, setClientFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F1F1F1] flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 ml-[240px]">
        <div className="p-6 space-y-6">
          {/* Header */}
          <DashboardHeader />
          
          {/* Contracts Section */}
          <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6">
            <h2 className="text-lg font-bold text-[#222] mb-6">Contracts</h2>
            
            {/* Search and Filter Row */}
            <div className="flex items-center gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[38px] px-4 pr-10 border border-[#D9D9D9] rounded-lg text-xs text-[#666] bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#666]" />
              </div>
              
              {/* Action Buttons */}
              <Button
                className="bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00] text-white rounded-full px-4 h-[42px] font-bold hover:opacity-90"
                
              >
                <Plus className="w-5 h-5" />
                New Contract
              </Button>
              
              <Button variant="outline" className="rounded-full px-4 h-[42px] border-[#E3E3E3] font-medium bg-white hover:bg-gray-50">
                <Users className="w-4 h-4" />
                Invite Collaborator
              </Button>
              
              <Button variant="outline" className="rounded-full px-4 h-[42px] border-[#E3E3E3] font-medium bg-white hover:bg-gray-50">
                <Download className="w-4 h-4" />
                Export History
              </Button>
            </div>
          </div>
          
          {/* Contract List Table */}
          <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-black">Contract List</h3>
              
              {/* Filters */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    className="h-[42px] pl-4 pr-10 border border-[#E3E3E3] rounded-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option value="">Type</option>
                    <option value="M&A">M&A</option>
                    <option value="NDA">NDA</option>
                    <option value="Service">Service</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    className="h-[42px] pl-4 pr-10 border border-[#E3E3E3] rounded-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
                    value={clientFilter}
                    onChange={(e) => setClientFilter(e.target.value)}
                  >
                    <option value="">Client</option>
                    <option value="Client X">Client X</option>
                    <option value="Client Y">Client Y</option>
                    <option value="Client Z">Client Z</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    className="h-[42px] pl-4 pr-10 border border-[#E3E3E3] rounded-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                  >
                    <option value="">Date</option>
                    <option value="recent">Most Recent</option>
                    <option value="oldest">Oldest</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black pointer-events-none" />
                </div>
              </div>
            </div>
            
            {/* Table */}
            <div className="border border-[#E3E3E3] rounded-[10px] overflow-hidden">
              {/* Table Header */}
              <div className="bg-[#DFDFDF] grid grid-cols-[80px_1fr_180px_180px_150px_150px] gap-4 px-5 py-6">
                <div className="text-sm font-semibold text-black">No.</div>
                <div className="text-sm font-semibold text-black">Contract</div>
                <div className="text-sm font-semibold text-black">Type</div>
                <div className="text-sm font-semibold text-black">Client</div>
                <div className="text-sm font-semibold text-black">Status</div>
                <div className="text-sm font-semibold text-black text-right">Date</div>
              </div>
              
              {/* Table Body */}
              <div className="bg-white">
                {mockContracts.map((contract, index) => (
                  <div
                    key={contract.id}
                    onClick={() => setIsModalOpen(true)}
                    className={`grid grid-cols-[80px_1fr_180px_180px_150px_150px] gap-4 px-5 py-4 border-b border-[#DFDFDF] last:border-0 cursor-pointer transition-colors ${
                      index === -1 ? 'bg-gradient-to-r from-[rgba(160,48,242,0.06)] to-[rgba(253,121,6,0.06)]' : 'hover:bg-gray-50'}`}
                  >
                    <div className="text-sm font-semibold text-black">{contract.no}</div>
                    <div className="text-sm text-[#333]">{contract.name}</div>
                    <div className="text-sm text-[#333]">{contract.type}</div>
                    <div className="text-sm text-[#333]">{contract.client}</div>
                    <div className="text-sm text-[#333]">{contract.status}</div>
                    <div className="text-sm text-[#333] text-right">{contract.date}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="h-6 px-3 text-xs rounded bg-[#5C5B5B] text-white border-[#5C5B5B] hover:bg-[#4a4a4a]"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                >
                  Prev
                </Button>
                
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    className={`h-6 w-6 p-0 text-xs rounded ${
                      currentPage === page
                        ? "bg-[#5C5B5B] text-white border-[#5C5B5B] hover:bg-[#4a4a4a]"
                        : "bg-white text-[#2D2B3E] border-[#5C5B5B] hover:bg-gray-50"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  className="h-6 px-3 text-xs rounded bg-[#5C5B5B] text-white border-[#5C5B5B] hover:bg-[#4a4a4a]"
                  onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
                >
                  Next
                </Button>
              </div>
              
              <div className="text-sm font-bold text-[#5C5B5B]">Number of Page 04</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contract View Modal */}
      <ContractViewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
