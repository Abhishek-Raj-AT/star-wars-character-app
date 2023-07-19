import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilm } from "../../service/filmService";
import constant from "../../config/constant";

interface GetFilmList {
  id: number;
}

export const getFilmActions = createAsyncThunk(
  "film/getFilmAction",
  async (payload: GetFilmList, { dispatch, getState }) => {
    try {
      const response = await getFilm();
      if (response.status === constant.APIResponse.defaultStatusCode) {
        return response?.data?.results;
      } else if (response.status === constant.APIResponse.errorStatusCode) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);
