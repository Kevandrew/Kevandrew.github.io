import {AlertCircle, CheckSquare, ChevronRight, Edit2, Plus, Share2, Trash2 } from "lucide-react"
import { TasksPreviewProps, EditableTasksProps, TaskItemProps } from "./types";
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
  
  export const TasksPreview: React.FC<TasksPreviewProps> = ({ tasks, isExpanded }) => {
    if (!isExpanded || tasks.length === 0) return null;
    
    return (
      <div className="mt-2 bg-black/[0.02] dark:bg-white/[0.02] rounded-lg px-2 py-1">
        <div className="space-y-0.5">
          {tasks.map((task: string, index: number) => (
            <div 
              key={index} 
              className="flex items-center gap-1.5 text-xs group hover:bg-black/[0.02] dark:hover:bg-white/[0.02] px-1.5 py-1 rounded transition-colors"
            >
              <CheckSquare className="w-3 h-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span className="text-black/70 dark:text-white/70 line-clamp-1">{task}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
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
      console.log("Exporting task:", tasks[index]);
    };
  
    const handleAddTask = () => {
      if (newTask.trim()) {
        setTasks([...tasks, newTask.trim()]);
        setNewTask("");
      }
    };
  
    return (
      <div className="space-y-1">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onUpdate={(newTaskValue: string) => handleUpdateTask(index, newTaskValue)}
            onDelete={() => handleDeleteTask(index)}
            onExport={() => handleExportTask(index)}
          />
        ))}
        <div className="flex items-center gap-1.5 mt-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new task..."
            className="flex-1 text-xs bg-black/[0.02] dark:bg-white/[0.02] rounded-lg px-3 py-1.5 placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddTask();
              }
            }}
          />
          <button
            onClick={handleAddTask}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs transition-colors"
          >
            <Plus className="w-3 h-3" />
            <span>Add</span>
          </button>
        </div>
      </div>
    );
  };
  
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
      <div className="group flex items-center justify-between bg-black/[0.02] dark:bg-white/[0.02] px-3 py-2 rounded-lg hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-colors">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <CheckSquare className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          {isEditing ? (
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="flex-1 text-xs bg-white dark:bg-black rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSave();
                }
              }}
            />
          ) : (
            <span className="text-xs text-black/80 dark:text-white/80 truncate">{task}</span>
          )}
        </div>
        <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
          {isEditing ? (
            <button 
              onClick={handleSave}
              className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors text-blue-600"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <>
              <button 
                onClick={() => setIsEditing(true)}
                className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={onExport}
                className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={onDelete}
                className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors text-red-600"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </>
          )}
        </div>
      </div>
    );
  };
  