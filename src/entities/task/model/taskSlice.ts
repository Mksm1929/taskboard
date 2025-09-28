import { createSlice } from "@reduxjs/toolkit";
import type { Task } from "../../../shared/types/task";
import { CATEGORIES } from "../../category/model/сategorySlice";
import { addTask, changeTaskStatus, delTask, setTask } from "./actions";


export interface CounterState {
  tasks: Task[];
  id: number;
  task: Task;
}

const initialState: CounterState = {
  tasks: [],
  id: 1,
  task: {
    category: CATEGORIES[0],
    description: "",
    id: 1,
    title: "",
    isDone: false,
  },
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(delTask, (state, action) => {
      state.tasks = state.tasks.filter((e) => e.id !== action.payload);
    });
    builder.addCase(addTask, (state, action) => {
      state.tasks = [...state.tasks, action.payload];
      state.task = initialState.task;
      state.id = state.id + 1;
    });
    builder.addCase(setTask, (state, action) => {
      const task = action.payload;
      state.task = { ...state.task, ...task };
    });
    builder.addCase(changeTaskStatus, (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks.map((e) => e.id === id ? { ...e, isDone: !e.isDone } : e);
    });
  },
});

const tasksReducer = tasksSlice.reducer;
export { tasksReducer };
