import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (!tasks || tasks.length === 0) {
    return <div className="text-center text-gray-500">No tasks found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tasks.map((t) => (
        <TaskCard key={t.id} task={t} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
