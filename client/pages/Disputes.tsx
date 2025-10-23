import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import NewDisputeDialog from "@/components/NewDisputeDialog";
import RaiseEscalationDialog from "@/components/RaiseEscalationDialog";
import { Plus, ArrowUp, Download, Send, Paperclip, Smile, Users, UserPlus, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type DisputePriority = "High" | "Low";

type DisputeStatus = "Escalated" | "Resolved" | "Pending";

interface Dispute {
  id: string;
  number: number;
  title: string;
  type: string;
  counterParty: string;
  priority: DisputePriority;
  forum: string;
  status: DisputeStatus;
  owner: string;
  lastUpdate: string; // MM/DD/YYYY
  dueNext: string; // MM/DD/YYYY
}

const disputesData: Dispute[] = [
  {
    id: "#ID-0001",
    number: 1,
    title: "Acme Corp vs. Vendor X Payment Delay",
    type: "Breach of Contract",
    counterParty: "Vendors/Suppliers",
    priority: "High",
    forum: "National Company Law Tribunal (NCLT)",
    status: "Escalated",
    owner: "PRIYA S.",
    lastUpdate: "02/01/2025",
    dueNext: "02/01/2025",
  },
  {
    id: "#ID-0002",
    number: 2,
    title: "Beta LLC vs. Investor Z Share Valuation Dispute",
    type: "Breach of Contract",
    counterParty: "Clients/Customers",
    priority: "Low",
    forum: "Consumer Disputes Redressal Commission",
    status: "Escalated",
    owner: "PRIYA S.",
    lastUpdate: "02/01/2025",
    dueNext: "02/01/2025",
  },
  {
    id: "#ID-0003",
    number: 3,
    title: "MSME Co. vs. Supplier Y Quality Issue",
    type: "Breach of Contract",
    counterParty: "Legal Professionals (Opposing Counsel)",
    priority: "High",
    forum: "Arbitration Tribunal",
    status: "Resolved",
    owner: "PRIYA S.",
    lastUpdate: "02/01/2025",
    dueNext: "02/01/2025",
  },
  {
    id: "#ID-0004",
    number: 4,
    title: "Legal Firm vs. Startup B Fee Disagreement",
    type: "Breach of Contract",
    counterParty: "Regulatory Bodies (Indirect Counterparties)",
    priority: "Low",
    forum: "High Court",
    status: "Escalated",
    owner: "PRIYA S.",
    lastUpdate: "02/01/2025",
    dueNext: "02/01/2025",
  },
  {
    id: "#ID-0005",
    number: 5,
    title: "Acme Corp vs. Vendor X Payment Delay",
    type: "Breach of Contract",
    counterParty: "Vendors/Suppliers",
    priority: "High",
    forum: "Lok Adalat (People's Court)",
    status: "Escalated",
    owner: "PRIYA S.",
    lastUpdate: "02/01/2025",
    dueNext: "02/01/2025",
  },
  {
    id: "#ID-0006",
    number: 6,
    title: "Beta LLC vs. Investor Z Share Valuation Dispute",
    type: "Breach of Contract",
    counterParty: "Clients/Customers",
    priority: "Low",
    forum: "Supreme Court of India",
    status: "Pending",
    owner: "PRIYA S.",
    lastUpdate: "02/01/2025",
    dueNext: "02/01/2025",
  },
  {
    id: "#ID-0007",
    number: 7,
    title: "MSME Co. vs. Supplier Y Quality Issue",
    type: "Breach of Contract",
    counterParty: "Legal Professionals (Opposing Counsel)",
    priority: "High",
    forum: "Debt Recovery Tribunal (DRT)",
    status: "Resolved",
    owner: "PRIYA S.",
    lastUpdate: "02/01/2025",
    dueNext: "02/01/2025",
  },
  {
    id: "#ID-0008",
    number: 8,
    title: "Legal Firm vs. Startup B Fee Disagreement",
    type: "Breach of Contract",
    counterParty: "Regulatory Bodies (Indirect Counterparties)",
    priority: "Low",
    forum: "Election Commission of India",
    status: "Pending",
    owner: "PRIYA S.",
    lastUpdate: "02/01/2025",
    dueNext: "02/01/2025",
  },
  {
    id: "#ID-0009",
    number: 9,
    title: "Acme Corp vs. Vendor X Payment Delay",
    type: "Breach of Contract",
    counterParty: "Vendors/Suppliers",
    priority: "High",
    forum: "Ombudsman Offices",
    status: "Escalated",
    owner: "PRIYA S.",
    lastUpdate: "02/01/2025",
    dueNext: "02/01/2025",
  },
  {
    id: "#ID-0010",
    number: 10,
    title: "Beta LLC vs. Investor Z Share Valuation Dispute",
    type: "Breach of Contract",
    counterParty: "Clients/Customers",
    priority: "Low",
    forum: "Village Panchayat",
    status: "Escalated",
    owner: "PRIYA S.",
    lastUpdate: "02/01/2025",
    dueNext: "02/01/2025",
  },
  {
    id: "#ID-0011",
    number: 11,
    title: "Acme Corp vs. Vendor X Payment Delay",
    type: "Breach of Contract",
    counterParty: "Vendors/Suppliers",
    priority: "High",
    forum: "National Green Tribunal (NGT)",
    status: "Escalated",
    owner: "PRIYA S.",
    lastUpdate: "02/01/2025",
    dueNext: "02/01/2025",
  },
];

interface BlockchainLog {
  number: number;
  timestamp: string;
  transactionId: string;
  contractId: string;
  dataHash: string;
}

interface IncentiveLog {
  number: number;
  timestamp: string;
  eventStatus: string;
  statusColor: string;
  case: string;
  txId: string;
}

const incentiveLogs: IncentiveLog[] = [
  { number: 1, timestamp: "15-01-2023  10:30AM", eventStatus: "Evidence Viewed", statusColor: "#528FFF", case: "Contract-001", txId: "0akudvavf23872" },
  { number: 2, timestamp: "15-02-2023  10:30AM", eventStatus: "Pending", statusColor: "#F59700", case: "Contract-001", txId: "0akudvavf23872" },
  { number: 3, timestamp: "15-03-2023  10:30AM", eventStatus: "Dispute Resolved", statusColor: "#4BB543", case: "Contract-001", txId: "0akudvavf23872" },
  { number: 4, timestamp: "15-04-2023  10:30AM", eventStatus: "Pending", statusColor: "#F59700", case: "Contract-001", txId: "0akudvavf23872" },
  { number: 5, timestamp: "15-05-2023  10:30AM", eventStatus: "Dispute Resolved", statusColor: "#4BB543", case: "Contract-001", txId: "0akudvavf23872" },
];

const blockchainLogs: BlockchainLog[] = [
  { number: 1, timestamp: "15-01-2023 10:30AM", transactionId: "VADE08248932", contractId: "Contract-001", dataHash: "Hash123" },
  { number: 2, timestamp: "15-01-2023 10:30AM", transactionId: "VADE08248933", contractId: "Contract-001", dataHash: "Hash123" },
  { number: 3, timestamp: "15-01-2023 10:30AM", transactionId: "VADE08248934", contractId: "Contract-001", dataHash: "Hash123" },
  { number: 4, timestamp: "15-01-2023 10:30AM", transactionId: "VADE08248935", contractId: "Contract-001", dataHash: "Hash123" },
  { number: 5, timestamp: "15-01-2023 10:30AM", transactionId: "VADE08248936", contractId: "Contract-001", dataHash: "Hash123" },
  { number: 6, timestamp: "15-01-2023 10:30AM", transactionId: "VADE08248937", contractId: "Contract-001", dataHash: "Hash123" },
  { number: 7, timestamp: "15-01-2023 10:30AM", transactionId: "VADE08248938", contractId: "Contract-001", dataHash: "Hash123" },
  { number: 8, timestamp: "15-01-2023 10:30AM", transactionId: "VADE08248939", contractId: "Contract-001", dataHash: "Hash123" },
  { number: 9, timestamp: "15-01-2023 10:30AM", transactionId: "VADE08248940", contractId: "Contract-001", dataHash: "Hash123" },
  { number: 10, timestamp: "15-01-2023 10:30AM", transactionId: "VADE08248941", contractId: "Contract-001", dataHash: "Hash123" },
  { number: 11, timestamp: "15-01-2023 10:30AM", transactionId: "VADE08248942", contractId: "Contract-001", dataHash: "Hash123" },
];

const tabs = [
  { id: "overview", label: "Overview (Dispute List)" },
  { id: "mediation", label: "Mediation" },
  { id: "blockchain", label: "Blockchain Log" },
  { id: "incentives", label: "Incentives & Evidence" },
];

function statusClasses(status: DisputeStatus) {
  switch (status) {
    case "Escalated":
      return "bg-[#FF3B30]/20 text-[#FF3B30]";
    case "Resolved":
      return "bg-[#34C759]/20 text-[#1B8E3D]";
    case "Pending":
      return "bg-[#FFC107]/20 text-[#B8860B]";
    default:
      return "bg-gray-200 text-gray-700";
  }
}

// Mediation models and sample data
export type Role = "Mediator" | "Vendor" | "Client" | "You";

export interface ChatParticipant { id: string; name: string; role: Role; }
export interface ChatMessage { id: string; senderId: string; time: string; text: string; }
export interface ChatThread {
  id: string;
  type: "direct" | "group";
  title: string;
  subtitle?: string;
  participantIds: string[];
  messages: ChatMessage[];
}

const SELF_ID = "you";

const participants: Record<string, ChatParticipant> = {
  [SELF_ID]: { id: SELF_ID, name: "You", role: "You" },
  m1: { id: "m1", name: "Rahul Maurya", role: "Mediator" },
  v1: { id: "v1", name: "Karan Vyas", role: "Vendor" },
  c1: { id: "c1", name: "Chemes Jhone", role: "Client" },
};

const initialThreads: ChatThread[] = [
  {
    id: "t1",
    type: "direct",
    title: "Karan Vyas",
    subtitle: "Vendor",
    participantIds: [SELF_ID, "v1"],
    messages: [
      { id: "m1", senderId: "v1", time: "10:30am", text: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
      { id: "m2", senderId: SELF_ID, time: "10:35am", text: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
    ],
  },
  {
    id: "t2",
    type: "group",
    title: "#ID-0005 - Vijay, Natraj, Shrisha",
    subtitle: "Click here for group info",
    participantIds: [SELF_ID, "m1", "c1"],
    messages: [
      { id: "m3", senderId: "c1", time: "10:30am", text: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
      { id: "m4", senderId: "m1", time: "10:30am", text: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
      { id: "m5", senderId: SELF_ID, time: "10:35am", text: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
      { id: "m6", senderId: SELF_ID, time: "10:35am", text: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
    ],
  },
  {
    id: "t3",
    type: "direct",
    title: "Chemes Jhone",
    subtitle: "Client",
    participantIds: [SELF_ID, "c1"],
    messages: [
      { id: "m7", senderId: "c1", time: "10:30am", text: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
      { id: "m8", senderId: SELF_ID, time: "10:35am", text: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
      { id: "m9", senderId: "c1", time: "10:30am", text: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
      { id: "m10", senderId: SELF_ID, time: "10:35am", text: "Lorem ipsum is simply dummy text of the printing and typesetting industry." },
    ],
  },
];

function roleBubbleColor(role: Role) {
  if (role === "You" || role === "Vendor") return "bg-[#FF7A00] text-white"; // orange
  if (role === "Client") return "bg-[#2DA4FF] text-white"; // blue
  if (role === "Mediator") return "bg-[#9B2CFD] text-white"; // purple
  return "bg-gray-200";
}

export default function Disputes() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [blockchainSearch, setBlockchainSearch] = useState("");
  const [incentiveSearch, setIncentiveSearch] = useState("");
  const [isNewDisputeOpen, setIsNewDisputeOpen] = useState(false);
  const [isEscalationOpen, setIsEscalationOpen] = useState(false);

  // Mediation state
  const [threads, setThreads] = useState(initialThreads);
  const [selectedThreadId, setSelectedThreadId] = useState<string>(initialThreads[0]?.id || "");
  const [chatSearch, setChatSearch] = useState("");
  const [chatFilter, setChatFilter] = useState<"all" | "group">("all");
  const [messageText, setMessageText] = useState("");
  const filteredLogs = blockchainLogs.filter((log) => {
    const hay = `${log.timestamp} ${log.transactionId} ${log.contractId} ${log.dataHash}`.toLowerCase();
    return hay.includes(blockchainSearch.toLowerCase());
  });
  const filteredIncentiveLogs = incentiveLogs.filter((log) => {
    const hay = `${log.timestamp} ${log.eventStatus} ${log.case} ${log.txId}`.toLowerCase();
    return hay.includes(incentiveSearch.toLowerCase());
  });

  // Mediation derived data
  const visibleThreads = threads.filter((t) =>
    (chatFilter === "group" ? t.type === "group" : true) &&
    `${t.title} ${t.subtitle ?? ""}`.toLowerCase().includes(chatSearch.toLowerCase())
  );
  const selectedThread = threads.find((t) => t.id === selectedThreadId) || threads[0];

  const handleSend = () => {
    const text = messageText.trim();
    if (!text || !selectedThread) return;
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }).toLowerCase();
    setThreads((prev) => prev.map((t) =>
      t.id === selectedThread.id
        ? { ...t, messages: [...t.messages, { id: `x${Date.now()}`, senderId: SELF_ID, time, text }] }
        : t
    ));
    setMessageText("");
  };

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
          {/* Disputes Toolbar */}
          <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#222]">Disputes List</h2>

              <div className="flex items-center gap-3">
                <Button
                  onClick={() => setIsNewDisputeOpen(true)}
                  className="h-[42px] px-4 rounded-full bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00] text-white font-bold hover:opacity-90"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  New Dispute
                </Button>

                <Button
                  onClick={() => setIsEscalationOpen(true)}
                  variant="outline"
                  className="h-[42px] px-4 rounded-full border-[#E3E3E3] bg-white"
                >
                  <ArrowUp className="w-5 h-5 mr-2" />
                  Escalate
                </Button>

                <Button variant="outline" className="h-[42px] px-4 rounded-full border-[#E3E3E3] bg-white">
                  <Download className="w-5 h-5 mr-2" />
                  Export Log
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
                  <SelectTrigger className="w-[104px] h-[42px] rounded-full border border-[#E3E3E3] bg-white">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="breach">Breach of Contract</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[104px] h-[42px] rounded-full border border-[#E3E3E3] bg-white">
                    <SelectValue placeholder="Client" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Clients</SelectItem>
                    <SelectItem value="vendors">Vendors/Suppliers</SelectItem>
                    <SelectItem value="customers">Clients/Customers</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[104px] h-[42px] rounded-full border border-[#E3E3E3] bg-white">
                    <SelectValue placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Dates</SelectItem>
                    <SelectItem value="recent">Recent</SelectItem>
                    <SelectItem value="older">Older</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>


          {/* Disputes Table */}
          <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9]">
            <div className="p-5">
              <div className="border border-[#E3E3E3] rounded-[10px]">
                <div className="w-full max-w-full overflow-x-auto overflow-y-hidden">
                  <table className="min-w-[1800px] w-full">
                    <thead>
                      <tr className="bg-[#DFDFDF]">
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap"
                          style={{ width: "60px" }}
                        >
                          No.
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap"
                          style={{ width: "140px" }}
                        >
                          Disputes ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-bold text-[#000] text-left"
                          style={{ minWidth: "320px" }}
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap"
                          style={{ width: "320px" }}
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap"
                          style={{ minWidth: "240px" }}
                        >
                          Counter Party
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-bold text-[#000] text-center whitespace-nowrap"
                          style={{ width: "120px" }}
                        >
                          Priority
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap"
                          style={{ minWidth: "260px" }}
                        >
                          Forum
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-bold text-[#000] text-center whitespace-nowrap"
                          style={{ width: "140px" }}
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap"
                          style={{ width: "160px" }}
                        >
                          Owner
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap"
                          style={{ width: "160px" }}
                        >
                          Last Update
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-bold text-[#000] text-left whitespace-nowrap"
                          style={{ width: "160px" }}
                        >
                          Due Next
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {disputesData.map((dispute) => (
                        <tr key={dispute.id} className="border-b border-[#DFDFDF] last:border-b-0">
                          <td className="px-6 py-4 text-sm font-bold text-[#000] whitespace-nowrap">
                            {String(dispute.number).padStart(2, "0")}
                          </td>
                          <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{dispute.id}</td>
                          <td className="px-6 py-4 text-sm text-[#333]">
                            <span className="block truncate" title={dispute.title}>
                              {dispute.title}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{dispute.type}</td>
                          <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">
                            <span className="block truncate leading-[17px]" title={dispute.counterParty}>
                              {dispute.counterParty}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-[#333] text-center whitespace-nowrap">
                            {dispute.priority}
                          </td>
                          <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">
                            <span className="block truncate leading-[17px]" title={dispute.forum}>
                              {dispute.forum}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-center whitespace-nowrap">
                            <span className={`inline-flex items-center justify-center px-3 py-1 text-[11px] font-semibold rounded-full uppercase ${statusClasses(dispute.status)}`}>
                              {dispute.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-[#333] uppercase whitespace-nowrap">
                            {dispute.owner}
                          </td>
                          <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{dispute.lastUpdate}</td>
                          <td className="px-6 py-4 text-sm text-[#333] whitespace-nowrap">{dispute.dueNext}</td>
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

                <div className="text-xs font-bold text-[#5C5B5B]">Number of Pages 12/01</div>
              </div>
            </div>
          </div>
        </div>)}

        {activeTab === "mediation" && (
          <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-4 -mt-px mb-6 flex items-center justify-end gap-3">
              <Button variant="outline" className="h-[36px] px-4 rounded-full border-[#E3E3E3] bg-white">
                <Users className="w-5 h-5 mr-2" />
                Create New Group
              </Button>
              <Button variant="outline" className="h-[36px] px-4 rounded-full border-[#E3E3E3] bg-white">
                <UserPlus className="w-5 h-5 mr-2" />
                Add New Member
              </Button>
            </div>

            <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] flex-1 min-h-0">
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 h-full min-h-0">
                <div className="border border-[#E3E3E3] rounded-[10px] overflow-hidden flex flex-col h-full min-h-0">
                  <div className="p-3 border-b border-[#E3E3E3] bg-[#FAFAFA]">
                    <div className="text-sm font-semibold text-[#222] mb-2">Message</div>
                    <div className="relative mb-3">
                      <input
                        type="text"
                        value={chatSearch}
                        onChange={(e) => setChatSearch(e.target.value)}
                        placeholder="Search"
                        className="w-full h-[34px] px-3 border border-[#D9D9D9] rounded-md text-xs text-[#666] bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setChatFilter("all")} className={`px-3 py-1 rounded-full text-xs ${chatFilter === "all" ? "bg-[#2B2B2B] text-white" : "bg-[#EDEDED] text-[#333]"}`}>All</button>
                      <button onClick={() => setChatFilter("group")} className={`px-3 py-1 rounded-full text-xs ${chatFilter === "group" ? "bg-[#2B2B2B] text-white" : "bg-[#EDEDED] text-[#333]"}`}>Group</button>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {visibleThreads.map((t) => {
                      const primaryId = t.participantIds.find((id) => id !== SELF_ID) || t.participantIds[0];
                      const p = participants[primaryId];
                      const initials = p?.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
                      const active = selectedThreadId === t.id;
                      return (
                        <button key={t.id} onClick={() => setSelectedThreadId(t.id)} className={`w-full flex items-center gap-3 px-3 py-3 text-left border-b border-[#EFEFEF] ${active ? "bg-[#F5F5F5]" : "hover:bg-[#FAFAFA]"}`}>
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="" alt={p?.name} />
                            <AvatarFallback className="text-[11px]">{initials}</AvatarFallback>
                          </Avatar>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-[#222] truncate">{t.title}</div>
                            <div className="text-[11px] text-[#666] truncate">{t.subtitle || p?.role}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="border border-[#E3E3E3] rounded-[10px] flex flex-col h-full min-h-0">
                  <div className="px-4 py-3 border-b border-[#E3E3E3] bg-[#FAFAFA] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-[#222]">{selectedThread?.title}</div>
                      {selectedThread?.subtitle && (<div className="text-[11px] text-[#666]">{selectedThread.subtitle}</div>)}
                    </div>
                    <button aria-label="More actions" className="p-1 rounded hover:bg-gray-100">
                      <MoreVertical className="w-5 h-5 text-[#666]" />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
                    <div className="text-center text-[11px] text-[#666]">Today</div>
                    {selectedThread?.messages.map((m) => {
                      const sender = participants[m.senderId];
                      const isSelf = m.senderId === SELF_ID;
                      return (
                        <div key={m.id} className={`flex ${isSelf ? "justify-end" : "justify-start"}`}>
                          <div className="max-w-[70%]">
                            <div className="text-[11px] text-[#666] mb-1">{sender?.name} - {m.time}</div>
                            <div className={`px-3 py-2 rounded-lg text-sm shadow ${roleBubbleColor(sender?.role || "Client")}`}>
                              {m.text}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 border-t border-[#E3E3E3] bg-white">
                    <div className="flex items-center gap-2">
                      <input
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        placeholder="Type Message..."
                        className="flex-1 h-[38px] px-3 border border-[#D9D9D9] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <Button variant="outline" className="h-[38px] aspect-square p-0 rounded-full border-[#E3E3E3] bg-white">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="h-[38px] aspect-square p-0 rounded-full border-[#E3E3E3] bg-white">
                        <Smile className="w-4 h-4" />
                      </Button>
                      <Button onClick={handleSend} className="h-[38px] aspect-square p-0 rounded-full bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00] text-white">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "blockchain" && (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-4 -mt-px mb-6">
              <div className="flex items-center justify-between">
                <div className="relative w-full max-w-[519px]">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={blockchainSearch}
                    onChange={(e) => setBlockchainSearch(e.target.value)}
                    className="w-full h-[38px] px-4 border border-[#D9D9D9] rounded-lg text-xs text-[#666] bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Button className="h-[36px] px-4 rounded-full bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00] text-white font-bold hover:opacity-90">Date</Button>
                  <Button variant="outline" className="h-[36px] px-4 rounded-full border-[#E3E3E3] bg-white">Contract</Button>
                  <Button variant="outline" className="h-[36px] px-4 rounded-full border-[#E3E3E3] bg-white">Dispute</Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9]">
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-base font-bold text-[#222]">Blockchain Activity Log</h2>
                  <div className="text-sm font-bold text-[#222]">Number of Result ({filteredLogs.length})</div>
                </div>

                <div className="border border-[#E3E3E3] rounded-[10px]">
                  <div className="w-full overflow-x-auto overflow-y-hidden">
                    <div className="min-w-[900px] bg-[#DFDFDF] px-5 py-3 grid grid-cols-[64px_minmax(220px,1.2fr)_minmax(220px,1fr)_minmax(220px,1fr)_minmax(180px,0.8fr)] gap-4 items-center">
                      <div className="text-sm font-bold text-[#000]">No.</div>
                      <div className="text-sm font-bold text-[#000]">Time Stamp</div>
                      <div className="text-sm font-bold text-[#000]">Transaction ID</div>
                      <div className="text-sm font-bold text-[#000]">Contract/Dispute Id</div>
                      <div className="text-sm font-bold text-[#000]">Data Hash</div>
                    </div>
                    <div className="min-w-[900px]">
                      {filteredLogs.map((log, idx) => (
                        <div key={`${log.transactionId}-${idx}`}>
                          <div className="px-5 py-3 grid grid-cols-[64px_minmax(220px,1.2fr)_minmax(220px,1fr)_minmax(220px,1fr)_minmax(180px,0.8fr)] gap-4 items-center">
                            <div className="text-sm font-bold text-[#000]">{String(log.number).padStart(2, "0")}</div>
                            <div className="text-sm text-[#333] whitespace-nowrap">{log.timestamp}</div>
                            <div className="text-sm text-[#333]">{log.transactionId}</div>
                            <div className="text-sm text-[#333]">{log.contractId}</div>
                            <div className="text-sm text-[#333]">{log.dataHash}</div>
                          </div>
                          {idx < filteredLogs.length - 1 && (<div className="h-px bg-[#DFDFDF]" />)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" className="h-6 px-3.5 rounded border-2 border-[#5C5B5B] bg-[#5C5B5B] text-white text-xs hover:bg-[#4C4B4B]">Prev</Button>
                    <Button variant="outline" className="h-6 px-3.5 rounded border-2 border-[#5C5B5B] bg-[#5C5B5B] text-white text-xs hover:bg-[#4C4B4B]">Next</Button>
                  </div>
                  <div className="text-xs font-bold text-[#5C5B5B]">Number of Pages 01/01</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "incentives" && (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-5 -mt-px mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-[#222]\">Incentives & Evidence Log</h2>
                <div className="text-lg font-bold text-[#222]\">Number of Result ({filteredIncentiveLogs.length})</div>
              </div>

              <div className="border border-[#E3E3E3] rounded-[10px]">
                <div className="w-full overflow-x-auto overflow-y-hidden">
                  <div className="min-w-[900px] bg-[#DFDFDF] px-5 py-3 grid grid-cols-[64px_minmax(200px,1fr)_minmax(180px,0.8fr)_minmax(160px,0.8fr)_minmax(160px,0.8fr)] gap-4 items-center">
                    <div className="text-sm font-bold text-[#000]">No.</div>
                    <div className="text-sm font-bold text-[#000]">Time Stamp</div>
                    <div className="text-sm font-bold text-[#000]">Event Status</div>
                    <div className="text-sm font-bold text-[#000]">Case</div>
                    <div className="text-sm font-bold text-[#000] text-right">TX ID</div>
                  </div>
                  <div className="min-w-[900px]">
                    {filteredIncentiveLogs.map((log, idx) => (
                      <div key={`${log.txId}-${idx}`}>
                        <div className="px-5 py-3 grid grid-cols-[64px_minmax(200px,1fr)_minmax(180px,0.8fr)_minmax(160px,0.8fr)_minmax(160px,0.8fr)] gap-4 items-center">
                          <div className="text-sm font-bold text-[#000]">{String(log.number).padStart(2, "0")}</div>
                          <div className="text-sm text-[#333] whitespace-nowrap">{log.timestamp}</div>
                          <div>
                            <span className="inline-flex items-center justify-center px-2 py-1 text-[10px] font-bold text-white rounded" style={{ backgroundColor: log.statusColor }}>
                              {log.eventStatus}
                            </span>
                          </div>
                          <div className="text-sm text-[#333]">{log.case}</div>
                          <div className="text-sm text-[#333] text-right">{log.txId}</div>
                        </div>
                        {idx < filteredIncentiveLogs.length - 1 && (<div className="h-px bg-[#DFDFDF]" />)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="h-6 px-3.5 rounded border-2 border-[#5C5B5B] bg-[#5C5B5B] text-white text-xs hover:bg-[#4C4B4B]">Prev</Button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <Button key={page} variant="outline" className={`h-6 w-6 p-0 rounded border-2 border-[#5C5B5B] text-xs ${page === 1 ? "bg-[#5C5B5B] text-white" : "bg-white text-[#2D2B3E]"
                      }`}>
                      {page}
                    </Button>
                  ))}
                  <Button variant="outline" className="h-6 px-3.5 rounded border-2 border-[#5C5B5B] bg-[#5C5B5B] text-white text-xs hover:bg-[#4C4B4B]">Next</Button>
                </div>
                <div className="text-xs font-bold text-[#5C5B5B]">Number of Pages 10/01</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Token Incentives Card */}
              <div className="relative bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-5">
                <h3 className="text-lg font-bold text-[#222] mb-2">Token Incentives</h3>
                <p className="text-sm text-[#6D6D6D] mb-2">Total Tokens Earned</p>
                <div className="text-5xl font-bold bg-gradient-to-r from-[#9D2DFA] to-[#FD7806] bg-clip-text text-transparent mb-4">1,500 LXT</div>

                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-[#222]">Next Goal: 2,000 LXT</p>
                  <span className="text-sm font-extrabold bg-gradient-to-b from-[#9B2CFD] to-[#FF7A00] bg-clip-text text-transparent">75%</span>
                </div>
                <div className="h-3 rounded-full bg-gradient-to-r from-[#9B2CFD] via-[#FF7A00] to-[#D9D9D9] mb-6" style={{ background: 'linear-gradient(90deg, #9B2CFD 0%, #FF7A00 75%, #D9D9D9 75%)' }}></div>

                <div className="flex items-center gap-3">
                  <Button className="flex-1 h-[37px] rounded-md bg-gradient-to-l from-[#9B2CFD] to-[#FF7A00] text-white font-bold hover:opacity-90">
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.60689 21.4017C4.22429 21.5616 3.86083 21.5264 3.5165 21.2962C3.17217 21.0668 3 20.7324 3 20.2928V15.827C3 15.5472 3.07652 15.2975 3.22956 15.0777C3.38259 14.8579 3.59302 14.718 3.86083 14.6581L12.1822 12.5001L3.86083 10.3421C3.59302 10.2822 3.38259 10.1423 3.22956 9.92252C3.07652 9.70273 3 9.45297 3 9.17323V4.70743C3 4.26784 3.17217 3.93296 3.5165 3.70277C3.86083 3.47339 4.22429 3.43862 4.60689 3.59847L20.2826 11.3911C20.7609 11.6109 21 11.9806 21 12.5001C21 13.0196 20.7609 13.3893 20.2826 13.6091L4.60689 21.4017Z" fill="white" />
                    </svg>
                    Transfer
                  </Button>
                  <Button className="flex-1 h-[37px] rounded-md bg-gradient-to-l from-[#9B2CFD] to-[#FF7A00] text-white font-bold hover:opacity-90">
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.2 7.57895H17.238C17.337 7.30158 17.4 6.99737 17.4 6.68421C17.4 5.19895 16.194 4 14.7 4C13.755 4 12.936 4.48316 12.45 5.20789L12 5.80737L11.55 5.19895C11.064 4.48316 10.245 4 9.3 4C7.806 4 6.6 5.19895 6.6 6.68421C6.6 6.99737 6.663 7.30158 6.762 7.57895H4.8C3.801 7.57895 3.009 8.37526 3.009 9.36842L3 19.2105C3 20.2037 3.801 21 4.8 21H19.2C20.199 21 21 20.2037 21 19.2105V9.36842C21 8.37526 20.199 7.57895 19.2 7.57895ZM14.7 5.78947C15.195 5.78947 15.6 6.19211 15.6 6.68421C15.6 7.17632 15.195 7.57895 14.7 7.57895C14.205 7.57895 13.8 7.17632 13.8 6.68421C13.8 6.19211 14.205 5.78947 14.7 5.78947ZM9.3 5.78947C9.795 5.78947 10.2 6.19211 10.2 6.68421C10.2 7.17632 9.795 7.57895 9.3 7.57895C8.805 7.57895 8.4 7.17632 8.4 6.68421C8.4 6.19211 8.805 5.78947 9.3 5.78947ZM19.2 19.2105H4.8V17.4211H19.2V19.2105ZM19.2 14.7368H4.8V9.36842H9.372L7.5 11.9005L8.958 12.9474L11.1 10.0484L12 8.83158L12.9 10.0484L15.042 12.9474L16.5 11.9005L14.628 9.36842H19.2V14.7368Z" fill="white" />
                    </svg>
                    Redeem
                  </Button>
                </div>

                <div className="absolute top-[20px] right-5">
                  <svg className="w-[53px] h-[48px]" viewBox="0 0 53 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7778 20.8V10.6667H5.88889V13.3333C5.88889 15.0222 6.4287 16.5444 7.50833 17.9C8.58796 19.2556 10.0111 20.2222 11.7778 20.8ZM41.2222 20.8C42.9889 20.2222 44.412 19.2556 45.4917 17.9C46.5713 16.5444 47.1111 15.0222 47.1111 13.3333V10.6667H41.2222V20.8ZM23.5556 42.6667V34.4C21.1509 33.9111 19.0039 32.9889 17.1146 31.6333C15.2252 30.2778 13.8389 28.5778 12.9556 26.5333C9.275 26.1333 6.1956 24.6778 3.71736 22.1667C1.23912 19.6556 0 16.7111 0 13.3333V10.6667C0 9.2 0.57662 7.94444 1.72986 6.9C2.8831 5.85556 4.26944 5.33333 5.88889 5.33333H11.7778C11.7778 3.86667 12.3544 2.61111 13.5076 1.56667C14.6609 0.522222 16.0472 0 17.6667 0H35.3333C36.9528 0 38.3391 0.522222 39.4924 1.56667C40.6456 2.61111 41.2222 3.86667 41.2222 5.33333H47.1111C48.7306 5.33333 50.1169 5.85556 51.2701 6.9C52.4234 7.94444 53 9.2 53 10.6667V13.3333C53 16.7111 51.7609 19.6556 49.2826 22.1667C46.8044 24.6778 43.725 26.1333 40.0444 26.5333C39.1611 28.5778 37.7748 30.2778 35.8854 31.6333C33.9961 32.9889 31.8491 33.9111 29.4444 34.4V42.6667H38.2778C39.112 42.6667 39.8113 42.9222 40.3757 43.4333C40.94 43.9444 41.2222 44.5778 41.2222 45.3333C41.2222 46.0889 40.94 46.7222 40.3757 47.2333C39.8113 47.7444 39.112 48 38.2778 48H14.7222C13.888 48 13.1887 47.7444 12.6243 47.2333C12.06 46.7222 11.7778 46.0889 11.7778 45.3333C11.7778 44.5778 12.06 43.9444 12.6243 43.4333C13.1887 42.9222 13.888 42.6667 14.7222 42.6667H23.5556Z" fill="url(#paint0_linear_trophy)" />
                    <defs>
                      <linearGradient id="paint0_linear_trophy" x1="26.5" y1="0" x2="26.5" y2="48" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F87511" />
                        <stop offset="1" stopColor="#A433E7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* AI Legal Compliance Preview Card */}
              <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-5">
                <h3 className="text-lg font-bold text-[#222] mb-2">AI Legal Compliance Preview</h3>
                <p className="text-sm text-[#6D6D6D] mb-2">Legal Health Score</p>

                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-[#222]">Next Goal: 2,000 LXT</p>
                  <span className="text-sm font-extrabold bg-gradient-to-b from-[#9B2CFD] to-[#FF7A00] bg-clip-text text-transparent">75%</span>
                </div>
                <div className="h-3 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, #9B2CFD 0%, #FF7A00 75%, #D9D9D9 75%)' }}></div>

                <p className="text-sm text-[#6D6D6D] mb-6">
                  Reflects potential legal risks, compliance with regulations, and overall Robust rusts of legal analysis..
                </p>

                <h4 className="text-lg font-bold text-[#222] mb-2">Insights</h4>
                <p className="text-sm text-[#6D6D6D]">
                  This score provides a comprehensive AI analysis of your document's legal standing. It evaluates potential risks against established databases and checks for compliance with current regulations to ensure your position is secure.
                </p>
              </div>
            </div>
          </div>
        )}

      </main>

      <NewDisputeDialog
        open={isNewDisputeOpen}
        onOpenChange={setIsNewDisputeOpen}
      />

      <RaiseEscalationDialog
        open={isEscalationOpen}
        onOpenChange={setIsEscalationOpen}
      />
    </div>
  );
}
