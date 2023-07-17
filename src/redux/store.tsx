import { configureStore } from "@reduxjs/toolkit";
import { filmReducer } from "./FilmSlice/FilmSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filmStateData: filmReducer,
  },
});
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
