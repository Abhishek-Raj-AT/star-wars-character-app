import { useEffect } from "react";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPlanetActions } from "../../../redux/PlanetsSlice/PlanetAsyncThunk";

const PlanetDetails = () => {
  const { planetId } = useParams();
  const dispatch = useAppDispatch();
  const { list, page, limit } = useSelector(
    (state: IRootState) => state.planetStateData
  );
  const values = list[Number.parseInt(planetId!) - 1];
  useEffect(() => {
    const id = Number(planetId);
    dispatch(
      getPlanetActions({
        id,
        page,
        size: limit,
      })
    );
  }, [dispatch, limit, page, planetId]);
  return (
    <div>
      <div>{values.name}</div>
      <div>{values.created}</div>
      <div>{values.rotation_period}</div>
      <div>{values.climate}</div>
      <div>{values.edited}</div>
      <div>{values.gravity}</div>
      <div>{values.orbital_period}</div>
      <div>{values.population}</div>
      <div>{values.residents}</div>
      <div>{values.surface_water}</div>
    </div>
  );
};
export default PlanetDetails;
