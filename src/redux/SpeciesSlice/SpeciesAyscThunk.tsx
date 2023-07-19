import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPlanet } from "../../service/PlanetService";
import constant from "../../config/constant";

export interface GetSpeciesList {
  id: number;
  page: number;
  size: number;
}

export const getSpeciesActions = createAsyncThunk(
  "planet/getPeopleActions",
  async (payload: GetSpeciesList, { dispatch, getState }) => {
    try {
      const response = await getPlanet(payload);
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
