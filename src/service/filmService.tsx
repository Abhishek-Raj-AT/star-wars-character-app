import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";

export async function getFilm() {
  try {
    const response = await appClient.get(apiConfig.endPoints.film );
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}