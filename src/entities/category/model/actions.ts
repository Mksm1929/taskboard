import { createAction } from "@reduxjs/toolkit";


export const addCategory = createAction("ADD_CATEGORY", (category: string) => ({
    payload: category,
}));

export const setCategory = createAction("SET_CATEGORY", (category: string) => ({
    payload: category,
}))