import { createAction, createSlice } from "@reduxjs/toolkit";
import type { Task } from "../../../shared/types/task";

export interface CounterState {
  tasks: Task[];
  categories: string[];
  task: Task;
}
const CATEGORIES =["Дом", "Работа", "Гараж"]

const initialState: CounterState = {
  tasks: [],
  categories: CATEGORIES,
  task: {
    category: CATEGORIES[0],
    description: "",
    id: 1,
    title: "",
    status: "pending",
  },
};

export const addTask = createAction("ADD_TASK", (task: Task) => ({
  payload: task,
}));
export const delTask = createAction("DEL_TASK", (id: Task["id"]) => ({
  payload: id,
}));
export const setTask = createAction("SET_TASK", (task: Partial<Task>) => ({
  payload: task,
}));


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
    });
    builder.addCase(setTask, (state, action) => {
      const task = action.payload;
      state.task = { ...state.task, ...task };
    });
  },
});

const tasksReducer = tasksSlice.reducer;
export { tasksReducer };
