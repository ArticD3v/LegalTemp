import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Bold, Italic, List, Copy, CheckCircle2, AlertCircle, Clock, ChevronDown, Paperclip, AtSign } from "lucide-react";

interface ComplianceItem {
  name: string;
  status: "compliant" | "warning";
}

interface Comment {
  id: string;
  author: string;
  timestamp: string;
  content: string;
  avatar: string;
}

interface PolicyWorkflowStep {
  id: string;
  label: string;
  isActive: boolean;
}

const workflowSteps: PolicyWorkflowStep[] = [
  { id: "draft", label: "Draft", isActive: true },
  { id: "review", label: "Review", isActive: false },
  { id: "submitted", label: "Submitted", isActive: false },
  { id: "feedback", label: "Feedback", isActive: false },
];

const complianceItems: ComplianceItem[] = [
  { name: "GDPR", status: "compliant" },
  { name: "CCPA", status: "compliant" },
  { name: "SOX", status: "warning" },
];

const comments: Comment[] = [
  {
    id: "1",
    author: "Karan Yadav",
    timestamp: "02 Hours Ago",
    content: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/33f0d7d2a7012567fa030a9196a88c0075f428b5?width=274"
  },
  {
    id: "2",
    author: "Karan Yadav",
    timestamp: "02 Hours Ago",
    content: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/33f0d7d2a7012567fa030a9196a88c0075f428b5?width=274"
  },
  {
    id: "3",
    author: "Karan Yadav",
    timestamp: "02 Hours Ago",
    content: "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/33f0d7d2a7012567fa030a9196a88c0075f428b5?width=274"
  }
];

