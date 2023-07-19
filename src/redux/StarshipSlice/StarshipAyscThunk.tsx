import { createAsyncThunk } from "@reduxjs/toolkit";
import { getStarship } from "../../service/StarshipService";
import constant from "../../config/constant";

interface GetStarshipList {
  id: number;
}

export const getStarshipActions = createAsyncThunk(
  "planet/getPeopleActions",
  async (payload: GetStarshipList, { dispatch, getState }) => {
    try {
      const response = await getStarship();
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
