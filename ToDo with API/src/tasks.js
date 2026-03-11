import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiCallBegan } from "./general-api.js";
import axios from "./utils/http.js";
const initialState = {
  tasks: [],
  loading: false,
  error: null,
};
export const fetchTasks = createAsyncThunk(
  "fetchTasks",
  async (a, { rejectWithValue }) => {
    try {
      const response = await axios.get("/tasks");
      return { tasks: response.data };
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  },
);
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
  extraReducers: {
    [fetchTasks.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload.tasks;
      state.loading = false;
    },
    [fetchTasks.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
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
