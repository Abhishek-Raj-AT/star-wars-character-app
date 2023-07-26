import { useParams } from "react-router-dom";
import { IRootState, useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { getIndividualStarshipActions, getStarshipActions } from "../../../redux/StarshipSlice/StarshipAsyncThunk";
import { useEffect } from "react";

const StarShipsDetails = () => {
  const { starshipId } = useParams();
  const dispatch = useAppDispatch();
  const { specificStarship } = useSelector(
    (state: IRootState) => state.starShipStateData
  );
  useEffect(() => {
    const id = Number(starshipId);
    dispatch(getIndividualStarshipActions({id})
    );
  }, [dispatch, starshipId]);

  return (
    <div>
      <div>{specificStarship.name}</div>
      <div>{specificStarship.MGLT}</div>
      <div>{specificStarship.length}</div>
      <div>{specificStarship.crew}</div>
      <div>{specificStarship.hyperdrive_rating}</div>
      <div>{specificStarship.manufacturer}</div>
      <div>{specificStarship.model}</div>
      <div>{specificStarship.max_atmosphering_speed}</div>
      <div>{specificStarship.consumables}</div>
    </div>
  );
};
export default StarShipsDetails;
