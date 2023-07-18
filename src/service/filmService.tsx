import { appClient } from "./NetworkService";
import apiConfig from "../config/api";

export async function getFilm() {
  try {
    const response = await appClient.get(apiConfig.films.film );
    return response.data;
  } catch (error) {
    return error;
  }
}
