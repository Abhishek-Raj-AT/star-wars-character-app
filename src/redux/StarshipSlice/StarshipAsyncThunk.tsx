import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStarship } from "../../service/StarshipService";
import constant from "../../config/constant";

export interface GetStarshipList {
  id?: number;
  page: number;
  size: number;
}

export const getStarshipActions = createAsyncThunk(
  "starship/getStarshipActions",
  async (payload: GetStarshipList, { dispatch, getState }) => {
    try {
      const response = await getStarship(payload);
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
