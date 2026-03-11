import store from "./store.js";
import { addTask, removeTask, completedTask } from "./tasks.js";
import { addEmployee } from "./employees.js";
const unsubscribe = store.subscribe(() => {
  console.log("Updated", store.getState());
});
store.dispatch(addTask({ task: "Task 1" }));
store.dispatch(addTask({ task: "Task 2" }));
store.dispatch(completedTask({ id: 2 }));
store.dispatch(addEmployee({ name: "Harley" }));
unsubscribe();
store.dispatch(removeTask({ id: 1 }));
store.dispatch({ type: "SHOW_ERROR", payload: { error: "User not found" } });
console.log(store.getState());
