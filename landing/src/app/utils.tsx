import {AlertCircle, CheckSquare, Edit2, Plus, Share2, Trash2 } from "lucide-react"
import { TasksPreviewProps, SidebarItemProps, EditableTasksProps, TaskItemProps } from "./types";
import { useState } from "react";

export const UrgencyLevel: React.FC<{ level: number }> = ({ level }) => {
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
  
  /* ─── TASKS PREVIEW COMPONENT ────────────────────────────────────────────── */
  
  export const TasksPreview: React.FC<TasksPreviewProps> = ({ tasks, isExpanded }) => (
    <div className={`mt-2 space-y-1 ${isExpanded ? "" : "hidden"}`}>
      {tasks.map((task: string, index: number) => (
        <div key={index} className="flex items-start gap-2 text-xs">
          <CheckSquare className="w-3 h-3 text-blue-600 dark:text-blue-400 mt-0.5" />
          <span className="text-black/60 dark:text-white/60">{task}</span>
        </div>
      ))}
    </div>
  );
  
  /* ─── SIDEBAR ITEM COMPONENT ─────────────────────────────────────────────── */
  
  export const SidebarItem: React.FC<SidebarItemProps> = ({
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

  export const EditableTasks: React.FC<EditableTasksProps> = ({ initialTasks }) => {
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
            onUpdate={(newTaskValue: string) => handleUpdateTask(index, newTaskValue)}
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
  
 export const TaskItem: React.FC<TaskItemProps> = ({
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
  