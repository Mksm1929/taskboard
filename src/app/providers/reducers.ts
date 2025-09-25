import { combineReducers } from '@reduxjs/toolkit';
import { tasksReducer as tasks } from '../../entities/task/model/taskSlice';

const rootReducers = combineReducers({
    app: tasks,
});

export { rootReducers };
