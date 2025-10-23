import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Plus, Download, Calendar, Users, Clock, Award } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TrainingCourse {
  id: string;
  number: number;
  title: string;
  category: string;
  instructor: string;
  duration: string;
  status: "Completed" | "In Progress" | "Not Started";
  progress: number;
  enrolledDate: string;
  dueDate: string;
}

const trainingCourses: TrainingCourse[] = [
  {
    id: "#TRN-0001",
    number: 1,
    title: "Data Privacy and Protection Compliance",
    category: "Data Protection",
    instructor: "Dr. Sarah Johnson",
    duration: "20 hours",
    status: "Completed",
    progress: 100,
    enrolledDate: "01/15/2025",
    dueDate: "02/15/2025",
  },
  {
    id: "#TRN-0002",
    number: 2,
    title: "Contract Management Essentials",
    category: "Corporate Law",
    instructor: "Robert Williams",
    duration: "15 hours",
    status: "In Progress",
    progress: 65,
    enrolledDate: "01/20/2025",
    dueDate: "02/20/2025",
  },
  {
    id: "#TRN-0003",
    number: 3,
    title: "Regulatory Compliance Framework",
    category: "Regulatory",
    instructor: "Priya Singh",
    duration: "25 hours",
    status: "In Progress",
    progress: 40,
    enrolledDate: "01/25/2025",
    dueDate: "03/01/2025",
  },
  {
    id: "#TRN-0004",
    number: 4,
    title: "Employment Law and Disputes",
    category: "Employment Law",
    instructor: "Michael Chen",
    duration: "18 hours",
    status: "Not Started",
    progress: 0,
    enrolledDate: "02/01/2025",
    dueDate: "03/15/2025",
  },
  {
    id: "#TRN-0005",
    number: 5,
    title: "Intellectual Property Protection",
    category: "IP Law",
    instructor: "Amanda Foster",
    duration: "22 hours",
    status: "In Progress",
    progress: 80,
    enrolledDate: "01/10/2025",
    dueDate: "02/28/2025",
  },
  {
    id: "#TRN-0006",
    number: 6,
    title: "Environmental Law Basics",
    category: "Environmental Law",
    instructor: "James Mitchell",
    duration: "16 hours",
    status: "Not Started",
    progress: 0,
    enrolledDate: "02/05/2025",
    dueDate: "03/20/2025",
  },
  {
    id: "#TRN-0007",
    number: 7,
    title: "Consumer Rights and Protections",
    category: "Consumer Rights",
    instructor: "Lisa Anderson",
    duration: "14 hours",
    status: "Completed",
    progress: 100,
    enrolledDate: "12/15/2024",
    dueDate: "01/30/2025",
  },
  {
    id: "#TRN-0008",
    number: 8,
    title: "Advanced Dispute Resolution",
    category: "Dispute Resolution",
    instructor: "David Thompson",
    duration: "28 hours",
    status: "In Progress",
    progress: 55,
    enrolledDate: "01/18/2025",
    dueDate: "03/10/2025",
  },
];

function statusClasses(status: "Completed" | "In Progress" | "Not Started") {
  switch (status) {
    case "Completed":
      return "bg-[#34C759]/20 text-[#1B8E3D]";
    case "In Progress":
      return "bg-[#528FFF]/20 text-[#1E40AF]";
    case "Not Started":
      return "bg-[#F5F5F5] text-[#999]";
    default:
      return "bg-gray-200 text-gray-700";
  }
}

function progressBarColor(progress: number) {
  if (progress === 100) return "from-[#34C759] to-[#34C759]";
  if (progress >= 75) return "from-[#34C759] to-[#9B2CFD]";
  if (progress >= 50) return "from-[#9B2CFD] to-[#FF7A00]";
  return "from-[#FF7A00] to-[#FF3B30]";
}

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "progress", label: "My Progress" },
  { id: "certificates", label: "Certificates" },
  { id: "analytics", label: "Analytics" },
];

