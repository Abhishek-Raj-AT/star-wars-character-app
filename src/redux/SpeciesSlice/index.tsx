import { createSlice } from "@reduxjs/toolkit";
import { getSpeciesActions } from "./SpeciesAsyncThunk";
import { SpeciesList } from "./SpeciesTypes";

const initialState: SpeciesList = {
  list: [],
  isLoading: false,
};
const SpeciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpeciesActions.pending, (state: SpeciesList) => {
        state.isLoading = true;
      })
      .addCase(
        getSpeciesActions.fulfilled,
        (state: SpeciesList, { payload }) => {
          if (payload) {
            state.list = payload;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getSpeciesActions.rejected, (state: SpeciesList) => {
        state.isLoading = false;
      });
  },
});
export const speciesReducer = SpeciesSlice.reducer;
export const speciesAction = SpeciesSlice.actions;
