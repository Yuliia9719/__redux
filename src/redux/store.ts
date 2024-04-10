import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReductor from "./counterSlice.ts";
import { useDispatch } from "react-redux";
import AppThunk from './store'

export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    counter: counterReductor
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat()
});

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store 