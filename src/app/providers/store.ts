import { configureStore } from '@reduxjs/toolkit';
import { rootReducers } from './reducers';


const store = configureStore({
    reducer: rootReducers,
    devTools: true,
});

export { store };
export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ActionStoreParams = { state: AppState; dispatch: AppDispatch };
