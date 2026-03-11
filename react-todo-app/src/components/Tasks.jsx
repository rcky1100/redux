import React, { useContext, useEffect, useState } from "react";
import { loadTasks } from "../store/tasks";
import StoreContext from "../contexts/storeContext";

const Tasks = () => {
  const store = useContext(StoreContext);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    store.dispatch(loadTasks());
    const unsubscribe = store.subscribe(() => {
      const storeTasks = store.getState().tasks.tasks;
      if (storeTasks !== tasks) {
        setTasks(storeTasks);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(tasks);
  return (
    <div>
      {tasks.map((item) => (
        <p key={item.id}>{item.task}</p>
      ))}
    </div>
  );
};

export default Tasks;
