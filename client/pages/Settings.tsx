import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Bell, Lock, User, Shield, Database, LogOut, ChevronRight, Moon, Eye } from "lucide-react";

const settingsSections = [
  {
    id: "account",
    title: "Account Settings",
    icon: User,
    description: "Manage your personal information and account",
    settings: [
      { label: "Email Address", value: "anya.sharma@lokachakra.com", editable: true },
      { label: "Full Name", value: "Anya Sharma", editable: true },
      { label: "Phone Number", value: "+91 98765 43210", editable: true },
      { label: "Department", value: "Legal Compliance", editable: false },
    ],
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    icon: Shield,
    description: "Control your privacy settings and security options",
    settings: [
      { label: "Two-Factor Authentication", value: "Enabled", editable: false },
      { label: "Login Activity", value: "Last login: 2 minutes ago", editable: false },
      { label: "Session Timeout", value: "30 minutes", editable: true },
      { label: "Password", value: "••••••••••", editable: false },
    ],
  },
  {
    id: "notifications",
    title: "Notifications",
    icon: Bell,
    description: "Manage your notification preferences",
    settings: [
      { label: "Email Notifications", value: "Enabled", editable: false },
      { label: "Policy Updates", value: "Enabled", editable: false },
      { label: "Dispute Alerts", value: "Enabled", editable: false },
      { label: "Training Reminders", value: "Disabled", editable: false },
    ],
  },
  {
    id: "display",
    title: "Display & Appearance",
    icon: Moon,
    description: "Customize how the application looks",
    settings: [
      { label: "Theme", value: "Light Mode", editable: true },
      { label: "Language", value: "English", editable: true },
      { label: "Font Size", value: "Medium", editable: true },
      { label: "Sidebar Position", value: "Left", editable: false },
    ],
  },
  {
    id: "data",
    title: "Data Management",
    icon: Database,
    description: "Manage your data and export options",
    settings: [
      { label: "Data Export", value: "Available", editable: false },
      { label: "Backup Status", value: "Last backup: Today", editable: false },
      { label: "Storage Used", value: "2.5 GB of 10 GB", editable: false },
      { label: "Auto Backup", value: "Enabled", editable: false },
    ],
  },
];

