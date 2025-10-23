import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Plus, Download, Calendar, MapPin, Briefcase, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AdvocacyInitiative {
  id: string;
  number: number;
  title: string;
  category: string;
  jurisdiction: string;
  stage: string;
  status: "Active" | "Pending" | "Completed";
  owner: string;
  startDate: string;
  impact: string;
  lastUpdate: string;
}

const advocacyData: AdvocacyInitiative[] = [
  {
    id: "#ADV-0001",
    number: 1,
    title: "Labor Rights Reform Initiative",
    category: "Employment Law",
    jurisdiction: "National",
    stage: "Consultation Phase",
    status: "Active",
    owner: "RAJESH K.",
    startDate: "01/15/2025",
    impact: "High",
    lastUpdate: "02/01/2025",
  },
  {
    id: "#ADV-0002",
    number: 2,
    title: "Environmental Protection Advocacy",
    category: "Environmental Law",
    jurisdiction: "State Level",
    stage: "Drafting Phase",
    status: "Active",
    owner: "PRIYA S.",
    startDate: "01/20/2025",
    impact: "High",
    lastUpdate: "02/01/2025",
  },
  {
    id: "#ADV-0003",
    number: 3,
    title: "Consumer Protection Bill",
    category: "Consumer Rights",
    jurisdiction: "National",
    stage: "Stakeholder Engagement",
    status: "Active",
    owner: "ARUN M.",
    startDate: "01/10/2025",
    impact: "Medium",
    lastUpdate: "01/28/2025",
  },
  {
    id: "#ADV-0004",
    number: 4,
    title: "Data Privacy Framework Development",
    category: "Data Protection",
    jurisdiction: "International",
    stage: "Research Phase",
    status: "Pending",
    owner: "NEHA P.",
    startDate: "02/01/2025",
    impact: "Critical",
    lastUpdate: "02/01/2025",
  },
  {
    id: "#ADV-0005",
    number: 5,
    title: "GST Amendment Proposal",
    category: "Tax Law",
    jurisdiction: "National",
    stage: "Advocacy Phase",
    status: "Active",
    owner: "VIKRAM S.",
    startDate: "01/25/2025",
    impact: "Medium",
    lastUpdate: "01/30/2025",
  },
  {
    id: "#ADV-0006",
    number: 6,
    title: "Intellectual Property Protection Act",
    category: "IP Law",
    jurisdiction: "National",
    stage: "Completed",
    status: "Completed",
    owner: "PRIYA S.",
    startDate: "12/15/2024",
    impact: "High",
    lastUpdate: "01/15/2025",
  },
  {
    id: "#ADV-0007",
    number: 7,
    title: "Corporate Governance Guidelines",
    category: "Corporate Law",
    jurisdiction: "State Level",
    stage: "Review Phase",
    status: "Active",
    owner: "RAJESH K.",
    startDate: "01/18/2025",
    impact: "Medium",
    lastUpdate: "02/01/2025",
  },
  {
    id: "#ADV-0008",
    number: 8,
    title: "Regulatory Compliance Framework",
    category: "Regulatory",
    jurisdiction: "National",
    stage: "Implementation",
    status: "Active",
    owner: "ARUN M.",
    startDate: "01/22/2025",
    impact: "High",
    lastUpdate: "02/01/2025",
  },
];

function statusClasses(status: "Active" | "Pending" | "Completed") {
  switch (status) {
    case "Active":
      return "bg-[#34C759]/20 text-[#1B8E3D]";
    case "Pending":
      return "bg-[#FFC107]/20 text-[#B8860B]";
    case "Completed":
      return "bg-[#528FFF]/20 text-[#1E40AF]";
    default:
      return "bg-gray-200 text-gray-700";
  }
}

function impactClasses(impact: string) {
  switch (impact) {
    case "Critical":
      return "text-[#FF3B30]";
    case "High":
      return "text-[#FF9500]";
    case "Medium":
      return "text-[#FFC107]";
    case "Low":
      return "text-[#34C759]";
    default:
      return "text-gray-700";
  }
}

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "timeline", label: "Timeline" },
  { id: "stakeholders", label: "Stakeholders" },
  { id: "impact", label: "Impact Analysis" },
];

