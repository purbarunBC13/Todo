import React, { useEffect, useState } from "react";
import { useList } from "../store/ListProvider";
import Cookies from "js-cookie";

const Lists = () => {
  const { list, removeFromList, markAsCompleted } = useList();

  const [List, setList] = useState([]);

  useEffect(() => {
    const fetchList = () => {
      const data = Cookies.get("list");
      if (data) {
        setList(JSON.parse(data));
      }
    };
    fetchList();
  }, [list]);

  return (
    <div className="w-full flex flex-col gap-3">
      {List.map((item) => (
        <div
          key={item.id}
          className={`flex justify-between items-center p-2 border-2 border-blue-300 rounded-md `}
        >
          <div
            className={`${
              item.completed ? "text-decoration-line: line-through" : ""
            }`}
          >
            {item.work}
          </div>
          <div className="flex gap-5">
            <button
              className="bg-red-400 px-3 py-1 rounded-md text-white"
              onClick={() => removeFromList(item.id)}
            >
              DELETE
            </button>
            <button
              className="bg-blue-400 px-3 py-1 rounded-md text-white"
              onClick={() => markAsCompleted(item.id)}
            >
              {item.completed ? "UNDO" : "DONE"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lists;
