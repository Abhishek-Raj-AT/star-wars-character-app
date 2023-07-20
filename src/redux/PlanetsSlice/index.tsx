import { createSlice } from "@reduxjs/toolkit";
import { PlanetList } from "./PlanetTypes";
import { getPlanetActions } from "./PlanetAsyncThunk";

const initialState: PlanetList = {
  list: [],
  isLoading: false,
};
const PlanetSlice = createSlice({
  name: "Film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlanetActions.pending, (state: PlanetList) => {
        state.isLoading = true;
      })
      .addCase(getPlanetActions.fulfilled, (state: PlanetList, { payload }) => {
        if (payload) {
          state.list = payload;
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
