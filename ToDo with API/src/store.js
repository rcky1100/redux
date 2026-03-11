import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "./tasks.js";
import employeeReducer from "./employees.js";
import error from "./middleware/error.js";
import api from "./middleware/api.js";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employee: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, error],
});
export default store;
