import { combineReducers } from '@reduxjs/toolkit';
import { tasksReducer as tasks } from '../../entities/task/model/taskSlice';
import { categoryReducer as categories } from '../../entities/category/model/сategorySlice'


const rootReducers = combineReducers({
    tasks,
    categories,
});

export { rootReducers };
