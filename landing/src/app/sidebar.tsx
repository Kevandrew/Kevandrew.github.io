import React from 'react';
import {
  ChevronDown,
  Search,
  Inbox,
  Star,
  Clock,
  Archive,
  Settings,
  Tag,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface SidebarProps {
  selectedFolder: string;
  onFolderClick: (folder: string) => void;
  expanded: boolean;      // New prop: determines if the sidebar is expanded
  onToggle: () => void;   // Callback to toggle expansion (controlled by parent)
}

const Sidebar: React.FC<SidebarProps> = ({
  selectedFolder,
  onFolderClick,
  expanded,
  onToggle,
}) => {
  return (
    <div
      className={`${
        expanded ? 'w-64' : 'w-16'
      } border-r border-black/5 dark:border-white/5 flex flex-col transition-all duration-200 ease-in-out relative group`}
    >
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-4 w-6 h-6 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
      >
        {expanded ? (
          <ChevronLeft className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>

      {/* Account Info */}
      <div className="p-4 border-b border-black/5 dark:border-white/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
            <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
              J
            </span>
          </div>
          {expanded && (
            <>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">John Doe</div>
                <div className="text-xs text-black/40 dark:text-white/40 truncate">
                  john.doe@gmail.com
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-black/40 dark:text-white/40" />
            </>
          )}
        </div>
        {expanded && (
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40" />
            <input
              type="text"
              placeholder="Search emails"
              className="w-full pl-10 pr-4 py-2 text-sm bg-black/[0.02] dark:bg-white/[0.02] rounded-lg placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 p-3 space-y-1 overflow-y-auto">
        <CollapsibleSidebarItem
          icon={Inbox}
          label="Inbox"
          count="23"
          isActive={selectedFolder === "Inbox"}
          onClick={() => onFolderClick("Inbox")}
          isExpanded={expanded}
        />
        <CollapsibleSidebarItem
          icon={Star}
          label="Starred"
          isActive={selectedFolder === "Starred"}
          onClick={() => onFolderClick("Starred")}
          isExpanded={expanded}
        />
        <CollapsibleSidebarItem
          icon={Clock}
          label="Snoozed"
          isActive={selectedFolder === "Snoozed"}
          onClick={() => onFolderClick("Snoozed")}
          isExpanded={expanded}
        />
        <CollapsibleSidebarItem
          icon={Archive}
          label="Archive"
          isActive={selectedFolder === "Archive"}
          onClick={() => onFolderClick("Archive")}
          isExpanded={expanded}
        />

        <div className="my-4 px-3">
          <div className="h-px bg-black/5 dark:bg-white/5" />
        </div>

        {expanded && (
          <div className="flex items-center justify-between px-3 py-2 text-sm text-black/40 dark:text-white/40">
            <span>Labels</span>
            <span className="text-xs">Edit</span>
          </div>
        )}

        <CollapsibleSidebarItem
          icon={Tag}
          label="Important"
          onClick={() => onFolderClick("Important")}
          isActive={selectedFolder === "Important"}
          isExpanded={expanded}
        />
        <CollapsibleSidebarItem
          icon={Tag}
          label="Work"
          onClick={() => onFolderClick("Work")}
          isActive={selectedFolder === "Work"}
          isExpanded={expanded}
        />
        <CollapsibleSidebarItem
          icon={Tag}
          label="Personal"
          onClick={() => onFolderClick("Personal")}
          isActive={selectedFolder === "Personal"}
          isExpanded={expanded}
        />
      </div>

      {/* Settings */}
      <div className="p-3 border-t border-black/5 dark:border-white/5">
        <CollapsibleSidebarItem
          icon={Settings}
          label="Settings"
          onClick={() => onFolderClick("Settings")}
          isExpanded={expanded}
        />
      </div>
    </div>
  );
};

interface CollapsibleSidebarItemProps {
  icon: React.ElementType;
  label: string;
  count?: string;
  isActive?: boolean;
  onClick: () => void;
  isExpanded: boolean;
}

const CollapsibleSidebarItem: React.FC<CollapsibleSidebarItemProps> = ({
  icon: Icon,
  label,
  count,
  isActive,
  onClick,
  isExpanded,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-3 py-2 rounded-lg
        ${isActive 
          ? 'bg-black/5 dark:bg-white/5 text-black dark:text-white' 
          : 'text-black/60 dark:text-white/60 hover:bg-black/[0.03] dark:hover:bg-white/[0.03]'
        }
        ${!isExpanded && 'justify-center'}
      `}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      {isExpanded && (
        <>
          <span className="flex-1 text-sm text-left">{label}</span>
          {count && (
            <span className="text-xs text-black/40 dark:text-white/40">
              {count}
            </span>
          )}
        </>
      )}
    </button>
  );
};

export default Sidebar;