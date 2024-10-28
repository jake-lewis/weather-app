import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { locationApi } from '../features/location/locationApi';


const rootReducer = combineReducers({
    [locationApi.reducerPath]: locationApi.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(locationApi.middleware),
    preloadedState,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];