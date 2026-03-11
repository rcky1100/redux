import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "./tasks.js";
import employeeReducer from "./employees.js";
import log from "./middleware/log.js";
import { createLogger } from "redux-logger";
import error from "./middleware/error.js";

const logger = createLogger();
const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employee: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    log,
    logger,
    error,
  ],
});
export default store;
