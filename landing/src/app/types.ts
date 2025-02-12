// ─── INTERFACES ──────────────────────────────────────────────

export interface EmailAiOutput {
    "Urgency Level": number;
    "Tasks Extracted": string[];
  }
  
  export interface ThreadMessage {
    id: string;
    sender: string;
    senderEmail: string;
    recipients: string[];
    timestamp: string;
    content: string;
    isOutbound?: boolean;
    // Each message can have its own AI analysis.
    aiOutput?: EmailAiOutput;
  }
  
  export interface EmailThread {
    id: string;
    subject: string;
    // You can still include a thread-level aiOutput if desired.
    aiOutput: EmailAiOutput;
    messages: ThreadMessage[];
  }
  
  export interface EmailDetailThreadedProps {
    thread: EmailThread;
    onBack: () => void;
  }
  
  // Extend the email preview interface with an optional thread.
  export interface EmailPreviewProps {
    sender: string;
    subject: string;
    preview: string;
    time: string;
    isUnread?: boolean;
    aiOutput: EmailAiOutput;
    showTasks?: boolean;
    folder: string;
    onClick?: () => void;
    // If present, the email has a thread of messages.
    thread?: EmailThread;
  }
  
  export interface SidebarItemProps {
    icon: React.ElementType;
    label: string;
    count?: number | string;
    isActive?: boolean;
    onClick?: () => void;
  }
  
  export interface TasksPreviewProps {
    tasks: string[];
    isExpanded: boolean;
  }
  
  // ─── NEW: TaskItem and EditableTasks COMPONENTS ──────────────────────────────
  
  export interface TaskItemProps {
    task: string;
    onUpdate: (newTask: string) => void;
    onDelete: () => void;
    onExport: () => void;
  }