import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

interface NewDisputeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function NewDisputeDialog({
  open,
  onOpenChange,
}: NewDisputeDialogProps) {
  const [disputeTitle, setDisputeTitle] = useState("");
  const [clientName, setClientName] = useState("");
  const [counterpartyName, setCounterpartyName] = useState("");
  const [disputeType, setDisputeType] = useState("");
  const [forum, setForum] = useState("");
  const [priority, setPriority] = useState("medium");
  const [description, setDescription] = useState("");

  const maxWords = 500;
  const wordCount = description.trim().split(/\s+/).filter(Boolean).length;

  const handleSaveDraft = () => {
    console.log("Saving draft...", {
      disputeTitle,
      clientName,
      counterpartyName,
      disputeType,
      forum,
      priority,
      description,
    });
    onOpenChange(false);
  };

  const handleValidate = () => {
    console.log("Validating...", {
      disputeTitle,
      clientName,
      counterpartyName,
      disputeType,
      forum,
      priority,
      description,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] sm:max-w-[740px] max-h-[90vh] overflow-y-auto p-0">
        <div className="sticky top-0 z-10 bg-white border-b border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] px-6 sm:px-8 py-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <DialogHeader className="p-0 space-y-0">
              <DialogTitle className="text-xl sm:text-2xl font-semibold text-[#1D1D1D]">
                Create a New Dispute
              </DialogTitle>
            </DialogHeader>

            <Button className="h-[40px] sm:h-[45px] px-3 sm:px-4 rounded-[15px] bg-gradient-to-r from-[#A635E4] to-[#F27024] text-white font-semibold hover:opacity-90 border border-[#716E6E] text-sm sm:text-base">
              <Upload className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Upload Evidence
            </Button>
          </div>
        </div>

        <div className="px-6 sm:px-8 py-6 space-y-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="dispute-title" className="text-sm font-medium text-[#1D1D1D]">
                Dispute Title<span className="text-[#EF1A1A]">*</span>
              </Label>
              <Input
                id="dispute-title"
                placeholder="Enter the Title"
                value={disputeTitle}
                onChange={(e) => setDisputeTitle(e.target.value)}
                className="h-[47px] border-[#716E6E] rounded-[10px] placeholder:text-[#8E68CD] text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="client-name" className="text-sm font-medium text-[#1D1D1D]">
                  Client Name<span className="text-[#EF1A1A]">*</span>
                </Label>
                <Input
                  id="client-name"
                  placeholder="Enter the Title"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="h-[47px] border-[#716E6E] rounded-[10px] placeholder:text-[#8E68CD] text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="counterparty-name" className="text-sm font-medium text-[#1D1D1D]">
                  Counterparty Name<span className="text-[#EF1A1A]">*</span>
                </Label>
                <Input
                  id="counterparty-name"
                  placeholder="Enter the Title"
                  value={counterpartyName}
                  onChange={(e) => setCounterpartyName(e.target.value)}
                  className="h-[47px] border-[#716E6E] rounded-[10px] placeholder:text-[#8E68CD] text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dispute-type" className="text-sm font-medium text-[#1D1D1D]">
                  Dispute Type<span className="text-[#EF1A1A]">*</span>
                </Label>
                <Select value={disputeType} onValueChange={setDisputeType}>
                  <SelectTrigger
                    id="dispute-type"
                    className="h-[47px] border-[#716E6E] rounded-[10px] text-base"
                  >
                    <SelectValue
                      placeholder={
                        <span className="text-[#8E68CD]">Enter the Title</span>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="breach">Breach of Contract</SelectItem>
                    <SelectItem value="payment">Payment Dispute</SelectItem>
                    <SelectItem value="quality">Quality Issue</SelectItem>
                    <SelectItem value="delivery">Delivery Dispute</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="forum" className="text-sm font-medium text-[#1D1D1D]">
                  Forum<span className="text-[#EF1A1A]">*</span>
                </Label>
                <Select value={forum} onValueChange={setForum}>
                  <SelectTrigger
                    id="forum"
                    className="h-[47px] border-[#716E6E] rounded-[10px] text-base"
                  >
                    <SelectValue
                      placeholder={
                        <span className="text-[#8E68CD]">Enter the Title</span>
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nclt">National Company Law Tribunal (NCLT)</SelectItem>
                    <SelectItem value="consumer">Consumer Disputes Redressal Commission</SelectItem>
                    <SelectItem value="arbitration">Arbitration Tribunal</SelectItem>
                    <SelectItem value="high-court">High Court</SelectItem>
                    <SelectItem value="lok-adalat">Lok Adalat (People's Court)</SelectItem>
                    <SelectItem value="supreme-court">Supreme Court of India</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-[#1D1D1D]">Priority</Label>
              <RadioGroup
                value={priority}
                onValueChange={setPriority}
                className="flex items-center gap-4 sm:gap-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="high"
                    id="high"
                    className="border-black data-[state=checked]:bg-[#9B2CFD] data-[state=checked]:border-[#9B2CFD]"
                  />
                  <Label htmlFor="high" className="text-sm font-medium text-[#1D1D1D] cursor-pointer">
                    High
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="medium"
                    id="medium"
                    className="border-black data-[state=checked]:bg-[#9B2CFD] data-[state=checked]:border-[#9B2CFD]"
                  />
                  <Label htmlFor="medium" className="text-sm font-medium text-[#1D1D1D] cursor-pointer">
                    Medium
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="low"
                    id="low"
                    className="border-black data-[state=checked]:bg-[#9B2CFD] data-[state=checked]:border-[#9B2CFD]"
                  />
                  <Label htmlFor="low" className="text-sm font-medium text-[#1D1D1D] cursor-pointer">
                    Low
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium text-[#1D1D1D]">
                Dispute Description
              </Label>
              <Textarea
                id="description"
                placeholder=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[122px] border-[#716E6E] rounded-[10px] text-base resize-none"
              />
              <p className="text-xs text-[#8D8C8E]">
                Enter between 0-{maxWords} words ({wordCount}/{maxWords})
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6 pt-4">
            <Button
              onClick={handleSaveDraft}
              className="h-[45px] px-6 sm:px-8 rounded-full bg-gradient-to-r from-[#A635E4] to-[#F27024] text-white font-semibold hover:opacity-90 text-sm sm:text-base"
            >
              Save Draft
            </Button>
            <Button
              onClick={handleValidate}
              variant="outline"
              className="h-[45px] px-6 sm:px-8 rounded-full border-[#716E6E] text-[#716E6E] font-semibold hover:bg-gray-50 text-sm sm:text-base"
            >
              Validate
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
