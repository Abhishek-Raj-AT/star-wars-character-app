import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilm } from "../../service/filmService";
import { getPeople } from "../../service/PeopleService";

interface GetPeopleList {
  id: number;
}

export const getPeopleActions = createAsyncThunk(
  "people/getPeopleActions",
  async (payload: GetPeopleList, { dispatch, getState }) => {
    try {
      const response = await getPeople();
      if (response.status === 200) {
        console.log("Success response", response.data.results);
        return response?.data?.results;
      } else if (response.status === 401) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);