export default function Training() {
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
            {/* Training Toolbar */}
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-[#222]">Training Courses</h2>

                <div className="flex items-center gap-3">
                  <Button
                    className="h-[42px] px-4 rounded-full bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00] text-white font-bold hover:opacity-90"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Enroll Course
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
                      <SelectItem value="data">Data Protection</SelectItem>
                      <SelectItem value="corporate">Corporate Law</SelectItem>
                      <SelectItem value="regulatory">Regulatory</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-[120px] h-[42px] rounded-full border border-[#E3E3E3] bg-white">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="inprogress">In Progress</SelectItem>
                      <SelectItem value="notstarted">Not Started</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-[120px] h-[42px] rounded-full border border-[#E3E3E3] bg-white">
                      <SelectValue placeholder="Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Durations</SelectItem>
                      <SelectItem value="short">Under 15 hours</SelectItem>
                      <SelectItem value="medium">15-25 hours</SelectItem>
                      <SelectItem value="long">Over 25 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Training Courses Table */}
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
                            Course ID
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left" style={{ minWidth: "300px" }}>
                            Title
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "160px" }}>
                            Category
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "160px" }}>
                            Instructor
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "120px" }}>
                            Duration
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-center whitespace-nowrap" style={{ width: "120px" }}>
                            Status
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-center whitespace-nowrap" style={{ width: "160px" }}>
                            Progress
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "120px" }}>
                            Enrolled
                          </th>
                          <th scope="col" className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap" style={{ width: "120px" }}>
                            Due Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {trainingCourses.map((course) => (
                          <tr key={course.id} className="border-b border-[#DFDFDF] last:border-b-0">
                            <td className="px-6 py-4 text-sm font-bold text-[#000] whitespace-nowrap">
                              {String(course.number).padStart(2, "0")}
                            </td>
                            <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{course.id}</td>
                            <td className="px-6 py-4 text-sm text-[#333]">
                              <span className="block truncate" title={course.title}>
                                {course.title}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{course.category}</td>
                            <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{course.instructor}</td>
                            <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{course.duration}</td>
                            <td className="px-6 py-4 text-sm text-center whitespace-nowrap">
                              <span className={`inline-flex items-center justify-center px-3 py-1 text-[11px] font-semibold rounded-full uppercase ${statusClasses(course.status)}`}>
                                {course.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-center whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <div className="w-20 h-2 rounded-full bg-gray-200 overflow-hidden">
                                  <div
                                    className={`h-full bg-gradient-to-r ${progressBarColor(course.progress)}`}
                                    style={{ width: `${course.progress}%` }}
                                  />
                                </div>
                                <span className="text-[11px] font-semibold text-[#333]">{course.progress}%</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{course.enrolledDate}</td>
                            <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{course.dueDate}</td>
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

        {activeTab === "progress" && (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px">
              <h2 className="text-lg font-bold text-[#222] mb-6">Your Learning Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 rounded-[10px] bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-900">In Progress</span>
                  </div>
                  <p className="text-3xl font-bold text-blue-600">4</p>
                </div>
                <div className="p-4 rounded-[10px] bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-900">Completed</span>
                  </div>
                  <p className="text-3xl font-bold text-green-600">2</p>
                </div>
                <div className="p-4 rounded-[10px] bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="text-sm font-semibold text-orange-900">Not Started</span>
                  </div>
                  <p className="text-3xl font-bold text-orange-600">2</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px">
              <h2 className="text-lg font-bold text-[#222] mb-6">Your Certificates</h2>
              <div className="space-y-4">
                {trainingCourses.filter(c => c.status === "Completed").map((course) => (
                  <div key={course.id} className="border border-[#E3E3E3] rounded-[10px] p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Award className="w-6 h-6 text-yellow-500" />
                      <div>
                        <h3 className="text-sm font-bold text-[#222]">{course.title}</h3>
                        <p className="text-xs text-[#666]">Completed on {course.dueDate}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="h-[36px] px-4 rounded-full border-[#E3E3E3] bg-white">
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px">
              <h2 className="text-lg font-bold text-[#222] mb-6">Learning Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-[10px] border border-[#E3E3E3]">
                  <h3 className="text-sm font-bold text-[#222] mb-4">Average Course Progress</h3>
                  <div className="text-4xl font-bold text-[#9B2CFD] mb-2">52%</div>
                  <p className="text-xs text-[#666]">Based on all enrolled courses</p>
                </div>
                <div className="p-4 rounded-[10px] border border-[#E3E3E3]">
                  <h3 className="text-sm font-bold text-[#222] mb-4">Total Learning Hours</h3>
                  <div className="text-4xl font-bold text-[#FF7A00] mb-2">147</div>
                  <p className="text-xs text-[#666]">Hours completed and in progress</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
