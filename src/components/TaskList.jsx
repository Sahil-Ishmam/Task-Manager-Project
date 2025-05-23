import { Clipboard } from "lucide-react";
import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, handleDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded shadow p-8 text-center mt-6">
        <Clipboard className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-medium text-gray-900">No Tasks Yet</h3>
        <p className="mt-1 text-gray-500">Add a new task to get started</p>
      </div>
    );
  }

  return (
    <div className="space-y-1 mt-6">
      {/* loop through tasks */}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
