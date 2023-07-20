import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { Loader } from "../../Loader";
import { useEffect } from "react";
import { getPlanetActions } from "../../redux/PlanetsSlice/PlanetAsyncThunk";

const Planets = () => {
  const planetList = useSelector(
    (state: IRootState) => state.planetStateData.list
  );const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(getPlanetActions({
      id: 0
    }))
  },[dispatch])
  const loading = useSelector((state:IRootState)=>state.planetStateData.isLoading)
  return (
    <>
    {loading?<Loader/>:<div>
      {planetList.map((planet, id) => {
        return (
          <div key={id}>
            <ul>
              <div>
                <h4>name:</h4>
                {planet.name}
              </div>
              <div>
                <h4>diameter:</h4>
                {planet.diameter}
              </div>
              <div>
                <h4>rotation period:</h4>
                {planet.rotation_period}
              </div>
              <div>
                <h4>orbital period:</h4>
                {planet.orbital_period}
              </div>
              <div>
                <h4>gravity:</h4>
                {planet.gravity}
              </div>
              <div>
                <h4>population:</h4>
                {planet.population}
              </div>
              <div>
                <h4>climate:</h4>
                {planet.climate}
              </div>
              <div>
                <h4>terrain:</h4>
                {planet.terrain}
              </div>
              <div>
                <h4>surface_water:</h4>
                {planet.surface_water}
              </div>
              <div>
                <h4>url:</h4>
                {planet.url}
              </div>
              <div>
                <h4>created:</h4>
                {planet.created}
              </div>
              <div>
                <h4>edited:</h4>
                {planet.edited}
              </div>
            </ul>
          </div>
        );
      })}
    </div>}
    </>
  );
};
export default Planets;
