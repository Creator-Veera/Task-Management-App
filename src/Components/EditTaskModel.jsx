import React, { useEffect, useState } from "react";

const EditTaskModal = ({ isOpen, onClose, taskToEdit, onTaskUpdated, updateTaskFn }) => {
  const [task, setTask] = useState(taskToEdit || null);

  useEffect(() => setTask(taskToEdit || {
    title: "", description: "", dueDate: "", priority: "LOW", status: "PENDING"
  }), [taskToEdit]);

  if (!isOpen || !task) return null;

  const handleChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTaskFn(task.id, task);
    onTaskUpdated(); // notify parent to refresh
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Edit Task</h3>
          <button onClick={onClose} className="text-gray-600">Close</button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input name="title" value={task.title} onChange={handleChange} placeholder="Title" required
                 className="border px-3 py-2 rounded" />
          <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description"
                    className="border px-3 py-2 rounded h-24" />
          <input name="dueDate" value={task.dueDate} onChange={handleChange} type="date" required
                 className="border px-3 py-2 rounded" />
          <select name="priority" value={task.priority} onChange={handleChange} className="border px-3 py-2 rounded">
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </select>
          <select name="status" value={task.status} onChange={handleChange} className="border px-3 py-2 rounded">
            <option value="PENDING">PENDING</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
