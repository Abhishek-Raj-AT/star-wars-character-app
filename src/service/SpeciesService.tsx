import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";

export async function getSpecies() {
  try {
    const response = await appClient.get(apiConfig.endPoints.species );
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}