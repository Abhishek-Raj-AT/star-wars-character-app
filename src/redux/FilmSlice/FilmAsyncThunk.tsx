import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilm } from "../../service/filmService";
import constant from "../../config/constant";

export interface GetFilmList {
  id?: number;
  page: number
  size: number
}

export const getFilmActions = createAsyncThunk(
  "film/getFilmAction",
  async (payload: GetFilmList, { dispatch, getState }) => {
    try {
      const response = await getFilm(payload);
      if (response.status === constant.APIResponse.defaultStatusCode) {
        return{
          data: response?.data?.results,
          count: response?.data?.count,
        }
      } else if (response.status === constant.APIResponse.errorStatusCode) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);
