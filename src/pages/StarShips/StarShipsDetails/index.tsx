import { useParams } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { getStarshipActions } from "../../../redux/StarshipSlice/StarshipAsyncThunk";
import { useEffect } from "react";

const StarShipsDetails = () => {
  const { starshipId } = useParams();
  const dispatch = useAppDispatch();
  const { list, page, limit } = useSelector(
    (state: IRootState) => state.starShipStateData
  );
  const value = list[Number.parseInt(starshipId!) - 1];
  useEffect(() => {
    const id = Number(starshipId);
    dispatch(
      getStarshipActions({
        id,
        page,
        size: limit,
      })
    );
  }, [dispatch, limit, page, starshipId]);

  return (
    <div>
      <div>{value.name}</div>
      <div>{value.MGLT}</div>
      <div>{value.length}</div>
      <div>{value.crew}</div>
      <div>{value.hyperdrive_rating}</div>
      <div>{value.manufacturer}</div>
      <div>{value.model}</div>
      <div>{value.max_atmosphering_speed}</div>
      <div>{value.consumables}</div>
    </div>
  );
};
export default StarShipsDetails;
