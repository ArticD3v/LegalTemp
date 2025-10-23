import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ContractViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  contractData?: {
    name: string;
    type: string;
    client: string;
    lastUpdate: string;
    description: string;
  };
}

export default function ContractViewModal({ isOpen, onClose, contractData }: ContractViewModalProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const defaultData = {
    name: "Contract A",
    type: "M&A",
    client: "Client X",
    lastUpdate: "02/02/2025",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  };

  const data = contractData || defaultData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-[984px] bg-white rounded-[10px] shadow-[0_0_10px_0_rgba(0,0,0,0.5)] mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[22px] right-[22px] w-[18px] h-[18px] text-black hover:opacity-70 transition-opacity"
        >
          <X className="w-full h-full" />
        </button>

        {/* Header */}
        <div className="pt-[15px] pb-[15px] border-b border-[#DFDFDF]">
          <h2 className="text-2xl font-bold text-[#5C5B5B] text-center" style={{ fontFamily: 'Cinzel, serif' }}>
            Contract View
          </h2>
        </div>

        {/* Content */}
        <div className="p-[30px] space-y-6">
          {/* Contract Details */}
          <div className="bg-white border border-[#E3E3E3] rounded-[20px] overflow-hidden">
            {/* Contract Name */}
            <div className="px-5 py-4 border-b border-[#DFDFDF] flex items-center justify-between">
              <span className="text-sm text-[#5C5B5B]" style={{ fontFamily: 'Cinzel, serif' }}>
                Contract Name
              </span>
              <span className="text-sm font-bold text-[#5C5B5B] text-right" style={{ fontFamily: 'Cinzel, serif' }}>
                {data.name}
              </span>
            </div>

            {/* Contract Type */}
            <div className="px-5 py-4 border-b border-[#DFDFDF] flex items-center justify-between">
              <span className="text-sm text-[#5C5B5B]" style={{ fontFamily: 'Cinzel, serif' }}>
                Contract Type
              </span>
              <span className="text-sm font-bold text-[#5C5B5B] text-right" style={{ fontFamily: 'Cinzel, serif' }}>
                {data.type}
              </span>
            </div>

            {/* Client Name */}
            <div className="px-5 py-4 border-b border-[#DFDFDF] flex items-center justify-between">
              <span className="text-sm text-[#5C5B5B]" style={{ fontFamily: 'Cinzel, serif' }}>
                Client Name
              </span>
              <span className="text-sm font-bold text-[#5C5B5B] text-right" style={{ fontFamily: 'Cinzel, serif' }}>
                {data.client}
              </span>
            </div>

            {/* Last Update */}
            <div className="px-5 py-4 flex items-center justify-between">
              <span className="text-sm text-[#5C5B5B]" style={{ fontFamily: 'Cinzel, serif' }}>
                Last Update
              </span>
              <span className="text-sm font-bold text-[#5C5B5B] text-right" style={{ fontFamily: 'Cinzel, serif' }}>
                {data.lastUpdate}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-[#F9F9F9] border border-[#E3E3E3] rounded-[10px] p-5">
            <p className="text-xs text-[#5C5B5B] leading-relaxed" style={{ fontFamily: 'Cinzel, serif' }}>
              {data.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => navigate("/contracts/edit")}
              className="h-[42px] px-5 rounded-full bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00] text-white font-bold text-sm hover:opacity-90 transition-opacity"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Edit
            </button>
            <button className="h-[42px] px-5 rounded-full border border-[#E3E3E3] bg-white text-black font-bold text-sm hover:bg-gray-50 transition-colors" style={{ fontFamily: 'Cinzel, serif' }}>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
