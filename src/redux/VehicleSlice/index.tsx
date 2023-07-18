import { createSlice } from "@reduxjs/toolkit";
import { VehicleList } from "./Vehicletypes";
import { getVehicleActions } from "./VehicleAyscThnk";

const initialState:VehicleList = {
    list: [],
    isLoading: false
}
const VehicleSlice = createSlice({
    name: "Vehicle",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getVehicleActions.pending,(state: VehicleList)=>{
          state.isLoading = true;
        })
        .addCase(getVehicleActions.fulfilled,(state: VehicleList,{payload})=>{
          if(payload){
            state.list = payload
          } else{
            state.list= []
          }
          state.isLoading = false
        })
        .addCase(getVehicleActions.rejected,(state: VehicleList)=>{
          state.isLoading = false
        })
      },
})
export const vehicleReducer = VehicleSlice.reducer
export const vehicleAction = VehicleSlice.actions