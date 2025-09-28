import { createAction } from "@reduxjs/toolkit";
import type { Task } from "../../../shared/types/task";


const ACTIONS_NAMES = {
    ADD_TASK: 'ADD_TASK',
    DEL_TASK: 'DEL_TASK',
    SET_TASK: 'SET_TASK',
    CHANGE_TASK_STATUS: 'CHANGE_TASK_STATUS',
};

export const addTask = createAction(ACTIONS_NAMES.ADD_TASK, (task: Task) => ({
    payload: task,
}));
export const delTask = createAction(ACTIONS_NAMES.DEL_TASK, (id: Task["id"]) => ({
    payload: id,
}));
export const setTask = createAction(ACTIONS_NAMES.SET_TASK, (task: Partial<Task>) => ({
    payload: task,
}));
export const changeTaskStatus = createAction(
    ACTIONS_NAMES.CHANGE_TASK_STATUS,
    (id: Task['id']) => ({
        payload: id
    })
);