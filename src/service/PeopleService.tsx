import { appClient } from "./NetworkService";
import apiConfig from "../config/api";
import { hasError, hasSuccess } from "./ApiHelper";
import { GetPeopleList } from "../redux/PeopleSlice/PeopleAyscThunk";

export async function getPeople(payload:GetPeopleList) {
  try {
    const response = await appClient.get(apiConfig.endPoints.people + "?page=" + payload.page + "&size=" + payload.size );
    return hasSuccess(response.data);
  } catch (error) {
    return hasError(error);
  }
}