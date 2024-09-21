import { createContext, useContext, useState } from "react"; // Add createContext
import Cookies from "js-cookie";

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const addToList = (item) => {
    setList([...list, item]);
    Cookies.set("list", JSON.stringify([...list, item]));
  };

  const removeFromList = (id) => {
    setList(list.filter((item) => item.id !== id));
    Cookies.set("list", JSON.stringify(list.filter((item) => item.id !== id)));
  };

  const markAsCompleted = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    Cookies.set(
      "list",
      JSON.stringify(
        list.map((item) =>
          item.id === id ? { ...item, completed: !item.completed } : item
        )
      )
    );
  };

  const filterWorks = (status) => {
    if (status === "All") {
      setList(JSON.parse(Cookies.get("list")));
    } else if (status === "Completed") {
      setList(JSON.parse(Cookies.get("list")).filter((item) => item.completed));
    } else {
      setList(
        JSON.parse(Cookies.get("list")).filter((item) => !item.completed)
      );
    }
    console.log(status);
    console.log(list);
  };

  return (
    <ListContext.Provider
      value={{
        list,
        setList,
        addToList,
        removeFromList,
        markAsCompleted,
        filterWorks,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

const useList = () => {
  return useContext(ListContext);
};

export { ListProvider, useList };
