import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";
import { GetVehicleList } from "../redux/VehicleSlice/VehicleAsyncThunk";

export async function getVehicle(payload: GetVehicleList) {
  try {
    const response = await appClient.get(apiConfig.endPoints.vehicle + "?page=" + payload.page + "&size=" + payload.size);
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}