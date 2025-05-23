import { PlusCircle } from "lucide-react";
import React, { useState } from "react";

function TaskForm({ handleTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("personal");
  const [priority, setPriority] = useState("medium");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Title is required!!!");
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      title: title.trim(),
      category: category,
      priority: priority,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    handleTask(newTask);

    setTitle("");
    setCategory("personal");
    setPriority("medium");
    setError("");
  };

  return (
    <div className="bg-white p-6 mt-8 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Task</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block mb-1">
            Task Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            placeholder="Enter Task Title...."
          />

          {/* error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <div>
          <label htmlFor="category" className="block mb-1">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="health">Health</option>
            <option value="others">others</option>
          </select>
        </div>
        <div>
          <label htmlFor="priority" className="block mb-1">
            Priority
          </label>
          <select
            name="priority"
            id="priority"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center"
        >
          <PlusCircle className="h-4 w-4" />
          Add Task
        </button>
      </form>
    </div>
  );
}
export default TaskForm;
