import { createAsyncThunk } from "@reduxjs/toolkit";
import { getVehicle } from "../../service/VehicleService";
import constant from "../../config/constant";
export interface GetVehicleList {
  id?: number;
  page: number;
  size: number;
}
export const getVehicleActions = createAsyncThunk(
  "Vehicle/getVehicleActions",
  async (payload: GetVehicleList, { dispatch, getState }) => {
    try {
      const response = await getVehicle(payload);
      if (response.status === constant.APIResponse.defaultStatusCode) {
        return {
          data: response?.data?.results,
          count: response?.data?.count
        }
      } else if (response.status === constant.APIResponse.errorStatusCode) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);
