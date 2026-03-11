import * as actionTypes from "./actionTypes.js";
import { createAction } from "@reduxjs/toolkit";
export const addTask = createAction(actionTypes.ADD_TASK);
export const removeTask = createAction(actionTypes.REMOVE_TASK);
export const completedTask = createAction(actionTypes.TASK_COMPLETED);
