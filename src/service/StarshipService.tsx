import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";

export async function getStarship() {
  try {
    const response = await appClient.get(apiConfig.endPoints.planets );
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}