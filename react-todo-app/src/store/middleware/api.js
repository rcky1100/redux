import axios from "axios";
import { apiCallBegan } from "../general-api.js";
const api = (store) => (next) => async (action) => {
  if (action.type !== apiCallBegan.type) {
    return next(action);
  }
  const { url, method, data, onStart, onSuccess, onError } = action.payload;
  if (onStart) store.dispatch({ type: onStart });
  try {
    const response = await axios.request({
      baseURL: "http://localhost:5000/api",
      url: url,
      method: method,
      data: data,
    });
    store.dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    if (onError) {
      store.dispatch({ type: onError, payload: { error: error.message } });
    }

    store.dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
  }
};

export default api;
