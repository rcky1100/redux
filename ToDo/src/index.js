import store from "./store.js";
import { addTask, removeTask, completedTask } from "./action.js";
const unsubscribe = store.subscribe(() => {
  console.log("Updated", store.getState());
});
store.dispatch(addTask("Task 1"));
store.dispatch(addTask("Task 2"));
store.dispatch(completedTask(2));
unsubscribe();
store.dispatch(removeTask(1));
console.log(store.getState());
