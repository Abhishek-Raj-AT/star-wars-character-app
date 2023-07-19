import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";
import { GetPlanetList } from "../redux/PlanetsSlice/PlanetAyscThunk";

export async function getPlanet(payload: GetPlanetList) {
  try {
    const response = await appClient.get(apiConfig.endPoints.planets + "?page=" + payload.page + "&size=" + payload.size);
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}