"use client";
import React, { useState } from "react";
import {
  Inbox,
  Star,
  Archive,
  Tag,
  Clock,
  Lock,
  ChevronDown,
  Search,
  Settings,
  MoreHorizontal,
  CheckSquare,
  ChevronRight,
  AlertCircle,
  ArrowLeft,
  Plus,
  Share2,
  Trash2,
  Paperclip,
  Send,
  Edit2,
  Brain,
  CheckCircle,
  ClipboardList,
  Flame,
  MailCheck,
  AtSign,
  Info, // Newly imported for editing tasks
} from "lucide-react";
import Script from "next/script";
import {
  TaskItemProps,
  EmailDetailThreadedProps,
  EmailPreviewProps,
  SidebarItemProps,
  TasksPreviewProps,
} from "./types";

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onUpdate,
  onDelete,
  onExport,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task);

  const handleSave = () => {
    onUpdate(editValue);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between group bg-white dark:bg-black/40 p-3 rounded-lg">
      <div className="flex items-center gap-3">
        <CheckSquare className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5" />
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="text-sm border rounded px-1 py-0.5"
          />
        ) : (
          <span className="text-sm">{task}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        {isEditing ? (
          <button onClick={handleSave} className="text-xs text-green-600">
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-xs text-blue-600 hover:text-blue-700"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        )}
        <button
          onClick={onDelete}
          className="text-xs text-red-600 hover:text-red-700"
        >
          <Trash2 className="w-4 h-4" />
        </button>
        <button
          onClick={onExport}
          className="text-xs text-blue-600 hover:text-blue-700"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

interface EditableTasksProps {
  initialTasks: string[];
}

const EditableTasks: React.FC<EditableTasksProps> = ({ initialTasks }) => {
  const [tasks, setTasks] = useState<string[]>(initialTasks);
  const [newTask, setNewTask] = useState("");

  const handleUpdateTask = (index: number, newTaskValue: string) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newTaskValue;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleExportTask = (index: number) => {
    // Simulate exporting the task
    console.log("Exporting task:", tasks[index]);
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  return (
    <div className="space-y-2">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onUpdate={(newTaskValue) => handleUpdateTask(index, newTaskValue)}
          onDelete={() => handleDeleteTask(index)}
          onExport={() => handleExportTask(index)}
        />
      ))}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task..."
          className="flex-1 text-sm border rounded px-2 py-1"
        />
        <button
          onClick={handleAddTask}
          className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};

// Urgency badge (used in both email preview and detail views)
const UrgencyLevel: React.FC<{ level: number }> = ({ level }) => {
  const getUrgencyColor = (level: number) => {
    const colors: { [key: number]: string } = {
      5: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400",
      4: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
      3: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400",
      2: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
      1: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
    };
    return colors[level];
  };

  return (
    <div
      className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs ${getUrgencyColor(
        level
      )}`}
    >
      <AlertCircle className="w-3 h-3" />
      <span>Urgency Level {level}</span>
    </div>
  );
};

const TasksPreview: React.FC<TasksPreviewProps> = ({ tasks, isExpanded }) => (
  <div className={`mt-2 space-y-1 ${isExpanded ? "" : "hidden"}`}>
    {tasks.map((task: string, index: number) => (
      <div key={index} className="flex items-start gap-2 text-xs">
        <CheckSquare className="w-3 h-3 text-blue-600 dark:text-blue-400 mt-0.5" />
        <span className="text-black/60 dark:text-white/60">{task}</span>
      </div>
    ))}
  </div>
);

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  count,
  isActive = false,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors duration-200 ${
      isActive
        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
        : "hover:bg-black/5 dark:hover:bg-white/5 text-black/70 dark:text-white/70"
    }`}
  >
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </div>
    {count && (
      <span className="text-xs bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full">
        {count}
      </span>
    )}
  </div>
);

// The clickable email preview item.
const EmailPreview: React.FC<EmailPreviewProps> = ({
  sender,
  subject,
  preview,
  time,
  isUnread = false,
  aiOutput,
  showTasks = false,
  onClick,
}) => (
  <div
    onClick={onClick}
    className="flex gap-4 p-4 cursor-pointer hover:bg-black/[0.02] dark:hover:bg-white/[0.02] border-b border-black/5 dark:border-white/5 transition-colors duration-200"
  >
    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
        {sender[0]!.toUpperCase()}
      </span>
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between gap-4 mb-2">
        <div className="flex items-center gap-2">
          <span className={`text-sm ${isUnread ? "font-medium" : ""}`}>
            {sender}
          </span>
          <span className="text-xs text-black/40 dark:text-white/40">
            {time}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-black/20 dark:text-white/20 hover:text-yellow-400 transition-colors duration-200" />
          <MoreHorizontal className="w-4 h-4 text-black/20 dark:text-white/20" />
        </div>
      </div>
      <h4 className={`text-sm mb-2 truncate ${isUnread ? "font-medium" : ""}`}>
        {subject}
      </h4>
      <p className="text-xs text-black/60 dark:text-white/60 line-clamp-1 mb-3">
        {preview}
      </p>

      {/* AI Analysis Section */}
      <div className="flex items-center gap-3">
        <UrgencyLevel level={aiOutput["Urgency Level"]} />
        <div className="flex items-center gap-1.5 text-xs text-black/40 dark:text-white/40">
          <CheckSquare className="w-3 h-3" />
          <span>{aiOutput["Tasks Extracted"].length} tasks</span>
          {aiOutput["Tasks Extracted"].length > 0 && (
            <ChevronRight className="w-3 h-3" />
          )}
        </div>
      </div>

      {/* Expanded Tasks View (non-editable) */}
      <TasksPreview
        tasks={aiOutput["Tasks Extracted"]}
        isExpanded={showTasks}
      />
    </div>
  </div>
);

// The detail view for a single email (non-threaded)
const EmailDetail: React.FC<{
  email: EmailPreviewProps;
  onBack: () => void;
}> = ({ email, onBack }) => {
  // Create a local copy of tasks from the AI output for editing
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-black/5 dark:border-white/5">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to inbox</span>
          </button>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
              <Archive className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
              <Clock className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
            <span className="text-base text-blue-600 dark:text-blue-400 font-medium">
              {email.sender[0]!.toUpperCase()}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1">{email.subject}</h2>
                <div className="flex items-center gap-3 text-sm text-black/60 dark:text-white/60">
                  <span className="font-medium text-black dark:text-white">
                    {email.sender}
                  </span>
                  <span>to me</span>
                  <span>{email.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-black/20 dark:text-white/20 hover:text-yellow-400 transition-colors duration-200" />
                <Share2 className="w-5 h-5 text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-colors duration-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Content */}
      <div className="flex-1 p-6">
        <p className="text-sm leading-relaxed text-black/80 dark:text-white/80">
          {email.preview}
        </p>
      </div>

      {/* AI Analysis Panel with Editable Tasks */}
      <div className="border-t border-black/5 dark:border-white/5">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium">AI Analysis</h3>
            <div className="flex items-center gap-2">
              <UrgencyLevel level={email.aiOutput["Urgency Level"]} />
            </div>
          </div>

          {/* Tasks Section */}
          <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h4 className="text-sm font-medium">Extracted Tasks</h4>
              </div>
              {/* The "Add Task" button is now built into EditableTasks */}
            </div>

            <EditableTasks initialTasks={email.aiOutput["Tasks Extracted"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

// The threaded email detail view.
const EmailDetailThreaded: React.FC<EmailDetailThreadedProps> = ({
  thread,
  onBack,
}) => {
  // Maintain state to track which message’s tasks are expanded.
  const [expandedMessageIds, setExpandedMessageIds] = useState<string[]>([]);

  const toggleExpansion = (id: string) => {
    setExpandedMessageIds((prev) =>
      prev.includes(id) ? prev.filter((msgId) => msgId !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <div className="px-4 py-3 bg-white dark:bg-black border-b border-black/5 dark:border-white/5">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
              <Archive className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
              <Clock className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
              <Star className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-1">{thread.subject}</h2>
        <div className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60">
          <span>{thread.messages.length} messages</span>
          <span>·</span>
          <UrgencyLevel level={thread.aiOutput["Urgency Level"]} />
        </div>
      </div>

      {/* Thread Content */}
      <div className="flex-1 overflow-y-auto overflow-hidden p-4 space-y-6">
        {thread.messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isOutbound ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] ${
                message.isOutbound ? "order-2" : "order-1"
              }`}
            >
              {/* Message Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  {!message.isOutbound && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {message.sender[0]!.toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">
                      {message.isOutbound ? "You" : message.sender}
                    </span>
                    <span className="text-xs text-black/40 dark:text-white/40">
                      {message.timestamp}
                    </span>
                  </div>
                </div>

                {/* For inbound messages with AI output, show the urgency and a toggle */}
                {!message.isOutbound && message.aiOutput && (
                  <div className="flex items-center gap-2">
                    <UrgencyLevel level={message.aiOutput["Urgency Level"]} />
                    <button onClick={() => toggleExpansion(message.id)}>
                      {expandedMessageIds.includes(message.id) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Message Content */}
              <div
                className={`rounded-lg p-4 ${
                  message.isOutbound
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-black/40"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>

              {/* Collapsible Editable Tasks for this message */}
              {!message.isOutbound &&
                message.aiOutput &&
                expandedMessageIds.includes(message.id) && (
                  <div className="mt-2">
                    <EditableTasks
                      initialTasks={message.aiOutput["Tasks Extracted"]}
                    />
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>

      {/* Compose Area */}
      <div className="p-4 bg-white dark:bg-black border-t border-black/5 dark:border-white/5">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60">
                <span>To: {thread.messages[0]!.sender}</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <button className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white">
                Cc/Bcc
              </button>
            </div>
            <textarea
              placeholder="Type your reply..."
              className="w-full p-3 text-sm bg-black/[0.02] dark:bg-white/[0.02] rounded-lg placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20 min-h-[100px] resize-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors">
              <Paperclip className="w-4 h-4" />
            </button>
            <button className="text-sm text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white">
              ⌘K for commands
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors">
            <Send className="w-4 h-4" />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── HERO SCREEN ──────────────────────────────────────────────

const HeroScreen: React.FC = () => {
  // State for the currently selected folder and email.
  const [selectedFolder, setSelectedFolder] = useState("Inbox");
  // The selected email can be either a simple email (EmailPreviewProps) or include a thread.
  const [selectedEmail, setSelectedEmail] = useState<EmailPreviewProps | null>(
    null
  );

  // Sample emails (with one email containing a thread)
  const sampleEmails: EmailPreviewProps[] = [
    {
      sender: "Engineering Team",
      subject: "Build Pipeline Optimization Request",
      preview:
        "We need to improve our build times. The current pipeline is taking too long and it's affecting our deployment frequency...",
      time: "10:30 AM",
      isUnread: true,
      aiOutput: {
        "Urgency Level": 4,
        "Tasks Extracted": [
          "Look into running the test suite in parallel",
          "Target 50% reduction in build time",
          "Schedule follow-up meeting with engineering team",
        ],
      },
      showTasks: true,
      folder: "Inbox",
      // Include a thread property to indicate multiple messages.
      thread: {
        id: "1",
        subject: "Build Pipeline Optimization Request",
        aiOutput: {
          "Urgency Level": 4,
          "Tasks Extracted": [
            "Look into running the test suite in parallel",
            "Target 50% reduction in build time",
            "Schedule follow-up meeting with engineering team",
          ],
        },
        messages: [
          {
            id: "1",
            sender: "Engineering Team",
            senderEmail: "engineering@company.com",
            recipients: ["you@company.com"],
            timestamp: "10:30 AM",
            content:
              "We need to improve our build times. The current pipeline is taking too long and it's affecting our deployment frequency. Can you help investigate options for parallel testing?\n\nSpecifically:\n- Current build time: 45 minutes\n- Target build time: 20-25 minutes\n- The integration tests are the bottleneck.",
            aiOutput: {
              "Urgency Level": 4,
              "Tasks Extracted": [
                "Investigate parallel test execution",
                "Identify slow test suites",
              ],
            },
          },
          {
            id: "2",
            sender: "You",
            senderEmail: "you@company.com",
            recipients: ["engineering@company.com"],
            timestamp: "11:15 AM",
            content:
              "I'll take a look at the pipeline configuration. Have you already identified which test suites are taking the longest?",
            isOutbound: true,
          },
          {
            id: "3",
            sender: "Engineering Team",
            senderEmail: "engineering@company.com",
            recipients: ["you@company.com"],
            timestamp: "11:45 AM",
            content:
              "Yes, the integration tests are the main bottleneck. They are running sequentially and take about 25 minutes.",
            aiOutput: {
              "Urgency Level": 3,
              "Tasks Extracted": ["Review integration test sequence"],
            },
          },
        ],
      },
    },
    {
      sender: "Product Manager",
      subject: "Q2 Feature Planning",
      preview: "Here's the overview of our Q2 roadmap and key deliverables...",
      time: "9:15 AM",
      isUnread: true,
      aiOutput: {
        "Urgency Level": 3,
        "Tasks Extracted": [
          "Review Q2 roadmap document",
          "Provide feedback on timeline",
        ],
      },
      folder: "Inbox",
    },
    {
      sender: "Design Team",
      subject: "New Icon Set Ready for Review",
      preview: "The updated icon set is ready for your review. Please check...",
      time: "Yesterday",
      aiOutput: {
        "Urgency Level": 2,
        "Tasks Extracted": [
          "Review new icon designs",
          "Approve final selections",
        ],
      },
      folder: "Starred",
    },
  ];

  // Filter emails based on the selected folder.
  const filteredEmails = sampleEmails.filter(
    (email) => email.folder === selectedFolder
  );

  // Helper to change folders and close any open email.
  const handleFolderClick = (folder: string) => {
    setSelectedFolder(folder);
    setSelectedEmail(null);
  };

  return (
    <>
      <Script
        src="https://app.youform.com/widgets/widget.js"
        strategy="beforeInteractive" // other options: "beforeInteractive", "lazyOnload"
      />{" "}
      <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col overflow-hidden">
        {/* Title Bar */}
        <div
          className="h-[35px] flex-shrink-0"
          style={{ WebkitAppRegion: "drag" } as React.CSSProperties}
        />
        {/* Main Content */}
        <div className="flex flex-col-reverse md:flex-row flex-1">
          {/* Left Column - Marketing Content */}
          <div className="w-[35%] p-8 flex flex-col justify-between border-r border-black/5 dark:border-white/5">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-sm text-blue-700 dark:text-blue-300">
                <Brain className="w-4 h-4" />
                <span>AI-Powered Email Intelligence</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  Transform Your Inbox into Actionable Tasks
                </h1>
                <p className="text-base md:text-lg text-black/70 dark:text-white/70">
                  Ithena’s AI scans your incoming emails, analyzes the urgency,
                  and extracts tasks for you to export your favorite task
                  manager.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ClipboardList className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>
                    Stop missing hidden tasks buried in email threads—stay
                    organized effortlessly
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Flame className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  <span>
                    Know at a glance which tasks truly need your attention first
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span>
                    100% private—all processing happens on your device
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span>
                    One-click export to Todoist, Asana, and other task managers
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <AtSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span>
                    Ithena plugs into your existing Gmail account(s). No
                    complicated setup required.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <a
                href="https://app.youform.com/forms/thxq4irm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
              >
                <MailCheck className="w-5 h-5" />
                <span>Register for Beta</span>
              </a>
              <p className="mt-3 text-xs text-black/40 dark:text-white/40">
                No credit card required. Limited beta slots available.
              </p>
            </div>
          </div>

          {/* Right Column - App Preview */}
          <div className="flex-1 p-8">
            <div className="mb-4 text-sm text-blue-500 dark:text-blue-400 flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span>
                This is an interactive preview. Feel free to click emails and
                try out the features!
              </span>
            </div>
            <div className="h-full rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-black/40 overflow-hidden flex">
              {/* Sidebar */}
              <div className="w-64 border-r border-black/5 dark:border-white/5 flex flex-col">
                {/* Account Info */}
                <div className="p-4 border-b border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                        J
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">
                        John Doe
                      </div>
                      <div className="text-xs text-black/40 dark:text-white/40 truncate">
                        john.doe@gmail.com
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-black/40 dark:text-white/40" />
                  </div>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40" />
                    <input
                      type="text"
                      placeholder="Search emails"
                      className="w-full pl-10 pr-4 py-2 text-sm bg-black/[0.02] dark:bg-white/[0.02] rounded-lg placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex-1 p-3 space-y-1 overflow-y-auto">
                  <SidebarItem
                    icon={Inbox}
                    label="Inbox"
                    count="23"
                    isActive={selectedFolder === "Inbox"}
                    onClick={() => handleFolderClick("Inbox")}
                  />
                  <SidebarItem
                    icon={Star}
                    label="Starred"
                    isActive={selectedFolder === "Starred"}
                    onClick={() => handleFolderClick("Starred")}
                  />
                  <SidebarItem
                    icon={Clock}
                    label="Snoozed"
                    isActive={selectedFolder === "Snoozed"}
                    onClick={() => handleFolderClick("Snoozed")}
                  />
                  <SidebarItem
                    icon={Archive}
                    label="Archive"
                    isActive={selectedFolder === "Archive"}
                    onClick={() => handleFolderClick("Archive")}
                  />

                  <div className="my-4 px-3">
                    <div className="h-px bg-black/5 dark:bg-white/5" />
                  </div>

                  <div className="flex items-center justify-between px-3 py-2 text-sm text-black/40 dark:text-white/40">
                    <span>Labels</span>
                    <span className="text-xs">Edit</span>
                  </div>

                  <SidebarItem
                    icon={Tag}
                    label="Important"
                    onClick={() => handleFolderClick("Important")}
                    isActive={selectedFolder === "Important"}
                  />
                  <SidebarItem
                    icon={Tag}
                    label="Work"
                    onClick={() => handleFolderClick("Work")}
                    isActive={selectedFolder === "Work"}
                  />
                  <SidebarItem
                    icon={Tag}
                    label="Personal"
                    onClick={() => handleFolderClick("Personal")}
                    isActive={selectedFolder === "Personal"}
                  />
                </div>

                {/* Settings */}
                <div className="p-3 border-t border-black/5 dark:border-white/5">
                  <SidebarItem icon={Settings} label="Settings" />
                </div>
              </div>

              {/* Email List or Detail View */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 border-b border-black/5 dark:border-white/5"></div>
                {selectedEmail ? (
                  // If the selected email has a thread, show the threaded detail view.
                  selectedEmail.thread ? (
                    <EmailDetailThreaded
                      thread={selectedEmail.thread}
                      onBack={() => setSelectedEmail(null)}
                    />
                  ) : (
                    <EmailDetail
                      email={selectedEmail}
                      onBack={() => setSelectedEmail(null)}
                    />
                  )
                ) : (
                  // Otherwise, show the list of emails for the selected folder.
                  filteredEmails.map((email, index) => (
                    <EmailPreview
                      key={index}
                      {...email}
                      onClick={() => setSelectedEmail(email)}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroScreen;
