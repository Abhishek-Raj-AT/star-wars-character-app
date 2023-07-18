import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";

export async function getVehicle() {
  try {
    const response = await appClient.get(apiConfig.endPoints.Vehicle );
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}