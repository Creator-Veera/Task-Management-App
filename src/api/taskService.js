import axios from "axios";

const Base_URL=import.meta.env.VITE_APP_URL;
const api = axios.create({
  baseURL: (`${Base_URL}/tasks`), 
  headers: { "Content-Type": "application/json" },
});

// ========== Pagination ==========
export const getTasksPaged = (page = 0, size = 10, sortBy = "id") =>
  api.get("/", { params: { page, size, sortBy } }).then((res) => res.data);

// ========== CRUD ==========
export const getAllTasks = () => api.get("/").then((res) => res.data);

export const createTask = (task) =>
  api.post("/", task).then((res) => res.data);

export const createTasksBulk = (tasks) =>
  api.post("/bulk", tasks).then((res) => res.data);

export const getTaskById = (id) =>
  api.get(`/${id}`).then((res) => res.data);

export const updateTask = (id, task) =>
  api.put(`/${id}`, task).then((res) => res.data);

export const deleteTask = (id) =>
  api.delete(`/${id}`).then((res) => res.data);

export const deleteTasksBulk = (ids) =>
  api.delete("/", { data: ids }).then((res) => res.data);

// ========== FILTER ==========
export const filterTasks = (status, priority, dueDate, page = 0, size = 10, sortBy = "id") =>
  api
    .get("/filter", {
      params: {
        status: status || null,
        priority: priority || null,
        dueDate: dueDate || null,
        page,
        size,
        sortBy,
        direction: "asc",
      },
    })
    .then((res) => res.data);

// ========== SEARCH (correct param is 'q') ==========
export const searchTasks = (text) =>
  api
    .get("/filter", {
      params: {
        q: text,
        page: 0,
        size: 10,
      },
    })
    .then((res) => res.data);
