import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store";
import { Loader } from "../../Loader";
import { useEffect } from "react";
import { getStarshipActions } from "../../redux/StarshipSlice/StarshipAyscThunk";

const StarShips = () => {
  const dispatch = useAppDispatch()
  const starShipList = useSelector(
    (state: IRootState) => state.starShipStateData.list
  );
  const loading = useSelector((state:IRootState) =>state.starShipStateData.isLoading)
  useEffect(()=>{
    dispatch(getStarshipActions({
      id: 1,
      page: 0,
      size: 0
    }))
  },[dispatch])
  return (
    <>
    {loading ? <Loader/>:<div>
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
    </div>}
    </>
  );
};
export default StarShips;
