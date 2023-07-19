import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPlanet } from "../../service/PlanetService";

interface GetPlanetList {
  id: number;
}

export const getPlanetActions = createAsyncThunk(
  "planet/getPeopleActions",
  async (payload: GetPlanetList, { dispatch, getState }) => {
    try {
      const response = await getPlanet();
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
