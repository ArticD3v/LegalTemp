import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Bold, Italic, AlignLeft, List, ChevronDown } from "lucide-react";

interface AdvocacyProposalFormProps {
  onClose: () => void;
}

export default function AdvocacyProposalForm({ onClose }: AdvocacyProposalFormProps) {
  const [currentStep, setCurrentStep] = useState<"draft" | "review" | "submitted" | "feedback">("draft");

  return (
    <div className="flex-1 min-h-0 overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-lg font-bold text-[#222]">Create Advocacy Proposal Draft</h1>
            <p className="text-xs text-[#6D6D6D] mt-1">Draft and refine your policy with AI assistance</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm font-bold text-[#6D6D6D]">Last saved: 2 minutes ago</p>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center gap-6 mb-8">
        <div className="flex items-center h-10">
          <div className="h-10 rounded-full bg-gradient-to-r from-[#A030F2] to-[#FD7906] flex items-center px-3 pr-5">
            <div className="w-8 h-8 rounded-full bg-white mr-3"></div>
            <span className="text-white font-bold text-base">Draft</span>
          </div>
        </div>

        <div className="flex items-center h-10">
          <div className="h-10 rounded-full bg-[#E5E7EB] flex items-center px-3 pr-5">
            <div className="w-8 h-8 rounded-full bg-white mr-3"></div>
            <span className="text-[#222] font-medium text-base">Review</span>
          </div>
        </div>

        <div className="flex items-center h-10">
          <div className="h-10 rounded-full bg-[#E5E7EB] flex items-center px-3 pr-6">
            <div className="w-8 h-8 rounded-full bg-white mr-3"></div>
            <span className="text-[#222] font-medium text-base">Submitted</span>
          </div>
        </div>

        <div className="flex items-center h-10">
          <div className="h-10 rounded-full bg-[#E5E7EB] flex items-center px-3 pr-5">
            <div className="w-8 h-8 rounded-full bg-white mr-3"></div>
            <span className="text-[#222] font-medium text-base">Feedback</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        {/* Document Editor */}
        <div className="bg-white rounded-3xl shadow-[0_10px_15px_-3px_rgba(229,231,235,0.5),0_4px_6px_-4px_rgba(229,231,235,0.5)] overflow-hidden">
          {/* Toolbar */}
          <div className="border-b border-[#E3E3E3] px-16 py-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#222] text-center flex-1">
              Data Privacy and Protection Policy v2.1
            </h2>
            <div className="flex items-center gap-4">
              <button className="p-1 hover:bg-gray-100 rounded">
                <Bold className="w-4 h-4 text-[#6D6D6D]" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Italic className="w-4 h-4 text-[#6D6D6D]" />
              </button>
              <div className="flex items-center gap-1">
                <div className="flex flex-col gap-0.5">
                  <div className="w-4 h-0.5 bg-[#6D6D6D]"></div>
                  <div className="w-4 h-0.5 bg-[#6D6D6D]"></div>
                  <div className="w-4 h-0.5 bg-[#6D6D6D]"></div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-0.5 bg-[#6D6D6D]"></div>
                <div className="flex flex-col gap-1">
                  <div className="text-xs font-bold text-[#6D6D6D]">1</div>
                  <div className="text-xs font-bold text-[#6D6D6D]">2</div>
                </div>
                <div className="w-4 h-0.5 bg-[#6D6D6D]"></div>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="w-4 h-0.5 bg-[#6D6D6D]"></div>
                <div className="w-1 h-0.5 bg-[#6D6D6D]"></div>
                <div className="w-4 h-0.5 bg-[#6D6D6D]"></div>
                <div className="w-1 h-0.5 bg-[#6D6D6D]"></div>
                <div className="w-4 h-0.5 bg-[#6D6D6D]"></div>
                <div className="w-1 h-0.5 bg-[#6D6D6D]"></div>
              </div>
              <span className="text-sm text-[#4B5563]">Submit</span>
            </div>
          </div>

          {/* Document Content */}
          <div className="px-16 py-8 min-h-[500px] max-h-[600px] overflow-y-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-[#222] mb-2">1. PURPOSE AND SCOPE</h3>
                <p className="text-xs text-[#6D6D6D] leading-5">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s,
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#222] mb-2">2. DATA COLLECTION PRINCIPLES</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-[#6D6D6D] leading-5">
                      <span className="font-bold">2.1 Lawful Basis</span>
                      <br />
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6D6D6D] leading-5">
                      <span className="font-bold">2.2 Data Minimization</span>
                      <br />
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6D6D6D] leading-5">
                      <span className="font-bold">2.3 Transparency</span>
                      <br />
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#222] mb-2">3. DATA RETENTION</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-[#6D6D6D] leading-5">
                      <span className="font-bold">3.1 Retention Periods</span>
                      <br />
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[#6D6D6D] leading-5">
                      <span className="font-bold">3.2 Deletion Procedures</span>
                      <br />
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assistant Sidebar */}
        <div className="bg-white rounded-3xl shadow-[0_10px_15px_-3px_rgba(229,231,235,0.5),0_4px_6px_-4px_rgba(229,231,235,0.5)] p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#8B5CF6] bg-clip-text text-transparent">
              AI Assistant
            </h3>
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <ChevronDown className="w-6 h-6 text-[#1F2937]" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Suggestions */}
            <div>
              <h4 className="text-base font-bold text-[#7F13EC] mb-2">Suggestions</h4>
              <p className="text-sm text-[#4B5563] leading-5">
                Consider adding a clause about dispute resolution.
              </p>
            </div>

            {/* Template Snippets */}
            <div>
              <h4 className="text-base font-bold text-[#7F13EC] mb-2">Template Snippets</h4>
              <div className="bg-[rgba(127,19,236,0.1)] rounded-2xl px-4 py-2">
                <span className="text-sm bg-gradient-to-r from-[#F59E0B] to-[#8B5CF6] bg-clip-text text-transparent">
                  Preamble Clause
                </span>
              </div>
            </div>

            {/* Clause Recommendations */}
            <div>
              <h4 className="text-base font-bold text-[#7F13EC] mb-2">Clause Recommendations</h4>
              <p className="text-sm text-[#4B5563] leading-5">
                "Force Majeure" clause seems relevant here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button className="h-12 px-6 rounded-2xl bg-[#E5E7EB] text-[#1F2937] font-bold hover:bg-[#D1D5DB] flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.76 9.13889V20.8056C20.76 21.3403 20.5696 21.798 20.1888 22.1788C19.808 22.5596 19.3503 22.75 18.8156 22.75H5.20445C4.66973 22.75 4.21198 22.5596 3.83119 22.1788C3.4504 21.798 3.26001 21.3403 3.26001 20.8056V7.19444C3.26001 6.65972 3.4504 6.20197 3.83119 5.82118C4.21198 5.44039 4.66973 5.25 5.20445 5.25H16.8711L20.76 9.13889ZM18.8156 9.96528L16.0447 7.19444H5.20445V20.8056H18.8156V9.96528ZM12.01 19.8333C12.8202 19.8333 13.5089 19.5498 14.076 18.9826C14.6431 18.4155 14.9267 17.7269 14.9267 16.9167C14.9267 16.1065 14.6431 15.4178 14.076 14.8507C13.5089 14.2836 12.8202 14 12.01 14C11.1998 14 10.5112 14.2836 9.94404 14.8507C9.37691 15.4178 9.09334 16.1065 9.09334 16.9167C9.09334 17.7269 9.37691 18.4155 9.94404 18.9826C10.5112 19.5498 11.1998 19.8333 12.01 19.8333ZM6.17668 12.0556H14.9267V8.16667H6.17668V12.0556Z" fill="#1F2937"/>
            </svg>
            Save Draft
          </Button>

          <Button className="h-12 px-6 rounded-2xl bg-[rgba(59,130,246,0.2)] text-[#2563EB] font-bold hover:bg-[rgba(59,130,246,0.3)] flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.0332 20.311C11.0332 19.9385 10.9077 19.57 10.6566 19.2056C10.4056 18.8411 10.1262 18.4605 9.81843 18.0637C9.51069 17.6668 9.2313 17.2538 8.98024 16.8246C8.72919 16.3954 8.60366 15.9378 8.60366 15.4519C8.60366 14.5125 8.9357 13.7107 9.59978 13.0467C10.2639 12.3826 11.0656 12.0505 12.005 12.0505C12.9444 12.0505 13.7462 12.3826 14.4103 13.0467C15.0743 13.7107 15.4064 14.5125 15.4064 15.4519C15.4064 15.9378 15.2809 16.3954 15.0298 16.8246C14.7788 17.2538 14.4994 17.6668 14.1916 18.0637C13.8839 18.4605 13.6045 18.8411 13.3534 19.2056C13.1024 19.57 12.9768 19.9385 12.9768 20.311H11.0332ZM11.0332 22.7405V21.2828H12.9768V22.7405H11.0332Z" fill="#2563EB"/>
            </svg>
            Simulate Impact
          </Button>

          <Button className="h-12 px-6 rounded-2xl bg-[rgba(34,197,94,0.2)] text-[#16A34A] font-bold hover:bg-[rgba(34,197,94,0.3)] flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.0377 17.8889V9.96533L8.50996 12.4931L7.14884 11.0834L12.01 6.22228L16.8711 11.0834L15.51 12.4931L12.9822 9.96533V17.8889H11.0377ZM6.17662 21.7778C5.6419 21.7778 5.18415 21.5874 4.80336 21.2067C4.42257 20.8259 4.23218 20.3681 4.23218 19.8334V16.9167H6.17662V19.8334H17.8433V16.9167H19.7877V19.8334C19.7877 20.3681 19.5973 20.8259 19.2166 21.2067C18.8358 21.5874 18.378 21.7778 17.8433 21.7778H6.17662Z" fill="#16A34A"/>
            </svg>
            Submit
          </Button>
        </div>

        <div className="text-right">
          <p className="text-sm italic bg-gradient-to-r from-[#F59E0B] to-[#8B5CF6] bg-clip-text text-transparent">
            Submissions are stored immutably on blockchain.
          </p>
          <p className="text-sm bg-gradient-to-r from-[#F59E0B] to-[#8B5CF6] bg-clip-text text-transparent mt-1">
            Last saved: 2 minutes ago
          </p>
        </div>
      </div>
    </div>
  );
}
