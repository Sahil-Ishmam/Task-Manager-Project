import React, { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import TaskForm from "./components/TaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleTask = (newTask) => {
    console.log(newTask);

    // spread it :> and make a new array of tasks with new task
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    // save the task in the local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const taskCounts = {
    all: tasks?.length || 0,
    completed: tasks?.filter((t) => t.completed).length || 0,
    pending: tasks?.filter((t) => !t.completed).length || 0,
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id != id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  const handleToggleCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    // save to local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };
  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTask);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-8">
      <div className="max-w-3xl mx-auto">
        <AppHeader />
        <TaskForm handleTask={handleTask} />
        <TaskFilters
          currentFilter={filter}
          onFilterChange={setFilter}
          tasksCount={taskCounts}
        />

        <TaskList
          tasks={filteredTasks}
          handleDelete={handleDelete}
          handleToggleCompleted={handleToggleCompleted}
        />
      </div>
    </div>
  );
}

export default App;
