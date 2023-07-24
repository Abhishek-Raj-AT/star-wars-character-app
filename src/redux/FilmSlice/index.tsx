import constant from "../../config/constant";
import { getFilmActions, getIndividualFilmActions } from "./FilmAsyncThunk";
import { FilmList } from "./FilmType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FilmList = {
  list: [],
  isLoading: false,
  page: constant.page.defaultNumber,
  total: constant.page.defaultTotal,
  limit: constant.page.size
};
const FilmSlice = createSlice({
  name: "Film",
  initialState,
  reducers: {
    setCurrentPageSize: (state, action) => {
      state.limit = action.payload;
    },
    setCurrentPage(state, action) {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFilmActions.pending, (state: FilmList) => {
        state.isLoading = true;
      })
      .addCase(getFilmActions.fulfilled, (state: FilmList, { payload }) => {
        if (payload) {
          state.list = payload?.data
          state.total = payload?.count
        } else {
          state.list = [];
        }
        state.isLoading = false;
      })
      .addCase(getIndividualFilmActions.rejected, (state: FilmList) => {
        state.isLoading = false;
      })
      .addCase(getIndividualFilmActions.pending, (state: FilmList) => {
        state.isLoading = true;
      })
      .addCase(getIndividualFilmActions.fulfilled, (state: FilmList, { payload }) => {
        if (payload) {
          state.list = payload?.data
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
