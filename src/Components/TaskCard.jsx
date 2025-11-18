import React from "react";
import PriorityBadge from "./PrioriryBadge";

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200 flex flex-col gap-3 w-full">
      <div className="flex justify-between items-start gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
          <p className="text-sm text-gray-600">{task.description}</p>
          <div className="text-xs text-gray-500 mt-2">
            Due: <span className="font-medium">{task.dueDate}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <PriorityBadge priority={task.priority} />
          <span
            className={`text-xs font-semibold px-2 py-1 rounded ${
              task.status === "COMPLETED" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
            }`}
          >
            {task.status}
          </span>
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <button
          onClick={() => onEdit(task)}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
