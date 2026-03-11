import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks } from "../store/tasks";

const Tasks = () => {
  const { tasks, loading } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasks());
  }, []);
  return (
    <div>
      {tasks.map((item) => (
        <p key={item.id}>{item.task}</p>
      ))}
    </div>
  );
};
export default Tasks;
