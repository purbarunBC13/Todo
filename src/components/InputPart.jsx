import React from "react";
import { useList } from "../store/ListProvider";

const InputPart = () => {
  const { addToList } = useList();

  const handleClick = () => {
    const work = document.getElementById("work").value;
    if (work) {
      addToList({
        id: new Date().getTime().toString(),
        work,
        completed: false,
      });
    }
    document.getElementById("work").value = "";
  };

  return (
    <>
      <div className="border-2 bg-green-200 w-full p-3 flex justify-between gap-3 rounded-md">
        <input
          type="text"
          name="work"
          id="work"
          placeholder="Add work here"
          className="outline-none border-2 border-blue-300 p-2 rounded-md w-full"
        />
        <button
          type="submit"
          className="bg-red-400 px-3 py-2 rounded-md text-white"
          onClick={handleClick}
        >
          ADD
        </button>
      </div>
    </>
  );
};

export default InputPart;
