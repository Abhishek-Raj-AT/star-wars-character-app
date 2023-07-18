import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilm } from "../../service/filmService";

interface getFilmList {
  id: number;
}

export const getFilmActions = createAsyncThunk(
  "film/getFilmAction",
  async (payload: getFilmList, { dispatch, getState }) => {
    try {
      console.log("Payload", payload);
      const response = await getFilm();
      console.log("Response", response);
      if (response.status === 200) {
        console.log("Success response", response);
        return response;
      } else if (response.status === 401) {
        console.log("Error response", response.message);
        return response.message;
      }
    } catch (error) {
      console.log("Error", error);
      return error;
    }
  }
);
