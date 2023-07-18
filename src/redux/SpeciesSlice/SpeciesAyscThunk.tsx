import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPlanet } from "../../service/PlanetService";

interface GetSpeciesList {
  id: number;
}

export const getSpeciesActions = createAsyncThunk(
  "planet/getPeopleActions",
  async (payload: GetSpeciesList, { dispatch, getState }) => {
    try {
      const response = await getPlanet();
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
