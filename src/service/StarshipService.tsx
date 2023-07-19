import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";
import { GetStarshipList } from "../redux/StarshipSlice/StarshipAyscThunk";

export async function getStarship(payload: GetStarshipList) {
  try {
    const response = await appClient.get(apiConfig.endPoints.planets + "?page=" + payload.page + "&size=" + payload.size);
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}