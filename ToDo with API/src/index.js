import store from "./store.js";
import { apiCallBegan } from "./general-api.js";
import {
  fetchTasks,
  loadTasks,
  addNewTask,
  updateCompleted,
  deleteTask,
} from "./tasks.js";
// store.dispatch(fetchTasks());

// store.dispatch({
//   type: "apiRequest",
//   payload: {
//     url: "/taskss",
//     onStart: "tasks/apiRequested",
//     onSuccess: "tasks/getTasks",
//     onError: "tasks/apiRequestedFailed",
//   },
// });

// store.dispatch(
//   apiCallBegan({
//     url: "/tasks",
//     onStart: "tasks/apiRequested",
//     onSuccess: "tasks/getTasks",
//     onError: "tasks/apiRequestedFailed",
//   }),
// );

store.dispatch(loadTasks());
//store.dispatch(addNewTask({ task: "Complete this exercise" }));
store.dispatch(updateCompleted({ id: 4, completed: true }));
store.dispatch(deleteTask({ id: 2 }));
