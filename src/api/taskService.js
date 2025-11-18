// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8080/tasks", // backend base
//   headers: { "Content-Type": "application/json" },
// });

// // Pagination: expects a Page response with { content, totalPages, totalElements, number, size }
// export const getTasksPaged = (page = 0, size = 10, sortBy = "id") =>
//   api.get("/", { params: { page, size, sortBy } }).then((res) => res.data);

// // Fallback - get all tasks (if needed)
// export const getAllTasks = () => api.get("/").then((res) => res.data);

// // Create single or bulk
// export const createTask = (task) => api.post("/", task).then((res) => res.data);
// export const createTasksBulk = (tasks) => api.post("/bulk", tasks).then((res) => res.data);

// // Get by id
// export const getTaskById = (id) => api.get(`/${id}`).then((res) => res.data);

// // Update
// export const updateTask = (id, task) => api.put(`/${id}`, task).then((res) => res.data);

// // Delete single or bulk
// export const deleteTask = (id) => api.delete(`/${id}`).then((res) => res.data);
// export const deleteTasksBulk = (ids) => api.delete("", { data: ids }).then((res) => res.data);

// // Filtering / Sorting / Search (server has endpoints)
// export const filterTasks = ({ status, priority, dueDate, q, page, size, sortBy, direction }) =>
//   axios.get(`${BASE_URL}/filter`, {
//     params: {
//       status: status || null,
//       priority: priority || null,
//       dueDate: dueDate || null,
//       q: q || null,
//       page: page ?? 0,
//       size: size ?? 10,
//       sortBy: sortBy || "id",
//       direction: direction || "asc"
//     },
// });

// export const sortTasks = (sortBy) =>
//   api.get("/sort", { params: { sortBy } }).then((res) => res.data);

// export const searchTasks = (text) =>
//   api.get("/search", { params: { text } }).then((res) => res.data);


import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/tasks", 
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
