interface TaskItemProps {
  title: string;
  dueDate: string;
  priority: 'high' | 'medium';
}

function TaskItem({ title, dueDate, priority }: TaskItemProps) {
  const priorityColor = priority === 'high' ? '#D94A4A' : '#D98A3A';
  
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex-1">
        <h4 className="text-[#222] text-sm font-normal leading-5 mb-1">{title}</h4>
        <p className="text-[#999] text-xs">{dueDate}</p>
      </div>
      <div 
        className="w-3 h-3 rounded-full flex-shrink-0"
        style={{ backgroundColor: priorityColor }}
      ></div>
    </div>
  );
}

const tasks = [
  {
    title: "Review Alpha Inc. Acquisition Contract",
    dueDate: "Due in 3 days",
    priority: "high" as const,
  },
  {
    title: "Review Alpha Inc. Acquisition Contract",
    dueDate: "Due in 3 days",
    priority: "medium" as const,
  },
  {
    title: "Review Alpha Inc. Acquisition Contract",
    dueDate: "Due in 3 days",
    priority: "high" as const,
  },
];

export default function PendingLegalTasks() {
  return (
    <section className="bg-[rgba(243,243,248,0.75)] rounded-md p-6">
      <h2 className="text-lg font-bold text-black mb-4">Pending Legal Tasks</h2>
      
      <div className="bg-white rounded-md p-4 shadow-sm">
        <div className="divide-y divide-gray-100">
          {tasks.map((task, index) => (
            <TaskItem 
              key={index}
              title={task.title}
              dueDate={task.dueDate}
              priority={task.priority}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
