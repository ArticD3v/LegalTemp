import { useCallback, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Cloud, HardDrive, UploadCloud } from "lucide-react";

interface RaiseEscalationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RaiseEscalationDialog({
  open,
  onOpenChange,
}: RaiseEscalationDialogProps) {
  const [escalationTitle, setEscalationTitle] = useState("");
  const [issueTitle, setIssueTitle] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [escalationType, setEscalationType] = useState("");
  const [businessImpact, setBusinessImpact] = useState("");
  const [escalatedTo, setEscalatedTo] = useState("");
  const [description, setDescription] = useState("");
  const [evidenceFiles, setEvidenceFiles] = useState<File[]>([]);

  const pcFileInputRef = useRef<HTMLInputElement | null>(null);

  const maxWords = 500;
  const wordCount = description.trim().length
    ? description.trim().split(/\s+/).length
    : 0;

  const addFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    setEvidenceFiles((prev) => [...prev, ...Array.from(files)]);
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addFiles(e.dataTransfer.files);
  }, [addFiles]);

  const handleSaveEscalate = () => {
    console.log("Save & Escalate", {
      escalationTitle,
      issueTitle,
      referenceNumber,
      escalationType,
      businessImpact,
      escalatedTo,
      description,
      evidenceFiles: evidenceFiles.map((f) => ({ name: f.name, size: f.size })),
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] sm:max-w-[880px] max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] px-6 sm:px-8 py-4 rounded-t-lg">
          <DialogHeader className="p-0 space-y-0">
            <DialogTitle className="text-xl sm:text-2xl font-semibold text-[#1D1D1D]">
              Raise Escalation
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Body */}
        <div className="px-6 sm:px-8 py-6 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="escalation-title" className="text-sm font-medium text-[#1D1D1D]">
                Escalation Title
              </Label>
              <Input
                id="escalation-title"
                placeholder="Enter the Title"
                value={escalationTitle}
                onChange={(e) => setEscalationTitle(e.target.value)}
                className="h-[45px] border-[#716E6E] rounded-[10px] placeholder:text-[#8E68CD] text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issue-title" className="text-sm font-medium text-[#1D1D1D]">
                Issue Title
              </Label>
              <Input
                id="issue-title"
                placeholder="Enter the Title"
                value={issueTitle}
                onChange={(e) => setIssueTitle(e.target.value)}
                className="h-[45px] border-[#716E6E] rounded-[10px] placeholder:text-[#8E68CD] text-base"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="reference-number" className="text-sm font-medium text-[#1D1D1D]">
                Reference /Ticket Number:
              </Label>
              <Input
                id="reference-number"
                placeholder="Enter the Title"
                value={referenceNumber}
                onChange={(e) => setReferenceNumber(e.target.value)}
                className="h-[45px] border-[#716E6E] rounded-[10px] placeholder:text-[#8E68CD] text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="escalation-type" className="text-sm font-medium text-[#1D1D1D]">
                Escalation Type
              </Label>
              <Input
                id="escalation-type"
                placeholder="Enter the Title"
                value={escalationType}
                onChange={(e) => setEscalationType(e.target.value)}
                className="h-[45px] border-[#716E6E] rounded-[10px] placeholder:text-[#8E68CD] text-base"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="business-impact" className="text-sm font-medium text-[#1D1D1D]">
                Business Impact
              </Label>
              <Input
                id="business-impact"
                placeholder="Enter the Title"
                value={businessImpact}
                onChange={(e) => setBusinessImpact(e.target.value)}
                className="h-[45px] border-[#716E6E] rounded-[10px] placeholder:text-[#8E68CD] text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="escalated-to" className="text-sm font-medium text-[#1D1D1D]">
                Escalated To
              </Label>
              <Input
                id="escalated-to"
                placeholder="Enter the Title"
                value={escalatedTo}
                onChange={(e) => setEscalatedTo(e.target.value)}
                className="h-[45px] border-[#716E6E] rounded-[10px] placeholder:text-[#8E68CD] text-base"
              />
            </div>
          </div>

          {/* Issue Description with counter */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="description" className="text-sm font-medium text-[#1D1D1D]">
                Issue Description
              </Label>
              <span className="text-[12px] text-[#8D8C8E]">{wordCount}/{maxWords} word limit</span>
            </div>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[120px] border-[#716E6E] rounded-[10px] text-base resize-none"
            />
          </div>

          {/* Upload Evidence */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-[#1D1D1D]">Upload Evidence</Label>

            <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr] gap-4 border border-[#D9D9D9] rounded-[10px] p-3">
              {/* Dropzone */}
              <div
                onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onDrop={onDrop}
                className="flex flex-col items-center justify-center rounded-[10px] border-2 border-dashed border-[#716E6E] min-h-[90px] px-4 text-center"
              >
                <UploadCloud className="w-5 h-5 text-[#8E68CD] mb-1" />
                <p className="text-sm text-[#666]">Upload Evidence...</p>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => addFiles(e.target.files)}
                />
              </div>

              {/* Actions */}
              <div className="grid gap-3">
                <input ref={pcFileInputRef} type="file" multiple className="hidden" onChange={(e) => addFiles(e.target.files)} />

                <Button
                  type="button"
                  variant="outline"
                  className="h-[40px] w-full justify-start rounded-full border-[#D9D9D9] bg-white text-[#333]"
                  onClick={() => pcFileInputRef.current?.click()}
                >
                  <Cloud className="w-4 h-4 mr-2 text-[#6A6A6A]" />
                  Upload from Google Drive
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="h-[40px] w-full justify-start rounded-full border-[#D9D9D9] bg-white text-[#333]"
                  onClick={() => pcFileInputRef.current?.click()}
                >
                  <HardDrive className="w-4 h-4 mr-2 text-[#6A6A6A]" />
                  Upload from PC
                </Button>
              </div>
            </div>

            {evidenceFiles.length > 0 && (
              <div className="text-xs text-[#6D6D6D]">
                Selected: {evidenceFiles.map((f) => f.name).slice(0, 3).join(", ")}
                {evidenceFiles.length > 3 ? ` +${evidenceFiles.length - 3} more` : ""}
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="flex items-center justify-center pt-2">
            <Button
              onClick={handleSaveEscalate}
              className="h-[42px] px-6 rounded-full bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00] text-white font-semibold hover:opacity-90"
            >
              Save & Escalate
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
