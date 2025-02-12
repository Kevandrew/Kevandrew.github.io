import { useState } from "react";
import { EmailPreviewProps, EmailDetailThreadedProps } from "./types";
import { UrgencyLevel, TasksPreview, EditableTasks } from "./utils";
import {
    Star,
    Archive,
    Clock,
    ChevronDown,
    MoreHorizontal,
    CheckSquare,
    ChevronRight,
    ArrowLeft,
    Share2,
    Trash2,
    Paperclip,
    Send,

  } from "lucide-react";

export const EmailPreview: React.FC<EmailPreviewProps> = ({
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
  
  /* ─── EMAIL DETAIL COMPONENT ─────────────────────────────────────────────── */
  
 export const EmailDetail: React.FC<{
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
  
  /* ─── EMAIL DETAIL THREADED COMPONENT ─────────────────────────────────────── */
  
 export const EmailDetailThreaded: React.FC<EmailDetailThreadedProps> = ({
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