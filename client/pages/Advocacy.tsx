import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import AdvocacyProposalForm from "@/components/AdvocacyProposalForm";
import { Plus, Download, Calendar, MapPin, Briefcase, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AdvocacySubmission {
  id: string;
  number: number;
  title: string;
  regulator: string;
  industry: string;
  status: "Pending" | "Submitted" | "Approved";
  tokensEarned: number;
  date: string;
}

interface Advocate {
  name: string;
  score: number;
}

const advocacyData: AdvocacySubmission[] = [
  {
    id: "#12345",
    number: 1,
    title: "Advocacy for Fair Labor Practices",
    regulator: "National Labor Relations Board",
    industry: "Human Resources",
    status: "Pending",
    tokensEarned: 150,
    date: "17-Oct-2025",
  },
  {
    id: "#67890",
    number: 2,
    title: "Advocacy for Environmental Protection",
    regulator: "Environmental Protection Agency",
    industry: "Environmental",
    status: "Submitted",
    tokensEarned: 200,
    date: "17-Oct-2025",
  },
  {
    id: "#11223",
    number: 3,
    title: "Advocacy for Consumer Rights",
    regulator: "Consumer Financial Protection Bureau",
    industry: "Finance",
    status: "Approved",
    tokensEarned: 250,
    date: "17-Oct-2025",
  },
  {
    id: "#44556",
    number: 4,
    title: "Advocacy for Healthcare Access",
    regulator: "Dept. of Health and Human Services",
    industry: "Healthcare",
    status: "Pending",
    tokensEarned: 180,
    date: "17-Oct-2025",
  },
  {
    id: "#77889",
    number: 5,
    title: "Advocacy for Education Reform",
    regulator: "Department of Education",
    industry: "Education",
    status: "Submitted",
    tokensEarned: 220,
    date: "17-Oct-2025",
  },
];

const advocates: Advocate[] = [
  { name: "Ravi Kumar", score: 1250 },
  { name: "Arjun Desai", score: 980 },
  { name: "Priya Singh", score: 1100 },
];

function statusClasses(status: "Pending" | "Submitted" | "Approved") {
  switch (status) {
    case "Pending":
      return "bg-[#FFC107]/20 text-[#B8860B]";
    case "Submitted":
      return "bg-[#528FFF]/20 text-[#1E40AF]";
    case "Approved":
      return "bg-[#34C759]/20 text-[#1B8E3D]";
    default:
      return "bg-gray-200 text-gray-700";
  }
}

export default function Advocacy() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showProposalForm, setShowProposalForm] = useState(false);

  return (
    <div className="h-screen bg-[#F1F1F1] flex overflow-hidden">
      <Sidebar />

      <main className="flex-1 w-full min-w-0 ml-[240px] p-4 sm:p-6 h-full min-h-0 flex flex-col overflow-hidden">
        <DashboardHeader />

        <div className="flex-1 min-h-0 overflow-y-auto">
          {showProposalForm ? (
            <AdvocacyProposalForm onClose={() => setShowProposalForm(false)} />
          ) : (
            <>
              {/* Overview Header */}
              <div className="bg-[#191919] rounded-t-[14px] px-6 py-3 mb-0 max-w-[250px]">
                <h2 className="text-base font-bold text-white">Overview (Advocacy List)</h2>
              </div>

              {/* Advocacy Toolbar */}
              <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Button
                      className="h-[42px] px-4 rounded-2xl bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00] text-white font-bold hover:opacity-90"
                      onClick={() => setShowProposalForm(true)}
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      New Advocacy
                    </Button>

                    <Button
                      className="h-[42px] px-6 rounded-2xl bg-[#3B82F6] text-white font-bold hover:opacity-90"
                    >
                      Submit
                    </Button>

                    <Button variant="outline" className="h-[42px] px-4 rounded-2xl border-[#E3E3E3] bg-white">
                      <Download className="w-5 h-5 mr-2" />
                      Export
                    </Button>
                  </div>

                  <div className="flex items-center gap-3">
                    <Select>
                      <SelectTrigger className="h-8 px-3 rounded-full border border-[#E3E3E3] bg-[#F7F6F8] text-sm">
                        <SelectValue placeholder="Regulator" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Regulators</SelectItem>
                        <SelectItem value="labor">Labor Relations</SelectItem>
                        <SelectItem value="epa">EPA</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="h-8 px-3 rounded-full border border-[#E3E3E3] bg-[#F7F6F8] text-sm">
                        <SelectValue placeholder="Industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Industries</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="env">Environmental</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="h-8 px-3 rounded-full border border-[#E3E3E3] bg-[#F7F6F8] text-sm">
                        <SelectValue placeholder="Date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Dates</SelectItem>
                        <SelectItem value="recent">Most Recent</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="relative w-full max-w-[224px]">
                      <input
                        type="text"
                        placeholder="Search advocacy drafts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-[41px] pl-10 pr-4 border-0 rounded-2xl text-base text-[#6B7280] bg-[#F7F6F8] focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3333 19.5L11.0833 14.25C10.6667 14.5833 10.1875 14.8472 9.64583 15.0417C9.10417 15.2361 8.52778 15.3333 7.91667 15.3333C6.40278 15.3333 5.12153 14.809 4.07292 13.7604C3.02431 12.7118 2.5 11.4306 2.5 9.91667C2.5 8.40278 3.02431 7.12153 4.07292 6.07292C5.12153 5.02431 6.40278 4.5 7.91667 4.5C9.43056 4.5 10.7118 5.02431 11.7604 6.07292C12.809 7.12153 13.3333 8.40278 13.3333 9.91667C13.3333 10.5278 13.2361 11.1042 13.0417 11.6458C12.8472 12.1875 12.5833 12.6667 12.25 13.0833L17.5 18.3333L16.3333 19.5ZM7.91667 13.6667C8.95833 13.6667 9.84375 13.3021 10.5729 12.5729C11.3021 11.8437 11.6667 10.9583 11.6667 9.91667C11.6667 8.875 11.3021 7.98958 10.5729 7.26042C9.84375 6.53125 8.95833 6.16667 7.91667 6.16667C6.875 6.16667 5.98958 6.53125 5.26042 7.26042C4.53125 7.98958 4.16667 8.875 4.16667 9.91667C4.16667 10.9583 4.53125 11.8437 5.26042 12.5729C5.98958 13.3021 6.875 13.6667 7.91667 13.6667Z" fill="#6B7280" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Top Advocates Section */}
                <div className="bg-[#F7F6F8] rounded-2xl shadow-inner p-4">
                  <h3 className="text-base font-bold text-[#1C1C1E] mb-3">Top Advocates</h3>
                  <div className="flex items-start gap-0">
                    <div className="flex items-center justify-between w-80">
                      <div className="bg-[#D9D9D9] rounded text-xs px-3 py-1 text-[#1C1C1E] mr-2.5">
                        {advocates[0].name}
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-80">
                      <div className="bg-[#D9D9D9] rounded text-xs px-3 py-1 text-[#1C1C1E] mr-auto">
                        {advocates[2].name}&nbsp;
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-80" />
                    <div className="flex items-center justify-between w-80" />
                  </div>
                </div>
              </div>

              {/* Advocacy Submissions Section */}
              <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9]">
                <div className="p-5">
                  <h2 className="text-lg font-bold text-[#222] mb-4">Advocacy Submissions</h2>
                  <div className="border border-[#E3E3E3] rounded-[10px]">
                    <div className="w-full max-w-full overflow-x-auto overflow-y-hidden">
                      <table className="min-w-[1200px] w-full">
                        <thead>
                          <tr className="bg-[#DFDFDF]">
                            <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "60px" }}>
                              ID
                            </th>
                            <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left" style={{ minWidth: "200px" }}>
                              TITLE
                            </th>
                            <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left" style={{ minWidth: "300px" }}>
                              REGULATOR
                            </th>
                            <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "150px" }}>
                              INDUSTRY
                            </th>
                            <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-center whitespace-nowrap" style={{ width: "120px" }}>
                              STATUS
                            </th>
                            <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-center whitespace-nowrap" style={{ width: "150px" }}>
                              TOKENS EARNED
                            </th>
                            <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "140px" }}>
                              DATE
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {advocacyData.map((submission) => (
                            <tr key={submission.id} className="border-b border-[#DFDFDF] last:border-b-0">
                              <td className="px-6 py-4 text-sm font-bold text-[#000] whitespace-nowrap">
                                {submission.id}
                              </td>
                              <td className="px-6 py-4 text-sm text-[#333]">
                                {submission.title}
                              </td>
                              <td className="px-6 py-4 text-sm text-[#333]">
                                <span className="block truncate" title={submission.regulator}>
                                  {submission.regulator}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{submission.industry}</td>
                              <td className="px-6 py-4 text-sm text-center whitespace-nowrap">
                                <span className={`inline-flex items-center justify-center px-3 py-1 text-[11px] font-semibold rounded-full uppercase ${statusClasses(submission.status)}`}>
                                  {submission.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-sm text-center font-semibold text-[#333] whitespace-nowrap">
                                {submission.tokensEarned}
                              </td>
                              <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{submission.date}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Pagination */}
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-[#6B7280]">Showing 1 to 5 of 20 results</div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        className="h-[34px] px-4 rounded-2xl border border-[#E5E5E7] bg-white text-[#1C1C1E] text-base hover:bg-gray-50"
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      >
                        Prev
                      </Button>

                      {[1, 2, 3].map((page) => (
                        <Button
                          key={page}
                          variant="outline"
                          className={`h-8 w-8 p-0 rounded-2xl text-base ${currentPage === page
                            ? "bg-[#7F13EC] text-white border-0"
                            : "bg-transparent text-[#1C1C1E] border-0"
                            }`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </Button>
                      ))}

                      <Button
                        variant="outline"
                        className="h-[34px] px-4 rounded-2xl border border-[#E5E5E7] bg-white text-[#1C1C1E] text-base hover:bg-gray-50"
                        onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
