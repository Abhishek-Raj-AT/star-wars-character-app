import { FilmList } from "./FilmType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FilmList = {
  list: [],
  isLoading: false,
  value: 5,
};
const FilmSlice = createSlice({
  name: "star",
  initialState,
  reducers: {
    increaseItems: (state, action) => {
      state.value *= action.payload;
    },
  },
  extraReducers: {},
});
export const filmReducer = FilmSlice.reducer;
export const filmAction = FilmSlice.actions;