const tabs = [
  { id: "account", label: "Account" },
  { id: "security", label: "Security" },
  { id: "notifications", label: "Notifications" },
  { id: "appearance", label: "Appearance" },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState("account");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
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

        {activeTab === "account" && (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px mb-6">
              <h2 className="text-lg font-bold text-[#222] mb-2">Account Settings</h2>
              <p className="text-sm text-[#666] mb-6">Manage your personal information and account preferences</p>

              <div className="space-y-3">
                {settingsSections[0].settings.map((setting, idx) => (
                  <div key={idx} className="border border-[#E3E3E3] rounded-[10px] p-4 flex items-center justify-between hover:bg-[#FAFAFA] transition-colors">
                    <div>
                      <p className="text-sm font-semibold text-[#222]">{setting.label}</p>
                      <p className="text-xs text-[#666] mt-1">{setting.value}</p>
                    </div>
                    {setting.editable && (
                      <Button
                        variant="outline"
                        className="h-[36px] px-4 rounded-full border-[#E3E3E3] bg-white"
                        onClick={() => setEditingField(setting.label)}
                      >
                        Edit
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px mb-6">
              <h2 className="text-lg font-bold text-[#222] mb-2">Privacy & Security</h2>
              <p className="text-sm text-[#666] mb-6">Control your privacy settings and manage your account security</p>

              <div className="space-y-3 mb-6">
                {settingsSections[1].settings.map((setting, idx) => (
                  <div key={idx} className="border border-[#E3E3E3] rounded-[10px] p-4 flex items-center justify-between hover:bg-[#FAFAFA] transition-colors">
                    <div>
                      <p className="text-sm font-semibold text-[#222]">{setting.label}</p>
                      <p className="text-xs text-[#666] mt-1">{setting.value}</p>
                    </div>
                    {setting.label === "Password" && (
                      <Button
                        variant="outline"
                        className="h-[36px] px-4 rounded-full border-[#E3E3E3] bg-white"
                      >
                        Change
                      </Button>
                    )}
                    {setting.label === "Session Timeout" && (
                      <Button
                        variant="outline"
                        className="h-[36px] px-4 rounded-full border-[#E3E3E3] bg-white"
                      >
                        Edit
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E3E3E3] pt-6">
                <h3 className="text-base font-bold text-[#222] mb-4">Connected Devices</h3>
                <div className="border border-[#E3E3E3] rounded-[10px] p-4 mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-[#222]">Chrome on Windows</p>
                      <p className="text-xs text-[#666]">Last accessed: 2 minutes ago</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">Active</span>
                  </div>
                </div>
                <div className="border border-[#E3E3E3] rounded-[10px] p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-sm font-semibold text-[#222]">Safari on iPhone</p>
                      <p className="text-xs text-[#666]">Last accessed: 1 hour ago</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold">Idle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px mb-6">
              <h2 className="text-lg font-bold text-[#222] mb-2">Notification Preferences</h2>
              <p className="text-sm text-[#666] mb-6">Manage how and when you receive notifications</p>

              <div className="space-y-4">
                {[
                  { title: "Policy Updates", description: "Get notified when policies are updated or reviewed", enabled: true },
                  { title: "Dispute Alerts", description: "Receive alerts about new disputes and escalations", enabled: true },
                  { title: "Contract Expiry", description: "Get reminders before contract expiry dates", enabled: true },
                  { title: "Training Assignments", description: "Notifications for new training assignments", enabled: false },
                  { title: "Compliance Warnings", description: "Critical compliance violation alerts", enabled: true },
                  { title: "Daily Digest", description: "Receive a daily summary of activities", enabled: false },
                ].map((notification, idx) => (
                  <div key={idx} className="border border-[#E3E3E3] rounded-[10px] p-4 flex items-center justify-between hover:bg-[#FAFAFA] transition-colors">
                    <div>
                      <p className="text-sm font-semibold text-[#222]">{notification.title}</p>
                      <p className="text-xs text-[#666] mt-1">{notification.description}</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        defaultChecked={notification.enabled}
                        className="w-5 h-5 rounded cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "appearance" && (
          <div className="flex-1 min-h-0 overflow-y-auto">
            <div className="bg-white rounded-[0px_20px_20px_20px] border border-[#E3E3E3] shadow-[0_4px_20px_0_#F5F6F9] p-6 -mt-px mb-6">
              <h2 className="text-lg font-bold text-[#222] mb-2">Appearance & Display</h2>
              <p className="text-sm text-[#666] mb-6">Customize how the application looks and feels</p>

              <div className="space-y-4">
                <div className="border border-[#E3E3E3] rounded-[10px] p-4">
                  <p className="text-sm font-semibold text-[#222] mb-3">Theme</p>
                  <div className="flex gap-3">
                    <button className="flex-1 p-3 rounded-lg border-2 border-[#9B2CFD] bg-white text-sm font-semibold text-[#222]">
                      Light Mode
                    </button>
                    <button className="flex-1 p-3 rounded-lg border border-[#E3E3E3] bg-[#2B2B2B] text-sm font-semibold text-white">
                      Dark Mode
                    </button>
                  </div>
                </div>

                <div className="border border-[#E3E3E3] rounded-[10px] p-4">
                  <p className="text-sm font-semibold text-[#222] mb-3">Language</p>
                  <select className="w-full px-4 py-2 border border-[#D9D9D9] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>

                <div className="border border-[#E3E3E3] rounded-[10px] p-4">
                  <p className="text-sm font-semibold text-[#222] mb-3">Font Size</p>
                  <div className="flex gap-3">
                    <button className="flex-1 p-2 rounded-lg border border-[#E3E3E3] bg-white text-xs font-semibold text-[#222] hover:bg-gray-50">
                      Small
                    </button>
                    <button className="flex-1 p-2 rounded-lg border-2 border-[#9B2CFD] bg-white text-sm font-semibold text-[#222]">
                      Medium
                    </button>
                    <button className="flex-1 p-2 rounded-lg border border-[#E3E3E3] bg-white text-base font-semibold text-[#222] hover:bg-gray-50">
                      Large
                    </button>
                  </div>
                </div>

                <div className="border border-[#E3E3E3] rounded-[10px] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#222]">Compact Layout</p>
                      <p className="text-xs text-[#666] mt-1">Reduce spacing for a more compact view</p>
                    </div>
                    <input type="checkbox" className="w-5 h-5 rounded cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between gap-3 mt-6 mb-6">
          <Button variant="outline" className="h-[40px] px-6 rounded-lg border-[#E3E3E3] bg-white">
            <Eye className="w-4 h-4 mr-2" />
            Preview Changes
          </Button>
          <div className="flex gap-3">
            <Button variant="outline" className="h-[40px] px-6 rounded-lg border-[#E3E3E3] bg-white">
              Cancel
            </Button>
            <Button className="h-[40px] px-6 rounded-lg bg-gradient-to-r from-[#9B2CFD] to-[#FF7A00] text-white font-bold hover:opacity-90">
              Save Changes
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
