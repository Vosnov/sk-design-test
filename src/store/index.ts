import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./reducers/cities";
import { formReducer } from "./reducers/form";
import { sourcesReducer } from "./reducers/sources";

export const rootReducer = combineReducers({
  cities: citiesReducer,
  sources: sourcesReducer,
  form: formReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: true}).concat()
})

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch