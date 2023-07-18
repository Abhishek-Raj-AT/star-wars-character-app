import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilm } from "../../service/filmService";

interface GetFilmList {
  id: number;
}

export const getFilmActions = createAsyncThunk(
  "film/getFilmAction",
  async (payload: GetFilmList, { dispatch, getState }) => {
    try {
      const response = await getFilm();
      if (response.status === 200) {
        return response?.data?.results;
      } else if (response.status === 401) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);
