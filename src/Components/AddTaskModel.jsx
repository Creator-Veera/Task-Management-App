import { useState } from "react";
import {createTask } from '../api/taskService'

const AddTaskModal = ({ isOpen, onClose, onTaskAdded, createTaskFn }) => {
  const initialData = {
    title: "",
    description: "",
    priority: "LOW",
    status: "PENDING",
    dueDate: "",
  };

  const [task, setTask] = useState(initialData);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createTask(task);      
    setTask(initialData);         
    onTaskAdded();                
    onClose();                     
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-400/30 backdrop-blur-md flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            type="text"
            name="title"
            placeholder="Title"
            value={task.title}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={task.description}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </select>

          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="PENDING">PENDING</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>

          

          <div className="flex justify-end gap-2 mt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Close
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add Task
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
