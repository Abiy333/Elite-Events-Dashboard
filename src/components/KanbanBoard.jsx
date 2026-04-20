import React, { useState } from "react";

export default function KanbanBoard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Set up the Accounting Page", status: "todo" },
    { id: 2, title: "Arrange for the Flower Page", status: "todo" },
    { id: 3, title: "Set up the Welcome Page", status: "in-progress" },
    { id: 4, title: "Secure the domain", status: "done" },
  ]);

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    const draggedTaskId = e.dataTransfer.getData("taskId");

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id.toString() === draggedTaskId
          ? { ...task, status: newStatus }
          : task,
      ),
    );
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Events Operations</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div
          className="flex-1 bg-gray-200 p-4 rounded-xl min-h-[400px]"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "todo")}
        >
          <h2 className="font-bold text-gray-700 mb-4 uppercase text-sm tracking-wider">
            To Do
          </h2>

          {tasks
            .filter((task) => task.status === "todo")
            .map((task) => (
              <div
                key={task.id}
                className="bg-white p-4 rounded-lg shadow-sm mb-3 border border-gray-100 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
                draggable={true}
                onDragStart={(e) => handleDragStart(e, task.id)}
              >
                {task.title}
              </div>
            ))}
        </div>
        <div
          className="flex-1 bg-gray-200 p-4 rounded-xl min-h-[400px]"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "in-progress")}
        >
          <h2 className="font-bold text-gray-700 mb-4 uppercase text-sm tracking-wider">
            {" "}
            In Progress
          </h2>

          {tasks
            .filter((task) => task.status === "in-progress")
            .map((task) => (
              <div
                key={task.id}
                className="bg-white p-4 rounded-lg shadow-sm mb-3 border border-gray-100 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
                draggable={true}
                onDragStart={(e) => handleDragStart(e, task.id)}
              >
                {task.title}
              </div>
            ))}
        </div>
        <div
          className="flex-1 bg-gray-200 p-4 rounded-xl min-h-[400px]"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, "done")}
        >
          <h2 className="font-bold text-gray-700 mb-4 uppercase text-sm tracking-wider">
            Done
          </h2>

          {tasks
            .filter((task) => task.status === "done")
            .map((task) => (
              <div
                key={task.id}
                className="bg-white p-4 rounded-lg shadow-sm mb-3 border border-gray-100 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
                draggable={true}
                onDragStart={(e) => handleDragStart(e, task.id)}
              >
                {task.title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
