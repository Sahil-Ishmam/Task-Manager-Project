import React from "react";

function TaskFilters({ currentFilter, onFilterChange, tasksCount }) {
  return (
    <div className="flex justify-center gap-3 mt-6">
      <button
        className={`px-4 py-1 rounded-full bg-blue-500 font-medium border transition ${
          currentFilter === "all"
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
        onClick={() => onFilterChange("all")}
      >
        All ({tasksCount.all})
      </button>

      <button
        className={`px-4 py-1 rounded-full bg-blue-500 font-medium border transition ${
          currentFilter === "completed"
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
        onClick={() => onFilterChange("completed")}
      >
        Completed({tasksCount.completed})
      </button>
      <button
        className={`px-4 py-1 rounded-full bg-blue-500 font-medium border transition ${
          currentFilter === "pending"
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
        onClick={() => onFilterChange("pending")}
      >
        Pending({tasksCount.pending})
      </button>
    </div>
  );
}

export default TaskFilters;
