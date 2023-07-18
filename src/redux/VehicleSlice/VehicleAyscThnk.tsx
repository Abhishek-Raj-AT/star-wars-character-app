import { createAsyncThunk } from "@reduxjs/toolkit";
import { getVehicle } from "../../service/VehicleService";
interface GetVehicleList {
    id: number
}
export const getVehicleActions = createAsyncThunk(
    "Vehicle/getVehicleActions",
    async(payload: GetVehicleList,{dispatch, getState}) => {
        try {
                  const response = await getVehicle();
                  if (response.status === 200) {
                    return response?.data?.results;
                  } else if (response.status === 401) {
                    return response?.data?.message;
                  }
                }catch(error) {
            return(error)
        }
    }
)