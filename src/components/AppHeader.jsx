import { CheckSquare } from "lucide-react";
import React from "react";

function AppHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <CheckSquare className="h-8 w-8 text-blue-500" />
        <h1 className="text-2xl font-bold text-gray-800">Task Flow</h1>
      </div>
      <p>Manage your Task with ease...</p>
    </div>
  );
}

export default AppHeader;
