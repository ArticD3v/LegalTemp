import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import QuickOverview from "../components/QuickOverview";
import LegalKanbanBoard from "../components/LegalKanbanBoard";
import ComplianceHealthScore from "../components/ComplianceHealthScore";
import PendingLegalTasks from "../components/PendingLegalTasks";
import RealtimeFeed from "../components/RealtimeFeed";
import Gamification from "../components/Gamification";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#F9F9FB] flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 bg-[#FEFDF9] ml-[240px]">
        <div className="p-6 space-y-6">
          {/* Header */}
          <DashboardHeader />
          
          {/* Quick Overview */}
          <QuickOverview />
          
          {/* Legal Matters Kanban Board */}
          <LegalKanbanBoard />
          
          {/* Bottom Row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="xl:col-span-2 space-y-6">
              <ComplianceHealthScore />
              <PendingLegalTasks />
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <RealtimeFeed />
              <Gamification />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
