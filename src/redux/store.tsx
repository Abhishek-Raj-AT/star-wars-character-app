import { configureStore } from "@reduxjs/toolkit";
import { filmReducer } from "./FilmSlice";
import { useDispatch } from "react-redux";
import { starshipReducer } from "./StarshipSlice";
import { peopleReducer } from "./PeopleSlice";
import { planetReducer } from "./PlanetsSlice";
import { speciesReducer } from "./SpeciesSlice";
import { vehicleReducer } from "./VehicleSlice";

export const store = configureStore({
  reducer: {
    filmStateData: filmReducer,
    starShipStateData: starshipReducer,
    peopleStateData: peopleReducer,
    planetStateData: planetReducer,
    speciesStateData: speciesReducer,
    vehicleStateData: vehicleReducer,
  },
});
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;