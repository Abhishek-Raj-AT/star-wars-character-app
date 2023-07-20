import { getFilmActions } from "./FilmAsyncThunk";
import { FilmList } from "./FilmType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FilmList = {
  list: [],
  isLoading: false,
  value: 5,
};
const FilmSlice = createSlice({
  name: "Film",
  initialState,
  reducers: {
    increaseItems: (state, action) => {
      state.value *= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilmActions.pending, (state: FilmList) => {
        state.isLoading = true;
      })
      .addCase(getFilmActions.fulfilled, (state: FilmList, { payload }) => {
        if (payload) {
          state.list = payload;
        } else {
          state.list = [];
        }
        state.isLoading = false;
      })
      .addCase(getFilmActions.rejected, (state: FilmList) => {
        state.isLoading = false;
      });
  },
});
export const filmReducer = FilmSlice.reducer;
export const filmAction = FilmSlice.actions;
