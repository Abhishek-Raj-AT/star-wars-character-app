import { createAsyncThunk } from "@reduxjs/toolkit";
import { getIndividualPeople, getPeople } from "../../service/PeopleService";
import constant from "../../config/constant";

export interface GetPeopleList {
  id?: number;
  page: number;
  size: number;
}
export interface GetIndividualPeopleList{
  id: number
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

export const getIndividualPeopleActions = createAsyncThunk(
  "IndividualPeople/getPeopleIndividualActions",
  async (payload: GetIndividualPeopleList, { dispatch, getState }) => {
    try {
      const response = await getIndividualPeople(payload);
      if (response.status === constant.APIResponse.defaultStatusCode) {
        console.log("people response", response);
        return {
          data: response?.data,
        }
      } else if (response.status === constant.APIResponse.errorStatusCode) {
        return response?.data?.message;
      }
    } catch (error) {
      return error;
    }
  }
);
