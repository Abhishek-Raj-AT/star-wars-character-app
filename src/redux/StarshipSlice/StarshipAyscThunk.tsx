import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPlanet } from "../../service/PlanetService";
import { getStarship } from "../../service/StarshipService";

interface GetStarshipList {
  id: number;
}

export const getStarshipActions = createAsyncThunk(
  "planet/getPeopleActions",
  async (payload: GetStarshipList, { dispatch, getState }) => {
    try {
      const response = await getStarship();
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
