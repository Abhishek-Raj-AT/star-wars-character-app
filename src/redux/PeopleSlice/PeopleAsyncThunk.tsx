import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPeople } from "../../service/PeopleService";
import constant from "../../config/constant";

export interface GetPeopleList {
  id?: number;
  page: number;
  size: number;
}

export const getPeopleActions = createAsyncThunk(
  "people/getPeopleActions",
  async (payload: GetPeopleList, { dispatch, getState }) => {
    try {
      const response = await getPeople(payload);
      if (response.status === constant.APIResponse.defaultStatusCode) {
        return {
          data: response?.data?.results,
          count: response?.data?.count
        }
      } else if (response.status === constant.APIResponse.errorStatusCode) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);
