import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import TaskList from "../Components/TaskList";
import AddTaskModal from "../Components/AddTaskModel";
import EditTaskModal from "../Components/EditTaskModel";
import Filters from "../Components/Filter";
import Pagination from "../Components/Pagination";

import {
  getTasksPaged,
  createTask,
  updateTask,
  deleteTask,
  filterTasks,
  searchTasks,
} from "../api/taskService";
import Footer from "../Components/Footer";

const Dashboard = () => {
  const [isAddOpen, setAddOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [editTaskItem, setEditTaskItem] = useState(null);

  const [tasks, setTasks] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    number: 0,
    totalPages: 1,
    size: 10,
    totalElements: 0,
  });

  const [sortBy, setSortBy] = useState("id");

  const fetchPage = async (page = 0, size = 10, sort = sortBy) => {
    try {
      const data = await getTasksPaged(page, size, sort);

      setTasks(data.content || []);
      setPageInfo({
        number: data.number,
        totalPages: data.totalPages,
        size: data.size,
        totalElements: data.totalElements,
      });
    } catch (err) {
      console.error("fetchPage error", err);
    }
  };

  useEffect(() => {
    fetchPage(0, pageInfo.size, sortBy);
  }, []);

  const onTaskAdded = async () => {
    await fetchPage(pageInfo.number, pageInfo.size, sortBy);
  };

  const onTaskUpdated = async () => {
    await fetchPage(pageInfo.number, pageInfo.size, sortBy);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this task?")) return;
    await deleteTask(id);
    await fetchPage(pageInfo.number, pageInfo.size, sortBy);
  };

  const handleEdit = (task) => {
    setEditTaskItem(task);
    setEditOpen(true);
  };

  const handleFilter = async (status, priority, dueDate) => {
    if (!status && !priority && !dueDate) {
      return fetchPage(0, pageInfo.size, sortBy);
    }

    const res = await filterTasks(
      status,
      priority,
      dueDate,
      pageInfo.number,
      pageInfo.size,
      sortBy
    );

    setTasks(res.content || []);
    setPageInfo({
      number: res.number,
      totalPages: res.totalPages,
      size: res.size,
      totalElements: res.totalElements,
    });
  };

  const handleSearch = async (text) => {
    if (!text) {
      return fetchPage(0, pageInfo.size, sortBy);
    }

    const res = await searchTasks(
      text,
      pageInfo.number,
      pageInfo.size,
      sortBy
    );

    setTasks(res.content || []);
    setPageInfo({
      number: res.number,
      totalPages: res.totalPages,
      size: res.size,
      totalElements: res.totalElements,
    });
  };

  const handleSort = async (field) => {
    setSortBy(field);
    await fetchPage(0, pageInfo.size, field);
  };

  const goToPage = async (p) => fetchPage(p, pageInfo.size, sortBy);
  const prev = async () => {
    if (pageInfo.number > 0) fetchPage(pageInfo.number - 1, pageInfo.size, sortBy);
  };
  const next = async () => {
    if (pageInfo.number < pageInfo.totalPages - 1)
      fetchPage(pageInfo.number + 1, pageInfo.size, sortBy);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onOpenAdd={() => setAddOpen(true)} />

      <div className="container mx-auto px-6 py-6">
        <div className="mb-6 flex justify-center">
          <Filters 
            onFilter={handleFilter}
            onSearch={handleSearch}
            onSort={handleSort}
          />
        </div>

        <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      <div className="w-full flex justify-center my-6">
        <Pagination
          pageNumber={pageInfo.number}
          totalPages={pageInfo.totalPages}
          onPrev={prev}
          onNext={next}
        />
      </div>

      <AddTaskModal
        isOpen={isAddOpen}
        onClose={() => setAddOpen(false)}
        onTaskAdded={onTaskAdded}
        createTaskFn={createTask}
      />

      <EditTaskModal
        isOpen={isEditOpen}
        onClose={() => setEditOpen(false)}
        taskToEdit={editTaskItem}
        onTaskUpdated={onTaskUpdated}
        updateTaskFn={updateTask}
      />
      <Footer/>
    </div>
  );
};

export default Dashboard;