export default function Advocacy() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="h-screen bg-[#F1F1F1] flex overflow-hidden">
      <Sidebar />

      <main className="flex-1 w-full min-w-0 ml-[240px] p-4 sm:p-6 h-full min-h-0 flex flex-col overflow-hidden">
        <DashboardHeader />

        {/* Tab Navigation */}
        <div className="inline-flex flex-wrap rounded-t-[14px] overflow-hidden border border-[#C7C7C7] mr-auto ml-0">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 text-base font-inter transition-colors ${activeTab === tab.id
                  ? "bg-[#5C5B5B] text-white font-bold"
                  : "bg-[#DFDFDF] text-[#222] font-normal hover:bg-[#CFCFCF]"
                } ${index !== tabs.length - 1 ? "border-r border-[#C7C7C7]" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div className="flex-1 min-h-0 overflow-y-auto">
            {/* Advocacy Toolbar */}
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-[#222]">Advocacy Initiatives</h2>

                <div className="flex items-center gap-3">
                  <Button
                    className="h-[42px] px-4 rounded-full bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00] text-white font-bold hover:opacity-90"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    New Initiative
                  </Button>

                  <Button variant="outline" className="h-[42px] px-4 rounded-full border-[#E3E3E3] bg-white">
                    <Download className="w-5 h-5 mr-2" />
                    Export Report
                  </Button>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="flex items-center justify-between">
                <div className="relative w-full max-w-[519px]">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-[38px] px-4 border border-[#D9D9D9] rounded-lg text-xs text-[#666] bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Select>
                    <SelectTrigger className="w-[120px] h-[42px] rounded-full border border-[#E3E3E3] bg-white">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="employment">Employment Law</SelectItem>
                      <SelectItem value="environmental">Environmental Law</SelectItem>
                      <SelectItem value="consumer">Consumer Rights</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-[120px] h-[42px] rounded-full border border-[#E3E3E3] bg-white">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-[120px] h-[42px] rounded-full border border-[#E3E3E3] bg-white">
                      <SelectValue placeholder="Jurisdiction" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Jurisdictions</SelectItem>
                      <SelectItem value="national">National</SelectItem>
                      <SelectItem value="state">State Level</SelectItem>
                      <SelectItem value="international">International</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Advocacy Table */}
            <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9]">
              <div className="p-5">
                <div className="border border-[#E3E3E3] rounded-[10px]">
                  <div className="w-full max-w-full overflow-x-auto overflow-y-hidden">
                    <table className="min-w-[2000px] w-full">
                      <thead>
                        <tr className="bg-[#DFDFDF]">
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "60px" }}>
                            No.
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "140px" }}>
                            Initiative ID
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left" style={{ minWidth: "320px" }}>
                            Title
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "180px" }}>
                            Category
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "160px" }}>
                            Jurisdiction
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ minWidth: "200px" }}>
                            Stage
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-center whitespace-nowrap" style={{ width: "120px" }}>
                            Status
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-center whitespace-nowrap" style={{ width: "100px" }}>
                            Impact
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "140px" }}>
                            Owner
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "140px" }}>
                            Start Date
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "140px" }}>
                            Last Update
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {advocacyData.map((initiative) => (
                          <tr key={initiative.id} className="border-b border-[#DFDFDF] last:border-b-0">
                            <td className="px-6 py-4 text-sm font-bold text-[#000] whitespace-nowrap">
                              {String(initiative.number).padStart(2, "0")}
                            </td>
                            <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{initiative.id}</td>
                            <td className="px-6 py-4 text-sm text-[#333]">
                              <span className="block truncate" title={initiative.title}>
                                {initiative.title}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{initiative.category}</td>
                            <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{initiative.jurisdiction}</td>
                            <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">
                              <span className="block truncate" title={initiative.stage}>
                                {initiative.stage}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-center whitespace-nowrap">
                              <span className={`inline-flex items-center justify-center px-3 py-1 text-[11px] font-semibold rounded-full uppercase ${statusClasses(initiative.status)}`}>
                                {initiative.status}
                              </span>
                            </td>
                            <td className={`px-6 py-4 text-sm text-center font-semibold whitespace-nowrap ${impactClasses(initiative.impact)}`}>
                              {initiative.impact}
                            </td>
                            <td className="px-6 py-4 text-sm font-semibold text-[#333] uppercase whitespace-nowrap">
                              {initiative.owner}
                            </td>
                            <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{initiative.startDate}</td>
                            <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{initiative.lastUpdate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Pagination */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      className="h-6 px-3.5 rounded border-2 border-[#5C5B5B] bg-[#5C5B5B] text-white text-xs hover:bg-[#4C4B4B]"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    >
                      Prev
                    </Button>

                    {[1, 2, 3, 4, 5].map((page) => (
                      <Button
                        key={page}
                        variant="outline"
                        className={`h-6 w-6 p-0 rounded border-2 border-[#5C5B5B] text-xs ${currentPage === page
                            ? "bg-[#5C5B5B] text-white"
                            : "bg-white text-[#2D2B3E]"
                          }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      className="h-6 px-3.5 rounded border-2 border-[#5C5B5B] bg-[#5C5B5B] text-white text-xs hover:bg-[#4C4B4B]"
                      onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
                    >
                      Next
                    </Button>
                  </div>

                  <div className="text-xs font-bold text-[#5C5B5B]">Number of Pages 1/01</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "timeline" && (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px">
              <h2 className="text-lg font-bold text-[#222] mb-6">Initiative Timeline</h2>
              <div className="space-y-4">
                {advocacyData.map((initiative) => (
                  <div key={initiative.id} className="border border-[#E3E3E3] rounded-[10px] p-4">
                    <div className="flex items-start gap-4">
                      <Calendar className="w-5 h-5 text-[#9B2CFD] mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-[#222]">{initiative.title}</h3>
                        <p className="text-xs text-[#666] mt-1">Started: {initiative.startDate}</p>
                        <p className="text-xs text-[#666]">Stage: {initiative.stage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "stakeholders" && (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px">
              <h2 className="text-lg font-bold text-[#222] mb-6">Stakeholders</h2>
              <div className="space-y-4">
                {advocacyData.map((initiative) => (
                  <div key={initiative.id} className="border border-[#E3E3E3] rounded-[10px] p-4">
                    <div className="flex items-start gap-4">
                      <Users className="w-5 h-5 text-[#FF7A00] mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-[#222]">{initiative.title}</h3>
                        <p className="text-xs text-[#666] mt-1">Owner: {initiative.owner}</p>
                        <p className="text-xs text-[#666]">Jurisdiction: {initiative.jurisdiction}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "impact" && (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px">
              <h2 className="text-lg font-bold text-[#222] mb-6">Impact Analysis</h2>
              <div className="space-y-4">
                {advocacyData.map((initiative) => (
                  <div key={initiative.id} className="border border-[#E3E3E3] rounded-[10px] p-4">
                    <div className="flex items-start gap-4">
                      <TrendingUp className="w-5 h-5 text-[#34C759] mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-[#222]">{initiative.title}</h3>
                        <p className={`text-xs font-semibold mt-1 ${impactClasses(initiative.impact)}`}>
                          Impact Level: {initiative.impact}
                        </p>
                        <p className="text-xs text-[#666]">Category: {initiative.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
