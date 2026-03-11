import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import Tasks from "./components/Tasks";
import TaskClass from "./components/TaskClass";
import AddTask from "./components/AddTask";
import AddTaskClass from "./components/AddTaskClass";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddTask />
        <Tasks />
        <h2>Task from Task Class</h2>
        <AddTaskClass />
        <TaskClass />
      </div>
    </Provider>
  );
};

export default App;
