import { createAsyncThunk } from "@reduxjs/toolkit";
import { getVehicle } from "../../service/VehicleService";
import constant from "../../config/constant";
interface GetVehicleList {
  id: number;
}
export const getVehicleActions = createAsyncThunk(
  "Vehicle/getVehicleActions",
  async (payload: GetVehicleList, { dispatch, getState }) => {
    try {
      const response = await getVehicle();
      if (response.status === constant.APIResponse.defaultStatusCode) {
        return response?.data?.results;
      } else if (response.status === constant.APIResponse.errorStatusCode) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);
