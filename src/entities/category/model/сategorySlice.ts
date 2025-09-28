import { createSlice } from "@reduxjs/toolkit";
import { addCategory, setCategory } from "./actions";


export interface CategoriesState {
    category: string;
    categories: string[];
};

export const CATEGORIES = ["Дом", "Работа", "Гараж"];

const initialState: CategoriesState = {
    category: '',
    categories: CATEGORIES,
};

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addCategory, (state, action) => {
            state.categories = [...state.categories, action.payload];
            state.category = initialState.category;
        });
        builder.addCase(setCategory, (state, action) => {
            state.category = action.payload
        })
    },
});

const categoryReducer = categorySlice.reducer;
export { categoryReducer };
