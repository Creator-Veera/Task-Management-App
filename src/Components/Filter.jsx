import React, { useState } from "react";

const Filters = ({ onFilter, onSearch, onSort }) => {
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [text, setText] = useState("");
  const [sortBy, setSortBy] = useState("id");

  const apply = () => onFilter(status || null, priority || null);
  const doSearch = () => onSearch(text);
  const doSort = () => onSort(sortBy);

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="border px-2 py-1 rounded">
        <option value="">Status</option>
        <option value="PENDING">PENDING</option>
        <option value="IN_PROGRESS">IN_PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>

      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border px-2 py-1 rounded">
        <option value="">Priority</option>
        <option value="LOW">LOW</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HIGH">HIGH</option>
      </select>

      <button onClick={apply} className="px-3 py-1 rounded bg-gray-200">Apply</button>

      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Search..."
             className="border px-2 py-1 rounded" />
      <button onClick={doSearch} className="px-3 py-1 rounded bg-gray-200">Search</button>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border px-2 py-1 rounded">
        <option value="id">Sort By</option>
        <option value="dueDate">dueDate</option>
        <option value="priority">priority</option>
      </select>
      <button onClick={doSort} className="px-3 py-1 rounded bg-gray-200">Sort</button>
    </div>
  );
};

export default Filters;
