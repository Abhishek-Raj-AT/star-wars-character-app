import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPlanet } from "../../service/PlanetService";
import constant from "../../config/constant";

interface GetSpeciesList {
  id: number;
}

export const getSpeciesActions = createAsyncThunk(
  "species/getSpeciesActions",
  async (payload: GetSpeciesList, { dispatch, getState }) => {
    try {
      const response = await getPlanet();
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
