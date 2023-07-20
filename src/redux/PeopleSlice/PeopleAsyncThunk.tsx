import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilm } from "../../service/filmService";
import { getPeople } from "../../service/PeopleService";
import constant from "../../config/constant";

export interface GetPeopleList {
  id?: number;
  page: number;
  size: number;
}

export const getPeopleActions = createAsyncThunk(
  "people/getPeopleActions",
  async (payload: GetPeopleList, { dispatch, getState }) => {
    try {
      const response = await getPeople(payload);
      if (response.status === constant.APIResponse.defaultStatusCode) {
        console.log("next page",response.data.next.results)
        return response?.data?.results;
      } else if (response.status === constant.APIResponse.errorStatusCode) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);
