import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks.js";
import error from "./middleware/error.js";
import api from "./middleware/api.js";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: () => [api, error],
});
export default store;
