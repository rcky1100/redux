import * as actionTypes from "./actionTypes.js";
export const addTask = (task) => {
  return { type: actionTypes.ADD_TASK, payload: { task: task } };
};
export const removeTask = (id) => {
  return { type: actionTypes.REMOVE_TASK, payload: { id: id } };
};

export const completedTask = (id) => {
  return { type: actionTypes.TASK_COMPLETED, payload: { id: id } };
};
