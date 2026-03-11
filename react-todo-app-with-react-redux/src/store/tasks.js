import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./general-api.js";
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};
const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    apiRequested: (state, action) => {
      state.loading = true;
    },
    apiRequestedFailed: (state, action) => {
      state.loading = false;
    },
    getTasks: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    completedTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );
      state.tasks[index].completed = action.payload.completed;
    },
    removeTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );
      state.tasks.splice(index, 1);
    },
  },
});
export const {
  getTasks,
  apiRequested,
  apiRequestedFailed,
  addTask,
  completedTask,
  removeTask,
} = taskSlice.actions;
export default taskSlice.reducer;

//Action creators
export const loadTasks = () =>
  apiCallBegan({
    url: "/tasks",
    onStart: apiRequested.type,
    onSuccess: getTasks.type,
    onError: apiRequestedFailed.type,
  });

export const addNewTask = (task) =>
  apiCallBegan({
    url: "tasks",
    method: "POST",
    data: task,
    onSuccess: addTask.type,
  });

export const updateCompleted = (task) =>
  apiCallBegan({
    url: `tasks/${task.id}`,
    method: "PATCH",
    data: task,
    onSuccess: completedTask.type,
  });

export const deleteTask = (task) =>
  apiCallBegan({
    url: `tasks/${task.id}`,
    method: "DELETE",
    onSuccess: removeTask.type,
  });
