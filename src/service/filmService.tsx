import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";
import { GetFilmList } from "../redux/FilmSlice/FilmAyscThunk";

export async function getFilm(payload: GetFilmList) {
  try {
    const response = await appClient.get(apiConfig.endPoints.film + "?page=" + payload.page + "&size=" + payload.size);
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}