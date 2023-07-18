import { createSlice } from "@reduxjs/toolkit";
import { StarshipList } from "./StarshipTypes";
import { getStarshipActions } from "./StarshipAyscThunk";

const initialState: StarshipList = {
  list: [],
  isLoading: false,
};
const StarshipSlice = createSlice({
  name: "StarShip",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStarshipActions.pending, (state: StarshipList) => {
        state.isLoading = true;
      })
      .addCase(
        getStarshipActions.fulfilled,
        (state: StarshipList, { payload }) => {
          if (payload) {
            state.list = payload;
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
