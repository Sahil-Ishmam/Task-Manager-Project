import React, { useState } from "react";
import { Camera, Smile } from "lucide-react";
import AppHeader from "./components/AppHeader";
import TaskForm from "./components/TaskForm";
function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-8">
      <div className="max-w-3xl mx-auto">
        <AppHeader />
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
