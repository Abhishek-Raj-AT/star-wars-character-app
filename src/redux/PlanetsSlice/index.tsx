import { createSlice } from "@reduxjs/toolkit";
import { PlanetList } from "./PlanetTypes";
import {  getPlanetActions } from "./PlanetAsyncThunk";
import constant from "../../config/constant";

const initialState: PlanetList = {
  list: [],
  isLoading: false,
  page: constant.page.defaultNumber,
  total: constant.page.defaultTotal,
  limit: constant.page.size
};
const PlanetSlice = createSlice({
  name: "Film",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.page = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlanetActions.pending, (state: PlanetList) => {
        state.isLoading = true;
      })
      .addCase(getPlanetActions.fulfilled, (state: PlanetList, { payload }) => {
        if (payload) {
          state.list = payload?.data;
          state.total = payload?.count;
        } else {
          state.list = [];
        }
        state.isLoading = false;
      })
      .addCase(getPlanetActions.rejected, (state: PlanetList) => {
        state.isLoading = false;
      });
  },
});
export const planetReducer = PlanetSlice.reducer;
export const planetAction = PlanetSlice.actions;
