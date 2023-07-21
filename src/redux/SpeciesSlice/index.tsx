import { createSlice } from "@reduxjs/toolkit";
import { getSpeciesActions } from "./SpeciesAsyncThunk";
import { SpeciesList } from "./SpeciesTypes";
import constant from "../../config/constant";

const initialState: SpeciesList = {
  list: [],
  isLoading: false,
  page: constant.page.defaultNumber,
  total: constant.page.defaultTotal,
  nextPageUrl: null,
  prevPageUrl: null,
  limit: constant.page.size
};
const SpeciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSpeciesActions.pending, (state: SpeciesList) => {
        state.isLoading = true;
      })
      .addCase(
        getSpeciesActions.fulfilled,
        (state: SpeciesList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count
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
