import store from "./store.js";
import { addTask, removeTask, completedTask } from "./action.js";
const unsubscribe = store.subscribe(() => {
  console.log("Updated", store.getState());
});
store.dispatch(addTask({ task: "Task 1" }));
store.dispatch(addTask({ task: "Task 2" }));
store.dispatch(completedTask({ id: 2 }));
unsubscribe();
store.dispatch(removeTask({ id: 1 }));
console.log(store.getState());
