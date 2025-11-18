import React from "react";

const PriorityBadge = ({ priority }) => {
  const map = {
    HIGH: "bg-red-200 text-red-800",
    MEDIUM: "bg-yellow-200 text-yellow-800",
    LOW: "bg-green-200 text-green-800",
  };
  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded ${map[priority] || "bg-gray-200"}`}>
      {priority}
    </span>
  );
};

export default PriorityBadge;
