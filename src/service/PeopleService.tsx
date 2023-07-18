import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";

export async function getPeople() {
  try {
    const response = await appClient.get(apiConfig.endPoints.people );
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}