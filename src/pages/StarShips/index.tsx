import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { getStarshipActions } from "../../redux/StarshipSlice/StarshipAsyncThunk";

const StarShips = () => {
  const dispatch = useAppDispatch()
  const starShipList = useSelector(
    (state: IRootState) => state.starShipStateData.list
  );
  useEffect(()=>{
    dispatch(getStarshipActions({
      id: 1
    }))
  },[dispatch])
  return (
    <div>
      {starShipList.map((starShips,id) => {
        return (
          <ul key={id}>
            <p>{starShips.name}</p>
            <p>{starShips.model}</p>
            <p>{starShips.starship_class}</p>
            <p>{starShips.manufacturer}</p>
            <p>{starShips.cost_in_credits}</p>
            <p>{starShips.length}</p>
            <p>{starShips.crew}</p>
            <p>{starShips.passengers}</p>
            <p>{starShips.max_atmosphering_speed}</p>
            <p>{starShips.hyperdrive_rating}</p>
            <p>{starShips.MGLT}</p>
            <p>{starShips.cargo_capacity}</p>
            <p>{starShips.consumables}</p>
            <p>{starShips.created}</p>
            <p>{starShips.edited}</p>
          </ul>
        );
      })}
    </div>
  );
};
export default StarShips;
