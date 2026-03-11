import { createReducer } from "@reduxjs/toolkit";
import * as actionTypes from "./actionTypes.js";
import { removeTask } from "./action.js";
let id = 0;
export default createReducer([], {
  ADD_TASK: (state, action) => {
    state.push({
      id: ++id,
      task: action.payload.task,
      completed: false,
    });
  },
  [removeTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state.splice(index, 1);
  },
  [actionTypes.TASK_COMPLETED]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state[index].completed = true;
  },
});
