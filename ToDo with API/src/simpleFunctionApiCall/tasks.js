import { createSlice } from "@reduxjs/toolkit";
const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    getTasks: (state, action) => {
      return action.payload.tasks;
    },
  },
});
export const { getTasks } = taskSlice.actions;
export default taskSlice.reducer;
