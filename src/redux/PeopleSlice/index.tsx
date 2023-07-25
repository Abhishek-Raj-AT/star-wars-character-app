import { createSlice } from "@reduxjs/toolkit";
import { PeoplesList } from "./PeopleType";
import { getPeopleActions } from "./PeopleAsyncThunk";
import constant from "../../config/constant";

const initialState: PeoplesList = {
  list: [],
  isLoading: false,
  page: constant.page.defaultNumber,
  total: constant.page.defaultTotal,
  limit: constant.page.size,
};
const PeopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPeopleActions.pending, (state: PeoplesList) => {
        state.isLoading = true;
      })
      .addCase(
        getPeopleActions.fulfilled,
        (state: PeoplesList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count;
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getPeopleActions.rejected, (state: PeoplesList) => {
        state.isLoading = false;
      });
  },
});
export const peopleReducer = PeopleSlice.reducer;
export const peopleAction = PeopleSlice.actions;