export default function Policy() {
  const [activeStep, setActiveStep] = useState("draft");
  const [policyTitle] = useState("Data Privacy and Protection Policy v2.1");
  const [newComment, setNewComment] = useState("");
  const [policyContent] = useState([
    {
      section: "1. PURPOSE AND SCOPE",
      content:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      section: "2. DATA COLLECTION PRINCIPLES",
      subsections: [
        {
          title: "2.1 Lawful Basis",
          content:
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "2.2 Data Minimization",
          content:
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "2.3 Transparency",
          content:
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
    },
    {
      section: "3. DATA RETENTION",
      subsections: [
        {
          title: "3.1 Retention Periods",
          content:
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          title: "3.2 Deletion Procedures",
          content:
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
    },
  ]);

  const handleStepClick = (stepId: string) => {
    setActiveStep(stepId);
  };

  const handleApproveSubmit = () => {
    console.log("Approve and submit");
  };

  const handleRequestChanges = () => {
    console.log("Request changes");
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      console.log("Add comment:", newComment);
      setNewComment("");
    }
  };

  const isDraftView = activeStep === "draft";

  return (
    <div className="h-screen bg-[#F1F1F1] flex overflow-hidden">
      <Sidebar />

      <main className="flex-1 w-full min-w-0 ml-[240px] p-4 sm:p-6 h-full min-h-0 flex flex-col overflow-hidden">
        <DashboardHeader />

        <div className="flex-1 min-h-0 overflow-y-auto">
          {/* Policy Header */}
          <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-xl font-bold text-[#222] mb-1">
                  {isDraftView ? "Create Policy Draft" : "Policy Review"}
                </h1>
                <p className="text-sm text-[#666]">Draft and refine your policy with AI assistance</p>
              </div>
              <p className="text-xs text-[#999]">Last saved: 2 minutes ago</p>
            </div>

            {/* Workflow Status */}
            <div className="flex items-center justify-between gap-2">
              {workflowSteps.map((step, index) => {
                const isStepActive = activeStep === step.id;
                const isStepOrBefore = workflowSteps.findIndex((s) => s.id === activeStep) >= index;

                return (
                  <div key={step.id} className="flex items-center flex-1 gap-2">
                    <button
                      onClick={() => handleStepClick(step.id)}
                      className={`flex-shrink-0 px-4 py-2 rounded-full flex items-center justify-center font-semibold text-sm transition-all whitespace-nowrap ${
                        isStepActive
                          ? "bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00] text-white"
                          : "bg-[#E8E8E8] text-[#999]"
                      }`}
                    >
                      {step.label}
                    </button>

                    {index < workflowSteps.length - 1 && (
                      <div
                        className={`flex-1 h-1 rounded transition-all ${
                          isStepOrBefore
                            ? "bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00]"
                            : "bg-[#E8E8E8]"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* DRAFT VIEW */}
          {isDraftView && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Policy Document */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6">
                    {/* Policy Header with Title and Toolbar */}
                    <div className="flex items-start justify-between mb-6 pb-4 border-b border-[#E3E3E3]">
                      <h2 className="text-2xl font-bold text-[#222]">{policyTitle}</h2>
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded hover:bg-gray-100">
                          <Bold className="w-4 h-4 text-[#666]" />
                        </button>
                        <button className="p-2 rounded hover:bg-gray-100">
                          <Italic className="w-4 h-4 text-[#666]" />
                        </button>
                        <button className="p-2 rounded hover:bg-gray-100">
                          <List className="w-4 h-4 text-[#666]" />
                        </button>
                        <button className="p-2 rounded hover:bg-gray-100">
                          <Copy className="w-4 h-4 text-[#666]" />
                        </button>
                      </div>
                    </div>

                    {/* Policy Content */}
                    <div className="space-y-5">
                      {policyContent.map((section, idx) => (
                        <div key={idx}>
                          <h3 className="text-sm font-bold text-[#222] mb-3">{section.section}</h3>
                          {section.subsections ? (
                            <div className="space-y-3 ml-4">
                              {section.subsections.map((subsection, subIdx) => (
                                <div key={subIdx}>
                                  <h4 className="text-sm font-semibold text-[#444] mb-1">{subsection.title}</h4>
                                  <p className="text-sm text-[#666] leading-relaxed">{subsection.content}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-sm text-[#666] leading-relaxed">{section.content}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Impact Summary Sidebar */}
                <div className="lg:col-span-1">
                  <div className="space-y-4">
                    {/* Policy Health Score Card */}
                    <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-5">
                      <h3 className="text-sm font-bold text-[#222] mb-4">AI Impact Summary</h3>

                      <div className="mb-5">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xs font-semibold text-[#222]">Policy Health Score</h4>
                          <span className="text-lg font-bold text-[#10B981]">85%</span>
                        </div>
                        <div className="w-full bg-[#E5E5E5] h-2 rounded-full overflow-hidden mb-2">
                          <div className="bg-[#10B981] h-full rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <p className="text-xs text-[#666]">Good compliance level. Consider addressing suggestions below.</p>
                      </div>

                      {/* AI Insights */}
                      <div className="mb-5">
                        <h4 className="text-xs font-semibold text-[#222] mb-3">AI Insight</h4>
                        <div className="space-y-3">
                          <div className="p-3 rounded-md bg-[#EFF6FF] border-l-4 border-l-[#3B82F6]">
                            <p className="text-xs text-[#1E40AF]">Lorem ipsum is simply dummy text of the printing</p>
                          </div>
                          <div className="p-3 rounded-md bg-[#FFFBEB] border-l-4 border-l-[#FBBF24]">
                            <p className="text-xs text-[#92400E]">Lorem ipsum is simply dummy text of the printing</p>
                          </div>
                          <div className="p-3 rounded-md bg-[#ECFDF5] border-l-4 border-l-[#10B981]">
                            <p className="text-xs text-[#065F46]">Lorem ipsum is simply dummy text of the printing</p>
                          </div>
                        </div>
                      </div>

                      {/* Bias & Fairness Check */}
                      <div className="mb-5 pb-5 border-b border-[#E3E3E3]">
                        <h4 className="text-xs font-semibold text-[#222] mb-3">Bias & Fairness Check</h4>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                          <p className="text-xs text-[#10B981]">Lorem ipsum is simply text of the printing</p>
                        </div>
                      </div>

                      {/* Compliance Status */}
                      <div>
                        <h4 className="text-xs font-semibold text-[#222] mb-3">Compliance Status</h4>
                        <div className="space-y-3">
                          {complianceItems.map((item) => (
                            <div key={item.name} className="flex items-center justify-between">
                              <span className="text-xs text-[#666]">{item.name}</span>
                              {item.status === "compliant" ? (
                                <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                              ) : (
                                <AlertCircle className="w-5 h-5 text-[#FF9500]" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3 mt-6 mb-6">
                <Button variant="outline" className="h-[40px] px-6 rounded-lg border-[#E3E3E3] bg-white">
                  Discard
                </Button>
                <Button variant="outline" className="h-[40px] px-6 rounded-lg border-[#E3E3E3] bg-white">
                  Save Draft
                </Button>
                <Button
                  onClick={() => handleStepClick("review")}
                  className="h-[40px] px-6 rounded-lg bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00] text-white font-bold hover:opacity-90"
                >
                  Send for Review
                </Button>
              </div>
            </>
          )}

          {/* REVIEW VIEW */}
          {!isDraftView && (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
              {/* Policy Content */}
              <div>
                <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-[#222]">Policy Content</h2>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#716E6E] bg-white text-[#716E6E] font-semibold text-sm hover:bg-gray-50">
                        <Clock className="w-4 h-4" />
                        Previous Version
                      </button>
                      <button className="px-4 py-2.5 rounded-full border border-[#716E6E] bg-white text-[#716E6E] font-semibold text-sm hover:bg-gray-50">
                        Compare Changes
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-[#E3E3E3] pt-6 space-y-5">
                    {/* Section 1 */}
                    <div className="rounded-[10px] border border-[#E3E3E3] bg-[#F9F9F9] p-5">
                      <h3 className="text-sm font-semibold text-[#222] mb-3">1. Purpose and Scope</h3>
                      <p className="text-xs text-[#6D6D6D] leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and
                        industry's standard dummy text ever since the 1500s,
                      </p>
                    </div>

                    {/* Section 2 - With Warning */}
                    <div className="rounded-[10px] border border-[#FACC15] bg-[#FEFCE8] p-5">
                      <h3 className="text-sm font-semibold text-[#222] mb-3">2. Data Collection Principles</h3>
                      <p className="text-xs text-[#6D6D6D] leading-relaxed mb-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and
                        industry's standard dummy text ever since the 1500s,
                      </p>
                      
                      {/* Warning Badge */}
                      <div className="rounded-md bg-[#FFF9C2] px-4 py-3 flex items-center gap-3">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.55882 0.827206L0.392157 14.2647C0.214528 14.5978 0.455873 15 0.833333 15H15.1667C15.5441 15 15.7855 14.5978 15.6078 14.2647L8.44118 0.827206C8.25294 0.474265 7.74706 0.474265 7.55882 0.827206Z" fill="#B08204"/>
                          <path d="M8 5V10" stroke="white"/>
                          <path d="M8 11V12.5" stroke="white"/>
                        </svg>
                        <p className="text-xs font-semibold text-[#B08204]">Reviewer feedback pending on consent mechanisms</p>
                      </div>
                    </div>

                    {/* Section 3 */}
                    <div className="rounded-[10px] border border-[#E3E3E3] bg-[#F9F9F9] p-5">
                      <h3 className="text-sm font-semibold text-[#222] mb-3">3. Data Security Requirements</h3>
                      <p className="text-xs text-[#6D6D6D] leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and
                        industry's standard dummy text ever since the 1500s,
                      </p>
                    </div>
                  </div>
                </div>

                {/* Version Comparison Section */}
                <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold text-[#222]">Version Comparison</h2>
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 px-3 py-1.5 rounded border border-[#E3E3E3] bg-white text-xs text-[#5C5B5B]">
                        v1.0 vs v1.1
                        <ChevronDown className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-[#222]">Hash: 0x4a7b...9c3d</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {/* Version 1.2 */}
                    <div className="flex-1 rounded-[10px] border border-[#E3E3E3] bg-[#F9F9F9] p-5">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-semibold text-[#222]">Version 1.2</h3>
                        <button className="px-4 py-1.5 rounded-full border border-[#716E6E] bg-white text-xs font-semibold text-[#716E6E]">
                          Previous
                        </button>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs text-[#6D6D6D] leading-relaxed">
                          Personal data must be collected lawfully and fairly.
                        </p>
                        <div className="rounded-md bg-[#FFE5E5] px-3 py-2.5">
                          <p className="text-xs text-[#B31B1B]">Data collection should be limited to necessary purposes.</p>
                        </div>
                        <p className="text-xs text-[#6D6D6D] leading-relaxed">
                          Consent must be obtained where required.
                        </p>
                      </div>
                    </div>

                    {/* Version 1.3 */}
                    <div className="flex-1 rounded-[10px] border border-[#E3E3E3] bg-[#F9F9F9] p-5">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-semibold text-[#222]">Version 1.3</h3>
                        <button className="px-4 py-1.5 rounded-full border border-[#716E6E] bg-white text-xs font-semibold text-[#716E6E]">
                          Current
                        </button>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs text-[#6D6D6D] leading-relaxed">
                          Personal data must be collected lawfully, fairly, and transparently.
                        </p>
                        <div className="rounded-md bg-[#DBFFE6] px-3 py-2.5">
                          <p className="text-xs text-[#10A13D]">
                            Data collection should be limited to what is necessary for specified, explicit,
                            and legitimate purposes.
                          </p>
                        </div>
                        <p className="text-xs text-[#6D6D6D] leading-relaxed">
                          Consent must be obtained where required, and individuals must be informed
                          about how their data will be used.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Reviewer Actions & Comments */}
              <div className="space-y-6">
                {/* Reviewer Actions */}
                <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-5">
                  <h3 className="text-lg font-bold text-[#222] mb-6 pb-4 border-b border-[#E3E3E3]">Reviewer Actions</h3>
                  
                  <div className="space-y-3">
                    <Button 
                      onClick={handleApproveSubmit}
                      className="w-full h-[42px] rounded-full bg-gradient-to-r from-[#A635E4] to-[#F27024] text-white font-semibold hover:opacity-90"
                    >
                      Approve & Submit
                    </Button>
                    
                    <Button 
                      onClick={handleRequestChanges}
                      variant="outline"
                      className="w-full h-[42px] rounded-full border-[#716E6E] text-[#716E6E] font-semibold hover:bg-gray-50"
                    >
                      Request Changes
                    </Button>
                    
                    <Button 
                      onClick={() => handleStepClick("draft")}
                      variant="outline"
                      className="w-full h-[42px] rounded-full border-[#716E6E] text-[#716E6E] font-semibold hover:bg-gray-50"
                    >
                      Discard
                    </Button>
                  </div>
                </div>

                {/* Comments & Feedback */}
                <div className="bg-white rounded-[20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9]">
                  <div className="p-5 border-b border-[#E3E3E3]">
                    <h3 className="text-sm font-bold text-[#222]">Comments & Feedback</h3>
                  </div>

                  <div className="p-5 space-y-4 max-h-[400px] overflow-y-auto">
                    {comments.map((comment) => (
                      <div key={comment.id} className="rounded-[10px] border border-[#E3E3E3] bg-[#F9F9F9] p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={comment.avatar} 
                              alt={comment.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-[#222]">{comment.author}</h4>
                            <div className="flex items-center gap-2 mt-1 mb-2">
                              <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
                              <span className="text-xs text-[#6D6D6D]">{comment.timestamp}</span>
                            </div>
                            <p className="text-xs text-[#6D6D6D] leading-relaxed">{comment.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 border-t border-[#E3E3E3]">
                    <div className="rounded-md border border-[#716E6E] bg-white p-4 mb-3 min-h-[73px]">
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Type Comment..."
                        className="w-full text-xs text-[#6D6D6D] resize-none border-none outline-none bg-transparent"
                        rows={2}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded">
                          <Paperclip className="w-5 h-5 text-[#1D1B20]" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded">
                          <AtSign className="w-5 h-5 text-[#000]" />
                        </button>
                      </div>
                      <Button
                        onClick={handleAddComment}
                        className="h-[42px] px-6 rounded-full bg-gradient-to-r from-[#A635E4] to-[#F27024] text-white font-semibold text-sm hover:opacity-90"
                      >
                        Add Comment
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
