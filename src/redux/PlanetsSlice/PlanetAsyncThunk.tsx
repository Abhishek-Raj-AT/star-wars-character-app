import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPlanet } from "../../service/PlanetService";
import constant from "../../config/constant";

export interface GetPlanetList {
  id: number;
  page: number
  size: number;
}

export const getPlanetActions = createAsyncThunk(
  "planet/getPlanetActions",
  async (payload: GetPlanetList, { dispatch, getState }) => {
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
