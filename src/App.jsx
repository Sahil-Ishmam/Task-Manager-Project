import React, { useState } from "react";
import { Camera, Smile } from "lucide-react";
import AppHeader from "./components/AppHeader";
import TaskForm from "./components/TaskForm";
function App() {
  const [tasks, setTasks] = useState([]);

  const handleTask = (newTask) => {
    console.log(newTask);

    // spread it :> and make a new array of tasks with new task
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    // save the task in the local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };


  return (
    <div className="min-h-screen bg-gray-100 py-8 px-8">
      <div className="max-w-3xl mx-auto">
        <AppHeader />
        <TaskForm  handleTask={handleTask}/>
      </div>
    </div>
  );
}

export default App;
