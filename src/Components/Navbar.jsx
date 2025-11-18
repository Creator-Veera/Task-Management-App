import React from "react";

const Navbar = ({ onOpenAdd }) => {
  return (
    <div className="container mx-auto">
      <div className=" w-[98%] mx-auto px-10  rounded-md shadow-2xl py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Task Management</div>
        <div className="flex gap-4">
          <button
            onClick={onOpenAdd}
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
