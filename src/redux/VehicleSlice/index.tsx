import { createSlice } from "@reduxjs/toolkit";
import { VehicleList } from "./Vehicletypes";
import { getVehicleActions } from "./VehicleAsyncThunk";
import constant from "../../config/constant";

const initialState: VehicleList = {
  list: [],
  isLoading: false,
  page: constant.page.defaultNumber,
  total: constant.page.defaultTotal,
  limit: constant.page.size
};
const VehicleSlice = createSlice({
  name: "Vehicle",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVehicleActions.pending, (state: VehicleList) => {
        state.isLoading = true;
      })
      .addCase(
        getVehicleActions.fulfilled,
        (state: VehicleList, { payload }) => {
          if (payload) {
            state.list = payload?.data;
            state.total = payload?.count
          } else {
            state.list = [];
          }
          state.isLoading = false;
        }
      )
      .addCase(getVehicleActions.rejected, (state: VehicleList) => {
        state.isLoading = false;
      });
  },
});
export const vehicleReducer = VehicleSlice.reducer;
export const vehicleAction = VehicleSlice.actions;
