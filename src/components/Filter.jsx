import React from "react";
import { useList } from "../store/ListProvider";

const Filter = () => {
  const { filterWorks } = useList();

  const handleFilter = (e) => {
    filterWorks(e.target.innerText);
  };

  return (
    <>
      <div className="flex justify-center gap-3 w-full">
        <button
          className="bg-blue-400 px-3 py-2 rounded-md text-white"
          onClick={handleFilter}
        >
          All
        </button>
        <button
          className="bg-green-400 px-3 py-2 rounded-md text-white"
          onClick={handleFilter}
        >
          Completed
        </button>
        <button
          className="bg-red-500 px-3 py-2 rounded-md text-white"
          onClick={handleFilter}
        >
          Active
        </button>
      </div>
    </>
  );
};

export default Filter;
