import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronUp } from "lucide-react";

interface AdvocacyProposalFormProps {
  onClose: () => void;
}

export default function AdvocacyProposalForm({ onClose }: AdvocacyProposalFormProps) {
  const [currentStep, setCurrentStep] = useState<"draft" | "review" | "submitted" | "feedback">("draft");

  return (
    <div className="flex-1 min-h-0 overflow-y-auto pb-8">
      <div className="max-w-[1664px] mx-auto">
        {/* Header */}
        <div className="mb-8 pt-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-lg font-bold text-[#222]">Create Advocacy Proposal  Draft</h1>
              <p className="text-xs text-[#6D6D6D] mt-1.5">Draft and refine your policy with AI assistance</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-[#6D6D6D]">Last saved: 2 minutes ago</p>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-10 flex items-center gap-6">
          {/* Draft - Active with Pill Badge */}
          <div className="h-10 rounded-full bg-gradient-to-r from-[#A030F2] to-[#FD7906] px-4 py-2 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white flex-shrink-0"></div>
            <span className="text-white font-semibold text-sm whitespace-nowrap">Draft</span>
          </div>

          {/* Line */}
          <div className="flex-1 h-1 bg-[#E5E7EB]"></div>

          {/* Review */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#E5E7EB] flex-shrink-0"></div>
            <span className="text-sm font-medium text-[#222] whitespace-nowrap">Review</span>
          </div>

          {/* Line */}
          <div className="flex-1 h-1 bg-[#E5E7EB]"></div>

          {/* Submitted */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#E5E7EB] flex-shrink-0"></div>
            <span className="text-sm font-medium text-[#222] whitespace-nowrap">Submitted</span>
          </div>

          {/* Line */}
          <div className="flex-1 h-1 bg-[#E5E7EB]"></div>

          {/* Feedback */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#E5E7EB] flex-shrink-0"></div>
            <span className="text-sm font-medium text-[#222] whitespace-nowrap">Feedback</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6 items-start">
          {/* Document Editor */}
          <div className="flex-1 bg-white rounded-3xl shadow-[0_10px_15px_-3px_rgba(229,231,235,0.5),0_4px_6px_-4px_rgba(229,231,235,0.5)]">
            {/* Toolbar */}
            <div className="border-b border-[#E3E3E3] px-16 py-2.5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#222]">
                Data Privacy and Protection Policy v2.1
              </h2>
              <div className="flex items-center gap-4">
                <button className="p-1 hover:bg-gray-100 rounded" aria-label="Bold">
                  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.2193 1H18.6566" stroke="#6D6D6D" strokeWidth="2"/>
                    <path d="M0 14.8328H12.4373" stroke="#6D6D6D" strokeWidth="2"/>
                    <path d="M4.66449 14.8326L13.9925 1" stroke="#6D6D6D" strokeWidth="2"/>
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded" aria-label="Italic">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H13.6432C15.5531 1 17.1013 2.54827 17.1013 4.45816C17.1013 6.36805 15.5531 7.91632 13.6432 7.91632H3.10933" stroke="#6D6D6D" strokeWidth="2"/>
                    <path d="M3.10933 7.91638H15.1978C17.1077 7.91638 18.656 9.46465 18.656 11.3745C18.656 13.2844 17.1077 14.8327 15.1978 14.8327H0" stroke="#6D6D6D" strokeWidth="2"/>
                    <rect x="3.10956" y="1" width="3.10933" height="13.8326" fill="#6D6D6D"/>
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded" aria-label="Align">
                  <div className="flex items-center gap-1">
                    <div className="flex flex-col gap-0.5">
                      <div className="w-4 h-0.5 bg-[#6D6D6D]"></div>
                      <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.03683 0V6.70673H2.12442V1.34593H2.07142L0 2.30871V1.0512L2.23925 0H4.03683Z" fill="#6D6D6D"/>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="w-4 h-0.5 bg-[#6D6D6D]"></div>
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0883333 6.79843V5.7767L3.30808 3.56623C3.58192 3.36974 3.81158 3.1929 3.99708 3.03571C4.18553 2.87852 4.32833 2.72461 4.4255 2.57397C4.52267 2.42115 4.57125 2.25632 4.57125 2.07948C4.57125 1.88299 4.51089 1.7138 4.39017 1.57189C4.26944 1.4278 4.10456 1.31755 3.8955 1.24114C3.68644 1.16254 3.44942 1.12325 3.18442 1.12325C2.90764 1.12325 2.66619 1.16473 2.46008 1.24769C2.25397 1.33065 2.09497 1.44963 1.98308 1.60464C1.87119 1.75964 1.81525 1.94412 1.81525 2.15807H0C0 1.71926 0.133972 1.33829 0.401917 1.01518C0.669861 0.692069 1.04528 0.442094 1.52817 0.265256C2.01106 0.0884188 2.56756 0 3.19767 0C3.84544 0 4.40931 0.0851441 4.88925 0.255432C5.37214 0.423537 5.74756 0.657138 6.0155 0.956233C6.28344 1.25533 6.41742 1.59809 6.41742 1.98451C6.41742 2.23776 6.34969 2.48774 6.21425 2.73444C6.08175 2.98113 5.84472 3.25512 5.50317 3.5564C5.16161 3.8555 4.68019 4.21463 4.05892 4.6338L2.73833 5.59331V5.63916H6.53667V6.79843H0.0883333Z" fill="#6D6D6D"/>
                      </svg>
                    </div>
                  </div>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded" aria-label="List">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-0.5 bg-[#6D6D6D]"></div>
                      <div className="w-1 h-0.5 bg-[#6D6D6D]"></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-0.5 bg-[#6D6D6D]"></div>
                      <div className="w-1 h-0.5 bg-[#6D6D6D]"></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-0.5 bg-[#6D6D6D]"></div>
                      <div className="w-1 h-0.5 bg-[#6D6D6D]"></div>
                    </div>
                  </div>
                </button>
                <span className="text-sm text-[#4B5563] ml-2">Submit</span>
              </div>
            </div>

            {/* Document Content */}
            <div className="px-24 py-8 min-h-[546px]">
              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-bold text-[#222] mb-3">1. PURPOSE AND SCOPE</h3>
                  <p className="text-xs text-[#6D6D6D] leading-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s,
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#222] mb-3">2. DATA COLLECTION PRINCIPLES</h3>
                  <div className="space-y-[15px]">
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
                  <h3 className="text-sm font-bold text-[#222] mb-3">3. DATA RETENTION</h3>
                  <div className="space-y-[15px]">
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
          <div className="w-[320px] flex-shrink-0 bg-white rounded-3xl shadow-[0_10px_15px_-3px_rgba(229,231,235,0.5),0_4px_6px_-4px_rgba(229,231,235,0.5)] p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#8B5CF6] bg-clip-text text-transparent leading-7">
                AI Assistant
              </h3>
              <button className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-full">
                <ChevronUp className="w-6 h-6 text-[#1F2937]" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-base font-bold text-[#7F13EC] mb-1 leading-6">Suggestions</h4>
                <p className="text-sm text-[#4B5563] leading-5">
                  Consider adding a clause about dispute resolution.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-[#7F13EC] mb-1 leading-6">Template Snippets</h4>
                <div className="bg-[rgba(127,19,236,0.1)] rounded-2xl px-2 py-2 inline-block">
                  <span className="text-sm bg-gradient-to-r from-[#F59E0B] to-[#8B5CF6] bg-clip-text text-transparent leading-5">
                    Preamble Clause
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-[#7F13EC] mb-1 leading-6">Clause Recommendations</h4>
                <p className="text-sm text-[#4B5563] leading-5">
                  "Force Majeure" clause seems relevant here.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button className="h-12 px-6 rounded-2xl bg-[#E5E7EB] text-[#1F2937] font-bold hover:bg-[#D1D5DB] flex items-center gap-2">
              <svg width="24" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.76 9.13889V20.8056C20.76 21.3403 20.5696 21.798 20.1888 22.1788C19.808 22.5596 19.3503 22.75 18.8156 22.75H5.20445C4.66973 22.75 4.21198 22.5596 3.83119 22.1788C3.4504 21.798 3.26001 21.3403 3.26001 20.8056V7.19444C3.26001 6.65972 3.4504 6.20197 3.83119 5.82118C4.21198 5.44039 4.66973 5.25 5.20445 5.25H16.8711L20.76 9.13889ZM18.8156 9.96528L16.0447 7.19444H5.20445V20.8056H18.8156V9.96528ZM12.01 19.8333C12.8202 19.8333 13.5089 19.5498 14.076 18.9826C14.6431 18.4155 14.9267 17.7269 14.9267 16.9167C14.9267 16.1065 14.6431 15.4178 14.076 14.8507C13.5089 14.2836 12.8202 14 12.01 14C11.1998 14 10.5112 14.2836 9.94404 14.8507C9.37691 15.4178 9.09334 16.1065 9.09334 16.9167C9.09334 17.7269 9.37691 18.4155 9.94404 18.9826C10.5112 19.5498 11.1998 19.8333 12.01 19.8333ZM6.17668 12.0556H14.9267V8.16667H6.17668V12.0556ZM5.20445 9.96528V20.8056V7.19444V9.96528Z" fill="#1F2937"/>
              </svg>
              Save Draft
            </Button>

            <Button className="h-12 px-6 rounded-2xl bg-[rgba(59,130,246,0.2)] text-[#2563EB] font-bold hover:bg-[rgba(59,130,246,0.3)] flex items-center gap-2">
              <svg width="24" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.34807 20.6511C4.684 19.8737 4.16975 19.0031 3.80531 18.0394C3.44088 17.0757 3.25867 16.0512 3.25867 14.966C3.25867 12.5365 4.10901 10.4713 5.80969 8.77066C7.51037 7.06998 9.57548 6.21964 12.005 6.21964C12.0374 6.21964 12.0698 6.21964 12.1022 6.21964C12.1346 6.21964 12.167 6.21964 12.1994 6.21964L10.6445 4.66473L12.005 3.30419L15.8923 7.19146L12.005 11.0787L10.6202 9.69389L12.1508 8.16328C12.1184 8.16328 12.0941 8.16328 12.0779 8.16328C12.0617 8.16328 12.0374 8.16328 12.005 8.16328C10.1262 8.16328 8.52268 8.82735 7.19453 10.1555C5.86638 11.4837 5.2023 13.0872 5.2023 14.966C5.2023 15.792 5.33593 16.5695 5.60318 17.2984C5.87043 18.0272 6.24701 18.6832 6.73291 19.2663L5.34807 20.6511ZM11.0332 20.311C11.0332 19.9385 10.9077 19.57 10.6566 19.2056C10.4056 18.8411 10.1262 18.4605 9.81843 18.0637C9.51069 17.6668 9.2313 17.2538 8.98024 16.8246C8.72919 16.3954 8.60366 15.9378 8.60366 15.4519C8.60366 14.5125 8.9357 13.7107 9.59978 13.0467C10.2639 12.3826 11.0656 12.0505 12.005 12.0505C12.9444 12.0505 13.7462 12.3826 14.4103 13.0467C15.0743 13.7107 15.4064 14.5125 15.4064 15.4519C15.4064 15.9378 15.2809 16.3954 15.0298 16.8246C14.7788 17.2538 14.4994 17.6668 14.1916 18.0637C13.8839 18.4605 13.6045 18.8411 13.3534 19.2056C13.1024 19.57 12.9768 19.9385 12.9768 20.311H11.0332ZM11.0332 22.7405V21.2828H12.9768V22.7405H11.0332ZM18.662 20.6511L17.2771 19.2663C17.763 18.6832 18.1396 18.0272 18.4069 17.2984C18.6741 16.5695 18.8077 15.792 18.8077 14.966C18.8077 13.897 18.585 12.9049 18.1396 11.9898C17.6942 11.0747 17.0828 10.3094 16.3053 9.69389L17.6902 8.30905C18.6296 9.1189 19.3746 10.0948 19.9253 11.2366C20.476 12.3785 20.7514 13.6217 20.7514 14.966C20.7514 16.0512 20.5692 17.0757 20.2047 18.0394C19.8403 19.0031 19.326 19.8737 18.662 20.6511Z" fill="#2563EB"/>
              </svg>
              Simulate Impact
            </Button>

            <Button className="h-12 px-6 rounded-2xl bg-[rgba(34,197,94,0.2)] text-[#16A34A] font-bold hover:bg-[rgba(34,197,94,0.3)] flex items-center gap-2">
              <svg width="24" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0377 17.8889V9.96533L8.50996 12.4931L7.14884 11.0834L12.01 6.22228L16.8711 11.0834L15.51 12.4931L12.9822 9.96533V17.8889H11.0377ZM6.17662 21.7778C5.6419 21.7778 5.18415 21.5874 4.80336 21.2067C4.42257 20.8259 4.23218 20.3681 4.23218 19.8334V16.9167H6.17662V19.8334H17.8433V16.9167H19.7877V19.8334C19.7877 20.3681 19.5973 20.8259 19.2166 21.2067C18.8358 21.5874 18.378 21.7778 17.8433 21.7778H6.17662Z" fill="#16A34A"/>
              </svg>
              Submit
            </Button>
          </div>

          <div className="text-right">
            <p className="text-sm italic bg-gradient-to-r from-[#F59E0B] to-[#8B5CF6] bg-clip-text text-transparent leading-5">
              Submissions are stored immutably on blockchain.
            </p>
            <p className="text-sm bg-gradient-to-r from-[#F59E0B] to-[#8B5CF6] bg-clip-text text-transparent mt-1 leading-5">
              Last saved: 2 minutes ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
