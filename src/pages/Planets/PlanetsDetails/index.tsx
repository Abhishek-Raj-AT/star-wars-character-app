import { useEffect } from "react";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIndividualPlanetActions } from "../../../redux/PlanetsSlice/PlanetAsyncThunk";
import { planetAction } from "../../../redux/PlanetsSlice";

const PlanetDetails = () => {
  const { planetId } = useParams();
  const dispatch = useAppDispatch();
  const { specificPlanet} = useSelector(
    (state: IRootState) => state.planetStateData
  );
  useEffect(() => {
    const id = Number(planetId);
    dispatch(
     getIndividualPlanetActions({id})
    );
    return () =>{
      dispatch(planetAction.resetSpecificPlanet())
    }
  }, [dispatch, planetId]);
  return (
    <div>
      <div>{specificPlanet?.name}</div>
      <div>{specificPlanet?.created}</div>
      <div>{specificPlanet?.rotation_period}</div>
      <div>{specificPlanet?.climate}</div>
      <div>{specificPlanet?.edited}</div>
      <div>{specificPlanet?.gravity}</div>
      <div>{specificPlanet?.orbital_period}</div>
      <div>{specificPlanet?.population}</div>
      <div>{specificPlanet?.residents}</div>
      <div>{specificPlanet?.surface_water}</div>
    </div>
  );
};
export default PlanetDetails;
