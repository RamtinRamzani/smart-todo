"use client";

import {
  Calendar,
  ChevronLeft,
  CircleCheck,
  CircleEllipsis,
  ClipboardClock,
  Clock,
  File,
  Image as ImageIcon,
  NotebookPen,
  Paperclip,
  Plus,
  Repeat,
  Shapes,
} from "lucide-react";
import Container from "./Container";
import TaskFieldBox from "./TaskFieldBox";

const TaskDetail = () => {
  return (
    <Container>
      <div className="flex flex-col h-screen text-purple100">
        {/* Header */}

        <div className="flex-1 px-2 py-4 space-y-4">
          {/* Task Title */}
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-1 text-purple200 cursor-pointer">
              <ChevronLeft size={20} />
            </button>
            <h1 className="text-xl font-bold text-purple50">Title-1</h1>
          </div>

          {/* Subtasks */}
          <div className="space-y-2">
            <div className="flex items-center gap-3 px-2">
              <CircleEllipsis className="text-purple400 h-5" />
              <span className="flex-1 text-sm">Task-1</span>
            </div>
            <div className="flex items-center gap-3 px-2">
              <CircleCheck className="text-green-400 h-5" />
              <span className="flex-1 text-sm text-purple300">Task-2</span>
            </div>
            <button className="flex items-center gap-3 w-full py-2 px-2 rounded-lg bg-background/50 border border-border text-purple200">
              <Plus size={20} className="text-purple400" />
              <span className="text-sm">Add Subtask</span>
            </button>
          </div>

          {/* Date & Time Row */}
          <div className="flex gap-3">
            <TaskFieldBox
              icon={<Calendar size={20} className="text-purple400" />}
              label="Date"
              value="12/12/2025"
            />
            <TaskFieldBox
              icon={<Clock size={20} className="text-purple400" />}
              label="Time"
              value="05:50 PM"
            />
          </div>

          {/* Category & Reminder Row */}
          <div className="flex gap-3">
            <TaskFieldBox
              icon={<Shapes size={20} className="text-purple400" />}
              label="Category"
              value="Work"
            />
            <TaskFieldBox
              icon={<ClipboardClock size={20} className="text-purple400" />}
              label="Reminder"
              value="15 minutes"
            />
          </div>

          {/* Notes & Repeat Row */}
          <div className="flex gap-3">
            <TaskFieldBox
              icon={<NotebookPen size={20} className="text-purple400" />}
              label="Notes"
              value="Important"
              addButton
            />
            <TaskFieldBox
              icon={<Repeat size={20} className="text-purple400" />}
              label="Repeat"
              value="Monthly"
            />
          </div>

          {/* Attachments */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Paperclip size={20} className="text-purple400" />
              <span className="text-sm font-medium">Attachment</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 p-4 rounded-xl bg-background border border-border border-dashed flex flex-col items-center justify-center space-y-2">
                <File size={24} className="text-purple400" />
                <span className="text-xs text-purple300">document.pdf</span>
              </div>
              <div className="flex-1 p-4 rounded-xl bg-background border border-border border-dashed flex flex-col items-center justify-center space-y-2">
                <ImageIcon size={24} className="text-purple400" />
                <span className="text-xs text-purple300">image.jpg</span>
              </div>
            </div>
            <button className="flex items-center justify-center w-full py-4 px-4 rounded-xl bg-background border-2 border-dashed border-purple400 text-purple300">
              <Plus size={20} />
              <span className="text-sm ml-2">Add Attachment</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TaskDetail;
