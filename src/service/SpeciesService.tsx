import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";
import { GetSpeciesList } from "../redux/SpeciesSlice/SpeciesAsyncThunk";

export async function getSpecies(payload: GetSpeciesList) {
  try {
    const response = await appClient.get(apiConfig.endPoints.species + "?page=" + payload.page + "&size=" + payload.size);
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}