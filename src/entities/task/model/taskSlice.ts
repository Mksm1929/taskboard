import { createAction, createSlice } from "@reduxjs/toolkit";
import type { Task } from "../../../shared/types/task";

export interface CounterState {
  tasks: Task[];
  categories: string[];
  id: number;
  task: Task;
}
const CATEGORIES = ["Дом", "Работа", "Гараж"];

const initialState: CounterState = {
  tasks: [],
  categories: CATEGORIES,
  id: 1,
  task: {
    category: CATEGORIES[0],
    description: "",
    id: 1,
    title: "",
    isDone: false,
  },
};

export const addCategory = createAction("ADD_CATEGORY", (category: Task['category']) => ({
  payload: category,
}));
export const addTask = createAction("ADD_TASK", (task: Task) => ({
  payload: task,
}));
export const delTask = createAction("DEL_TASK", (id: Task["id"]) => ({
  payload: id,
}));
export const setTask = createAction("SET_TASK", (task: Partial<Task>) => ({
  payload: task,
}));
export const changeTaskStatus = createAction(
  "CHANGE_TASK_STATUS",
  (id: Task['id']) => ({
    payload: id
  })
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCategory, (state, action) => {
      state.categories = [...state.categories, action.payload]
    })
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
    })
  },
});

const tasksReducer = tasksSlice.reducer;
export { tasksReducer };
