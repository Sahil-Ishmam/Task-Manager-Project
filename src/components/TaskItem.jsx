import { CheckCircle, Circle, Trash2 } from "lucide-react";
import React from "react";

function TaskItem({ task, handleDelete }) {
  const formattedData = new Date(task.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "Asia/Dhaka",
  });
  return (
    <div
      className={`flex justify-between items-start bg-white p-4 rounded-md shadow-sm  border-l-4 ${
        task.completed ? "border-green-400 opacity-75" : "border-gray-300"
      }`}
    >
      <div className="flex items-center gap-3 flex-1">
        <button className="mt-1 flex-shrink-0 transition-transform duration-200 hover:scale-110 focus:outline:none">
          {task.completed ? (
            <CheckCircle className="h-5 w-5 text-green-500" />
          ) : (
            <Circle className="h-5 w-5 text-gray-500" />
          )}
        </button>
        <div className="flex-1">
          <h3
            className={`text-base font-medium ${
              task.completed ? "line-through" : "text-gray-800"
            }`}
          >
            {task.title}
          </h3>
          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
            <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
              {task.category}
            </span>

            <span
              className={`px-2 py-0.5 rounded-full ${
                task.priority === "high"
                  ? "bg-red-100 text-red-600"
                  : task.priority === "medium"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {task.priority} Priority
            </span>
            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              {formattedData}
            </span>

            <button
              onClick={() => handleDelete(task.id)}
              className="text-gray-500"
              area-label="Delete Task"
              title="Delete Task"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
