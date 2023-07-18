import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
/*
I create Only for folder structure
 **/
export async function getFilm() {
  try {
    const response = await appClient.get(apiConfig.starChar.film);
    return response.data;
  } catch (error) {
    return error;
  }
}
