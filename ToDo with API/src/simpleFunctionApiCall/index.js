import store from "./store.js";
import axios from "axios";
import { getTasks } from "./tasks.js";

const gettingTasks = async () => {
  try {
    //calling api
    const response = await axios.get("http://localhost:5000/api/tasks");

    //dispatch action
    store.dispatch(getTasks({ tasks: response.data }));
  } catch (error) {
    store.dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
  }
};
gettingTasks();
