import { createSlice } from "@reduxjs/toolkit";
import { StarshipList } from "./StarshipTypes";
import { getStarshipActions } from "./StarshipAsyncThunk";
import constant from "../../config/constant";

const initialState: StarshipList = {
  list: [],
  isLoading: false,
  page: constant.page.defaultNumber,
  total: constant.page.defaultTotal,
  nextPageUrl: null,
  prevPageUrl: null,
  limit: constant.page.size
};
const StarshipSlice = createSlice({
  name: "StarShip",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStarshipActions.pending, (state: StarshipList) => {
        state.isLoading = true;
      })
      .addCase(
        getStarshipActions.fulfilled,
        (state: StarshipList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getStarshipActions.rejected, (state: StarshipList) => {
        state.isLoading = false;
      });
  },
});
export const starshipReducer = StarshipSlice.reducer;
export const starshipAction = StarshipSlice.actions;
